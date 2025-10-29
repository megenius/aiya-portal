/**
 * Cloudflare Function for Share URLs with OG Meta Tags
 *
 * This function generates a landing page that mimics the real coupon collection page
 * Complete with OG tags for social media sharing
 */

interface PageLiff {
  id: string;
  liff_id: string;
  slug: string;
  name: string;
  image?: string;
  bg_color?: string;
  channel?: string;
  metadata?: any;
  status: string;
}

interface VoucherBrand {
  id: string;
  name: string;
  logo?: string;
  primaryColor?: string;
}

interface Voucher {
  id: string;
  name: string;
  title?: string;
  description?: string;
  banner?: string;
  voucher_brand_id?: VoucherBrand;
  metadata?: {
    title?: { th?: string; en?: string };
    description?: { th?: string; en?: string };
    condition?: { th?: string; en?: string };
  };
}

interface Env {
  DIRECTUS_URL: string;
  DIRECTUS_TOKEN: string;
}

// Check if user agent is a crawler/bot
function isCrawler(userAgent: string): boolean {
  const crawlerPatterns = [
    'bot',
    'crawler',
    'spider',
    'facebook',
    'twitter',
    'whatsapp',
    'telegram',
    'slack',
    'linkedin',
    'pinterest',
    'reddit',
    'slackbot',
    'facebot',
    'twitterbot',
  ];

  const lowerUA = userAgent.toLowerCase();
  return crawlerPatterns.some((pattern) => lowerUA.includes(pattern));
}

// Generate Directus file URL
function getDirectusFileUrl(
  baseUrl: string,
  fileId: string,
  options: {
    width?: number;
    height?: number;
    fit?: string;
    format?: string;
    quality?: number;
  } = {}
): string {
  const params = new URLSearchParams();

  if (options.width) params.append('width', options.width.toString());
  if (options.height) params.append('height', options.height.toString());
  if (options.fit) params.append('fit', options.fit);
  if (options.format) params.append('format', options.format);
  if (options.quality) params.append('quality', options.quality.toString());

  const queryString = params.toString();
  return `${baseUrl}/assets/${fileId}${queryString ? '?' + queryString : ''}`;
}

// Language detection from Accept-Language header
function detectLanguage(acceptLanguage: string | null, queryLang?: string): 'th' | 'en' {
  // Query parameter takes precedence
  if (queryLang) {
    return queryLang === 'en' ? 'en' : 'th';
  }

  // Parse Accept-Language header (format: "en-US,en;q=0.9,th;q=0.8")
  if (acceptLanguage) {
    const languages = acceptLanguage
      .toLowerCase()
      .split(',')
      .map((lang) => {
        const [code, qPart] = lang.trim().split(';');
        const quality = qPart ? parseFloat(qPart.split('=')[1]) : 1.0;
        const langCode = code.split('-')[0]; // Extract primary language code (en from en-US)
        return { code: langCode, quality };
      })
      .sort((a, b) => b.quality - a.quality); // Sort by quality value (highest first)

    // Find first supported language (en or th)
    for (const lang of languages) {
      if (lang.code === 'en') return 'en';
      if (lang.code === 'th') return 'th';
    }
  }

  // Default to Thai
  return 'th';
}

// Escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Fetch page from Directus by slug
async function fetchPageBySlug(
  directusUrl: string,
  token: string,
  slug: string
): Promise<PageLiff | null> {
  const url = new URL(`${directusUrl}/items/pages_liff`);
  url.searchParams.append('filter[slug][_eq]', slug);
  url.searchParams.append('filter[status][_eq]', 'published');
  url.searchParams.append('limit', '1');
  url.searchParams.append(
    'fields',
    'id,liff_id,slug,name,image,bg_color,channel,metadata,status'
  );

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    console.error('Failed to fetch page:', response.status, await response.text());
    return null;
  }

  const data: any = await response.json();
  if (!data.data || data.data.length === 0) {
    return null;
  }

  return data.data[0];
}

