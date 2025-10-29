import { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData, useParams } from "@remix-run/react";
import { useEffect } from "react";
import { fetchBySlug } from "~/services/page-liff";
import { fetchVoucher } from "~/services/vouchers";
import { getDirectusFileUrl } from "~/utils/files";
import type { PageLiff } from "~/types/page";
import type { Voucher } from "~/types/app";

type LoaderData = {
  page: PageLiff | null;
  coupon: Voucher | null;
};

export const clientLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<LoaderData> => {
  const { slug, couponId } = params;

  if (!slug || !couponId) {
    return { page: null, coupon: null };
  }

  try {
    // Fetch page and coupon data in parallel
    const [page, coupon] = await Promise.all([
      fetchBySlug(slug),
      fetchVoucher({ voucherId: couponId }),
    ]);

    return { page, coupon };
  } catch (error) {
    console.error("Error loading share data:", error);
    return { page: null, coupon: null };
  }
};

export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
  if (!data || !data.page || !data.coupon) {
    return [{ title: "AIYA" }];
  }

  const { page, coupon } = data;
  const title = coupon.title || coupon.name || page.name || "AIYA";
  const brandName = coupon.voucher_brand_id?.name || "";

  // Generate OG image URL
  const imageFileId =
    coupon.banner || coupon.voucher_brand_id?.logo || page.image;
  const ogImage = imageFileId
    ? getDirectusFileUrl(imageFileId as string, {
        width: 1200,
        height: 630,
        fit: "cover",
        format: "jpg",
        quality: 85,
      })
    : "";

  // Get base URL from environment
  const baseUrl =
    (typeof window !== "undefined" ? window.location.origin : null) ||
    import.meta.env.VITE_BASE_URL ||
    "https://liff.aiya.me";

  const ogImageUrl = ogImage && baseUrl ? new URL(ogImage, baseUrl).toString() : ogImage;

  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `${baseUrl}/share/${page.slug}/coupon/${coupon.id}`;

  return [
    { title: `${title} - ${brandName}` },
    { property: "og:title", content: title },
    { property: "og:site_name", content: brandName || "AIYA" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: shareUrl },
    ...(ogImageUrl
      ? [
          { property: "og:image", content: ogImageUrl },
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "630" },
        ]
      : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    ...(ogImageUrl ? [{ name: "twitter:image", content: ogImageUrl }] : []),
  ];
};

export default function ShareRoute() {
  const { page, coupon } = useLoaderData<LoaderData>();
  const { slug, couponId } = useParams();

  useEffect(() => {
    // Detect if user agent is a crawler
    const userAgent =
      typeof navigator !== "undefined" ? navigator.userAgent : "";
    const isCrawler = /bot|crawler|spider|facebook|twitter|whatsapp|telegram|slack|linkedin/i.test(
      userAgent
    );

    // If not a crawler and we have valid data, redirect to LIFF URL
    if (!isCrawler && page && coupon) {
      const liffUrl = `https://miniapp.line.me/${page.liff_id}/coupon/${couponId}`;
      window.location.href = liffUrl;
    }
  }, [page, coupon, couponId]);

  // Show loading state (for crawlers or during redirect)
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        {page && coupon ? (
          <>
            <div className="mb-4">
              {coupon.voucher_brand_id?.logo && (
                <img
                  src={getDirectusFileUrl(coupon.voucher_brand_id.logo as string, {
                    width: 200,
                    height: 200,
                  })}
                  alt={coupon.voucher_brand_id.name}
                  className="mx-auto h-20 w-20 rounded-lg object-contain"
                />
              )}
            </div>
            <h1 className="mb-2 text-2xl font-bold text-gray-800">
              {coupon.title || coupon.name}
            </h1>
            <p className="mb-4 text-gray-600">{coupon.voucher_brand_id?.name}</p>
            <p className="text-sm text-gray-500">กำลังนำคุณไปยังคูปอง...</p>
          </>
        ) : (
          <>
            <h1 className="mb-2 text-2xl font-bold text-gray-800">AIYA</h1>
            <p className="text-sm text-gray-500">กำลังโหลด...</p>
          </>
        )}
      </div>
    </div>
  );
}
