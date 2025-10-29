/**
 * Cloudflare Function for Share URLs with OG Meta Tags
 *
 * This function handles requests to /share/:slug/coupon/:couponId
 * It generates proper Open Graph meta tags for social media sharing
 * and redirects regular users to the LIFF URL.
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
}

interface Voucher {
  id: string;
  name: string;
  title?: string;
  description?: string;
  banner?: string;
  voucher_brand_id?: VoucherBrand;
}

interface Env {
  ASSETS: any;
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
  return crawlerPatterns.some(pattern => lowerUA.includes(pattern));
}

// Generate Directus file URL
function getDirectusFileUrl(fileId: string, options: {
  width?: number;
  height?: number;
  fit?: string;
  format?: string;
  quality?: number;
} = {}): string {
  const baseUrl = 'https://console.portal.aiya.ai';
  const params = new URLSearchParams();

  if (options.width) params.append('width', options.width.toString());
  if (options.height) params.append('height', options.height.toString());
  if (options.fit) params.append('fit', options.fit);
  if (options.format) params.append('format', options.format);
  if (options.quality) params.append('quality', options.quality.toString());

  const queryString = params.toString();
  return `${baseUrl}/assets/${fileId}${queryString ? '?' + queryString : ''}`;
}

// Generate HTML with OG meta tags
function generateHTML(
  page: PageLiff,
  coupon: Voucher,
  baseUrl: string,
  shareUrl: string
): string {
  const title = coupon.title || coupon.name || page.name || 'AIYA';
  const brandName = coupon.voucher_brand_id?.name || 'AIYA';
  const description = coupon.description || `${title} - ${brandName}`;

  // Generate OG image URL
  const imageFileId = coupon.banner || coupon.voucher_brand_id?.logo || page.image;
  const ogImage = imageFileId
    ? getDirectusFileUrl(imageFileId, {
        width: 1200,
        height: 630,
        fit: 'cover',
        format: 'jpg',
        quality: 85,
      })
    : '';

  // Generate LIFF URL for redirect
  const liffUrl = `https://miniapp.line.me/${page.liff_id}/coupon/${coupon.id}`;

  return `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - ${brandName}</title>

  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="${title}">
  <meta property="og:site_name" content="${brandName}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${shareUrl}">
  <meta property="og:description" content="${description}">
  ${ogImage ? `<meta property="og:image" content="${ogImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">` : ''}

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  ${ogImage ? `<meta name="twitter:image" content="${ogImage}">` : ''}

  <!-- Auto-redirect for non-crawlers -->
  <meta http-equiv="refresh" content="0; url=${liffUrl}">

  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #f3f4f6;
    }
    .container {
      text-align: center;
      padding: 2rem;
    }
    .logo {
      width: 80px;
      height: 80px;
      border-radius: 12px;
      object-fit: contain;
      margin: 0 auto 1rem;
    }
    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      color: #1f2937;
      margin: 0 0 0.5rem;
    }
    p {
      color: #6b7280;
      margin: 0.25rem 0;
    }
    .redirect-message {
      margin-top: 1rem;
      font-size: 0.875rem;
      color: #9ca3af;
    }
  </style>
</head>
<body>
  <div class="container">
    ${coupon.voucher_brand_id?.logo ? `
    <img
      src="${getDirectusFileUrl(coupon.voucher_brand_id.logo, { width: 200, height: 200 })}"
      alt="${coupon.voucher_brand_id.name}"
      class="logo"
    >` : ''}
    <h1>${title}</h1>
    <p>${brandName}</p>
    <p class="redirect-message">กำลังนำคุณไปยังคูปอง...</p>
  </div>

  <!-- JavaScript redirect as fallback -->
  <script>
    window.location.href = '${liffUrl}';
  </script>
</body>
</html>`;
}

export async function onRequest(context: {
  request: Request;
  env: Env;
  params: { slug: string; couponId: string };
}): Promise<Response> {
  const { request, params } = context;
  const { slug, couponId } = params;

  // Get user agent
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = isCrawler(userAgent);

  // Get base URL from request
  const url = new URL(request.url);
  const baseUrl = `${url.protocol}//${url.host}`;
  const shareUrl = `${baseUrl}/share/${slug}/coupon/${couponId}`;

  try {
    // Fetch page and coupon data in parallel
    const [pageResponse, couponResponse] = await Promise.all([
      fetch(`${baseUrl}/api/liff/by-slug/${slug}`),
      fetch(`${baseUrl}/api/vouchers/${couponId}`),
    ]);

    if (!pageResponse.ok || !couponResponse.ok) {
      console.error('Failed to fetch data:', {
        pageStatus: pageResponse.status,
        couponStatus: couponResponse.status,
      });

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
  <p>กำลังโหลด...</p>
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

    const page: PageLiff = await pageResponse.json();
    const coupon: Voucher = await couponResponse.json();

    // Generate HTML with OG tags
    const html = generateHTML(page, coupon, baseUrl, shareUrl);

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
  <p>เกิดข้อผิดพลาด กำลังนำคุณกลับหน้าหลัก...</p>
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