// Fetch voucher from Directus by ID
async function fetchVoucher(
  directusUrl: string,
  token: string,
  voucherId: string
): Promise<Voucher | null> {
  const url = new URL(`${directusUrl}/items/vouchers/${voucherId}`);
  url.searchParams.append('fields', '*,voucher_brand_id.*');

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    console.error(
      'Failed to fetch voucher:',
      response.status,
      await response.text()
    );
    return null;
  }

  const data: any = await response.json();
  return data.data;
}

// Generate HTML that mimics real coupon collection page
function generateHTML(
  page: PageLiff,
  coupon: Voucher,
  baseUrl: string,
  shareUrl: string,
  directusUrl: string,
  lang: 'th' | 'en' = 'th'
): string {
  // Language-specific texts
  const texts = {
    th: {
      detailsTab: 'รายละเอียด',
      conditionsTab: 'เงื่อนไข',
      ctaButtonMobile: 'เปิดใน LINE',
      ctaButtonDesktop: 'ดูคูปอง',
      defaultCondition: 'ดูเงื่อนไขเพิ่มเติมในแอป LINE',
      notFound: 'ไม่พบข้อมูล กำลังนำคุณกลับหน้าหลัก...',
      error: 'เกิดข้อผิดพลาด กำลังนำคุณกลับหน้าหลัก...',
    },
    en: {
      detailsTab: 'Details',
      conditionsTab: 'Conditions',
      ctaButtonMobile: 'Open in LINE',
      ctaButtonDesktop: 'View Coupon',
      defaultCondition: 'See more conditions in LINE app',
      notFound: 'Not found. Redirecting to homepage...',
      error: 'An error occurred. Redirecting to homepage...',
    },
  };

  const t = texts[lang];

  // Get content in the selected language
  const title = escapeHtml(
    coupon.metadata?.title?.[lang] || coupon.title || coupon.name || 'AIYA'
  );
  const brandName = escapeHtml(coupon.voucher_brand_id?.name || 'AIYA');
  const brandColor = coupon.voucher_brand_id?.primaryColor || '#2563eb';
  const description = escapeHtml(
    coupon.metadata?.description?.[lang] || coupon.description || `${title} - ${brandName}`
  );
  const conditions = escapeHtml(
    coupon.metadata?.condition?.[lang] || t.defaultCondition
  );

  // Generate OG image URL
  const imageFileId = coupon.banner || coupon.voucher_brand_id?.logo || page.image;
  const ogImage = imageFileId
    ? getDirectusFileUrl(directusUrl, imageFileId, {
        width: 1200,
        height: 630,
        fit: 'cover',
      })
    : '';

  const bannerUrl = coupon.banner
    ? getDirectusFileUrl(directusUrl, coupon.banner, {
        width: 800,
        height: 450,
        fit: 'cover',
      })
    : ogImage;

  // Generate redirect URLs
  // Use LINE deep link for better app opening on mobile
  const lineDeepLink = `line://app/${page.liff_id}/coupon/${coupon.id}`;
  const mobileUrl = `https://miniapp.line.me/${page.liff_id}/coupon/${coupon.id}`;
  const desktopUrl = `${baseUrl}/a/${page.liff_id}/${page.slug}/coupon/${coupon.id}`;

  const logoUrl =
    coupon.voucher_brand_id?.logo
      ? getDirectusFileUrl(directusUrl, coupon.voucher_brand_id.logo, {
          width: 100,
          height: 100,
        })
      : '';

  return `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${title} - ${brandName}</title>

  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="${title}">
  <meta property="og:site_name" content="${brandName}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${shareUrl}">
  <meta property="og:description" content="${description}">
  ${
    ogImage
      ? `<meta property="og:image" content="${ogImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">`
      : ''
  }

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  ${ogImage ? `<meta name="twitter:image" content="${ogImage}">` : ''}

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #ffffff;
      color: #1f2937;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Header */
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 1rem;
      background: white;
      border-bottom: 1px solid #e5e7eb;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .brand-logo {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      object-fit: cover;
    }

    .brand-name {
      font-size: 0.875rem;
      font-weight: 600;
      color: #374151;
    }

    /* Main Content */
    .main {
      flex: 1;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }

    /* Banner */
    .banner-container {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%; /* 16:9 aspect ratio */
      overflow: hidden;
      background: #f3f4f6;
    }

    .banner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Content */
    .content {
      padding: 1rem;
    }

    .voucher-title {
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 1.5;
      color: #1f2937;
      margin-bottom: 1rem;
    }

    /* Tabs */
    .tabs {
      display: flex;
      border-bottom: 1px solid #e5e7eb;
      margin-bottom: 1rem;
    }

    .tab {
      flex: 1;
      padding: 0.75rem;
      text-align: center;
      font-size: 0.875rem;
      font-weight: 500;
      color: #6b7280;
      cursor: pointer;
      background: none;
      border: none;
      position: relative;
      transition: color 0.2s;
    }

    .tab.active {
      color: ${brandColor};
    }

    .tab.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: ${brandColor};
    }

    /* Tab Content */
    .tab-content {
      display: none;
      white-space: pre-wrap;
      line-height: 1.6;
      color: #4b5563;
      font-size: 0.9375rem;
    }

    .tab-content.active {
      display: block;
    }

    /* Footer */
    .footer {
      padding: 1rem;
      background: white;
      border-top: 1px solid #e5e7eb;
    }

    .cta-button {
      width: 100%;
      padding: 1rem;
      background: ${brandColor};
      color: white;
      text-align: center;
      text-decoration: none;
      border: none;
      border-radius: 0.75rem;
      font-weight: 600;
      font-size: 1rem;
      display: block;
      transition: opacity 0.2s;
      cursor: pointer;
    }

    .cta-button:active {
      opacity: 0.8;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <div class="header">
    <div class="header-left">
      ${
        logoUrl
          ? `<img src="${logoUrl}" alt="${brandName}" class="brand-logo">`
          : ''
      }
      <span class="brand-name">${brandName}</span>
    </div>
  </div>

  <!-- Main Content -->
  <div class="main">
    <!-- Banner -->
    ${
      bannerUrl
        ? `<div class="banner-container">
      <img src="${bannerUrl}" alt="${title}" class="banner">
    </div>`
        : ''
    }

    <!-- Content -->
    <div class="content">
      <h1 class="voucher-title">${title}</h1>

      <!-- Tabs -->
      <div class="tabs">
        <button class="tab active" data-tab="details">${t.detailsTab}</button>
        <button class="tab" data-tab="conditions">${t.conditionsTab}</button>
      </div>

      <!-- Tab Contents -->
      <div class="tab-content active" data-content="details">${description}</div>
      <div class="tab-content" data-content="conditions">${conditions}</div>
    </div>
  </div>

  <!-- Footer CTA -->
  <div class="footer">
    <a
      href="${lineDeepLink}"
      class="cta-button"
      id="ctaButton"
      data-text-mobile="${t.ctaButtonMobile}"
      data-text-desktop="${t.ctaButtonDesktop}"
    >${t.ctaButtonMobile}</a>
  </div>

  <script>
    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');

        // Update tabs
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        // Update content
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.querySelector('[data-content="' + tabName + '"]').classList.add('active');
      });
    });

    // Smart device detection and link handling
    function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    function isFacebookBrowser() {
      return /FBAN|FBAV/i.test(navigator.userAgent);
    }

    const ctaButton = document.getElementById('ctaButton');

    if (!isMobile()) {
      // Desktop: use LIFF endpoint URL and change button text
      ctaButton.href = '${desktopUrl}';
      ctaButton.textContent = ctaButton.getAttribute('data-text-desktop');
    } else if (isFacebookBrowser()) {
      // Facebook mobile browser: try deep link first, fallback to miniapp
      ctaButton.addEventListener('click', function(e) {
        e.preventDefault();

        // Try LINE deep link first
        window.location.href = '${lineDeepLink}';

        // Fallback to miniapp.line.me after 2 seconds if deep link didn't work
        setTimeout(function() {
          window.location.href = '${mobileUrl}';
        }, 2000);
      });
    } else {
      // Regular mobile browser: use deep link (already set as default)
      // Deep link will automatically fallback to miniapp.line.me if LINE app not installed
      ctaButton.href = '${lineDeepLink}';
    }
  </script>
</body>
</html>`;
}

