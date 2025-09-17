import { useOutletContext, useParams } from "@remix-run/react";
import MainContent from "./_components/MainContent";
import { PageLiff } from "~/types/page";
import { useBrand } from "~/hooks/brands/useBrand";
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
  const { page, lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  // const { brand } = useLoaderData<typeof clientLoader>();
  const { brandId } = useParams();
  const { data: brand, isLoading: isBrandLoading } = useBrand({
    brandId: brandId as string,
  });

  if (isBrandLoading) {
    return <BrandPageSkeleton />;
  }

  return (
    <>
      {brand && (
        <>
          <MainContent brand={brand} language={lang} page={page} />
        </>
      )}
    </>
  );
};

export default BrandDetailRoute;
