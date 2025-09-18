import { useOutletContext, useParams } from "@remix-run/react";
import MainContent from "./_components/MainContent";
import { PageLiff } from "~/types/page";
import { useBrandPageV2 } from "~/hooks/brands/useBrandPageV2";
import BrandPageSkeleton from "./_components/BrandPageSkeleton";

// export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
//   const brand = data?.brand;
//   return [
//     { title: brand?.name || "Loading..." }
//   ];
// };

// export const shouldRevalidate: ShouldRevalidateFunction = ({
//   currentParams,
//   nextParams,
// }) => {
//   return !!!_.isEqual(currentParams, nextParams);
// };

// export const clientLoader = async ({ params }: LoaderFunctionArgs) => {
//   const { brandId } = params;
//   const brand = await fetchBrand({ brandId });
//   return json({
//     brand
//   });
// };

const BrandDetailRoute = () => {
  const { lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  const { brandId } = useParams();
  const {
    data: brand,
    isLoading: isBrandLoading,
  } = useBrandPageV2({ brandId: brandId as string, lang });

  if (isBrandLoading) {
    return <BrandPageSkeleton />;
  }

  return (
    <>
      {brand && (
        <>
          <MainContent brand={brand} language={lang} />
        </>
      )}
    </>
  );
};

export default BrandDetailRoute;
