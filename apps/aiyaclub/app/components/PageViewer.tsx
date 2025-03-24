import React, { useEffect, useState } from "react";
import { useAnalyzeProfile } from "~/hooks/useAnalyzeProfile";
import { useLineProfile } from "~/hooks/useLineProfile";
import { PageLiff } from "~/types/page";
import Loading from "./Loading";
import WYSIWYGContent from "./WYSIWYGContent";
import Footer from "./Footer";
import { useFormContext } from "react-hook-form";
import { useLiff } from "~/hooks/useLiff";
import { getDirectusFileUrl } from "~/utils/files";
import AIProfile from "./AIProfile";
import LayoutViewer from "./LayoutViewer";

interface PageViewerProps {
  page: PageLiff;
}

const PageViewer: React.FC<PageViewerProps> = ({ page }) => {
  const { language, isLoggedIn } = useLiff({ liffId: page.liff_id });
  const { data: profile } = useLineProfile();
  const { setValue } = useFormContext();
  const analyzer = useAnalyzeProfile();
  const isThaiLanguage = language.startsWith("th");
  const buttonText = isThaiLanguage
    ? page.metadata.btnTextTH
    : page.metadata.btnTextEN;
  const destination = isThaiLanguage
    ? page.metadata.destTH
    : page.metadata.destEN;
  const [analysis, setAnalysis] = useState({});

  useEffect(() => {
    setValue("LANGUAGE", language);
    setValue("USERID", profile?.userId);
    setValue("destination", destination);
  }, [profile, page]);

  useEffect(() => {
    // upload profile data to server
    if (profile?.pictureUrl && page?.metadata?.layout?.showAIProfile) {
      analyzer
        .mutateAsync({
          pictureUrl: profile?.pictureUrl as string,
          path: "79fb452868/profiles",
        })
        .then((response) => {
          console.log("Analyze response", response);
          setAnalysis(response.analysis);
          setValue("interest", response.analysis?.life_style);
          setValue("age", response.analysis?.age);
          setValue("gender", response.analysis?.gender);
          setValue("occupation", response.analysis?.occupation);
        });
    }
  }, [profile, page?.metadata?.layout?.showAIProfile]);

  if (!isLoggedIn && !page) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-col w-full h-screen max-w-screen-sm mx-auto">
        <div style={{ paddingBottom: 150 }}>
          <div className="flex-none">
            <div className="w-full">
              {page.image && (
                <button type="submit">
                  <img
                    src={getDirectusFileUrl(page.image)}
                    alt="Promotional"
                    className="w-full h-auto cursor-pointer"
                  />
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-6">
            <div className="px-4">
              <WYSIWYGContent content={page.content} />
            </div>
          </div>
          {page?.metadata?.layout?.showAIProfile && (
            <AIProfile page={page} analysis={analysis} />
          )}
          <LayoutViewer page={page} />
        </div>
        <div>
          <Footer
            className="flex-none"
            // bgColor="bg-blue-500"
            bgColor={analyzer.isPending ? "#999999" : page.fore_color}
            height="h-16"
          >
            <div className="w-full">
              <button
                disabled={analyzer.isPending}
                type="submit"
                id={page.metadata?.tracking?.button?.id}
                className={
                  "text-white rounded-none w-full h-14 text-xl font-semibold uppercase"
                }
              >
                {analyzer.isPending ? "Analyzing..." : buttonText}
              </button>
            </div>
          </Footer>
        </div>
      </div>
    </>
  );
};

export default PageViewer;