export async function onRequest(context: {
  request: Request;
  env: Env;
  params: { slug: string; couponId: string };
}): Promise<Response> {
  const { request, env, params } = context;
  const { slug, couponId } = params;

  // Check environment variables
  if (!env.DIRECTUS_URL || !env.DIRECTUS_TOKEN) {
    console.error('Missing DIRECTUS_URL or DIRECTUS_TOKEN');
    return new Response('Server configuration error', { status: 500 });
  }

  // Get user agent
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = isCrawler(userAgent);

  // Detect language from query parameter or Accept-Language header
  const url = new URL(request.url);
  const queryLang = url.searchParams.get('lang') || undefined;
  const acceptLanguage = request.headers.get('accept-language');
  const lang = detectLanguage(acceptLanguage, queryLang);

  // Language-specific texts for error pages
  const errorTexts = {
    th: {
      notFound: 'ไม่พบข้อมูล กำลังนำคุณกลับหน้าหลัก...',
      error: 'เกิดข้อผิดพลาด กำลังนำคุณกลับหน้าหลัก...',
    },
    en: {
      notFound: 'Not found. Redirecting to homepage...',
      error: 'An error occurred. Redirecting to homepage...',
    },
  };
  const t = errorTexts[lang];

  // Get base URL from request
  const baseUrl = `${url.protocol}//${url.host}`;
  const shareUrl = `${baseUrl}/share/${slug}/coupon/${couponId}`;

  try {
    // Fetch page and coupon data in parallel
    const [page, coupon] = await Promise.all([
      fetchPageBySlug(env.DIRECTUS_URL, env.DIRECTUS_TOKEN, slug),
      fetchVoucher(env.DIRECTUS_URL, env.DIRECTUS_TOKEN, couponId),
    ]);

    if (!page || !coupon) {
      console.error('Page or coupon not found:', { page: !!page, coupon: !!coupon });

      // Return simple HTML with redirect to homepage
      return new Response(
        `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>AIYA</title>
  <meta http-equiv="refresh" content="0; url=${baseUrl}">
</head>
<body>
  <p>${t.notFound}</p>
  <script>window.location.href = '${baseUrl}';</script>
</body>
</html>`,
        {
          headers: {
            'content-type': 'text/html;charset=UTF-8',
            'cache-control': 'no-cache',
          },
        }
      );
    }

    // Generate HTML with OG tags
    const html = generateHTML(page, coupon, baseUrl, shareUrl, env.DIRECTUS_URL, lang);

    // Return HTML response
    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        // Cache for crawlers, but not for too long (1 hour)
        'cache-control': isBot ? 'public, max-age=3600' : 'no-cache',
      },
    });
  } catch (error) {
    console.error('Error in share function:', error);

    // Return error HTML with redirect to homepage
    return new Response(
      `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>AIYA</title>
  <meta http-equiv="refresh" content="3; url=${baseUrl}">
</head>
<body>
  <p>${t.error}</p>
  <script>setTimeout(() => { window.location.href = '${baseUrl}'; }, 3000);</script>
</body>
</html>`,
      {
        status: 500,
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
      }
    );
  }
}
