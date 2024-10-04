import { Link, useNavigate, useOutletContext, useParams, useSearchParams } from "@remix-run/react"
import Footer from "~/components/Footer";
import { useLiff } from "~/hooks/useLiff";
import { PageLiff, Script } from "~/types/page";
import liff from '@line/liff';
import WYSIWYGContent from "~/components/WYSIWYGContent";
import Loading from "~/components/Loading";
import { useEffect, useRef, useState } from "react";
import mustache from "mustache";
import { useForm, useFormContext, FormProvider } from "react-hook-form";
import { set } from "lodash";
import { useLineProfile } from "~/hooks/useLineProfile";
import { User } from 'lucide-react';
import { useAnalyzeProfile } from "~/hooks/useAnalyzeProfile";

const Page = () => {
  const { page, friendFlag } = useOutletContext<{ page: PageLiff, friendFlag: boolean }>()
  const navigate = useNavigate()
  const [ready, setReady] = useState(false)
  const [initialScriptsLoaded, setInitialScriptsLoaded] = useState(false)
  const methods = useForm()
  const [isPending, setIsPending] = useState(false)

  const tracking = () => {
    return new Promise((resolve, reject) => {

      if (page.metadata.tracking?.button) {
        const { onClick } = page.metadata.tracking.button;
        const timestamp = new Date().toISOString();
        const trackingBody = mustache.render(JSON.stringify(onClick.body), {
          TIMESTAMP: timestamp,
          ...methods.getValues(),
        });
        setIsPending(true)

        fetch(onClick.url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: trackingBody,
        }).then(res => {
          resolve(res)
          setIsPending(false)
        }).catch(error => {
          resolve(error)
          console.error("Tracking request failed", error)
          setIsPending(false)
        })
      } else {
        resolve({})
        setIsPending(false)
      }
    })


  }

  const openWindow = async (url: string) => {
    console.log("Open window", url);
    const { browser } = page.metadata
    const isExternal = browser === "external"
    tracking().then(() => {
      if (browser === "liff") {
        if (url.startsWith("http")) {
          window.location.href = url
        } if (url === 'liff://close') {
          liff.closeWindow()
        } else {
          navigate(url)
        }
      } else {
        liff.openWindow({
          url,
          external: isExternal
        })
      }
    }
    )
  }

  const resolveUrl = (url: string) => {
    if (url?.startsWith("liff://landing")) {
      return ""
    }
    else if (url?.startsWith("liff://close")) {
      return url
    } else if (url?.startsWith("liff://")) {
      return url.replace("liff://", "../")
    }
    return url
  }

  const onSubmit = async (values: any) => {
    console.log("Form submitted", values)
    const { destination } = values
    const destUrl = resolveUrl(destination)
    openWindow(destUrl)
  }

  const renderContent = () => {
    if (page.require_login) {
      return <LandingWithLogin page={page} isPending={isPending}/>
    }

    return (
      <Landing page={page} />
    )
  }


  useEffect(() => {
    if (page?.metadata?.condition) {
      if (friendFlag) {
        if (page.metadata.condition?.friend) {
          const { url } = page.metadata.condition?.friend
          const destUrl = resolveUrl(url)
          if (destUrl.startsWith("http")) {
            setTimeout(() => {
              liff.openWindow({ url: destUrl })
            }, 5000)
          } else {
            navigate(destUrl)
          }
        }
        setReady(true)
      } else {
        setReady(true)
      }
    } else {
      setReady(true)
    }
  }, [page, friendFlag])

  // useEffect(() => {
  //   const addScripts = (scripts: Script[]) => {
  //     for (let i = 0; i < scripts.length; i++) {
  //       const scriptData = scripts[i];
  //       const script = document.createElement("script");
  //       script.src = scriptData.src;
  //       script.async = true;
  //       script.defer = true;

  //       // Add any additional attributes
  //       if (scriptData.attributes) {
  //         Object.entries(scriptData.attributes).forEach(([key, value]) => {
  //           script.setAttribute(key, value);
  //         });
  //       }

  //       document.body.appendChild(script);
  //     }
  //     setInitialScriptsLoaded(true)
  //   };

  //   if (!initialScriptsLoaded) {
  //     if (page?.metadata?.scripts) {
  //       addScripts(page.metadata.scripts)
  //     }
  //   }
  // }, [page])

  if (!ready) {
    return <Loading />
  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {renderContent()}
        </form>
      </FormProvider>
    </>
  )
}

export default Page


const Landing: React.FC<{ page: PageLiff }> = ({ page }) => {
  const isThaiLanguage = true
  const buttonText = isThaiLanguage ? page.metadata.btnTextTH : page.metadata.btnTextEN;
  const { setValue } = useFormContext()

  useEffect(() => {
    setValue("LANGUAGE", isThaiLanguage ? "th" : "en")
    setValue("destination", page.metadata.destTH)
  }, [page])

  return (
    <>
      <div className="flex flex-col w-full h-screen max-w-screen-sm mx-auto">
        <div style={{ paddingBottom: 150 }}>
          <div className="flex-none">
            <div className="w-full">
              {page.image && (
                <button type="submit">
                  <img src={`/files/${page.image}`}
                    alt="Promotional"
                    className="w-full h-auto"
                  />
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-6">
            {/* <h1 className="text-center font-bold text-lg leading-tight mb-4">
              {page.name}
            </h1> */}
            <div className="px-4">
              <WYSIWYGContent content={page.content} />
            </div>
          </div>

        </div>
        <Footer className="flex-none" bgColor={page.fore_color}>
          <div className="w-full">
            <button
              type="submit"
              id={page.metadata?.tracking?.button?.id}
              className="text-white rounded-none w-full h-14 text-xl font-semibold uppercase">
              {buttonText}
            </button>
          </div>
        </Footer >
      </div >
    </>
  )
}


const LandingWithLogin: React.FC<{ page: PageLiff, isPending: boolean }> = ({ page, isPending }) => {
  const { language, isLoggedIn } = useLiff({ liffId: page.liff_id, destTH: page.metadata.destTH, destEN: page.metadata.destEN });
  const { data: profile } = useLineProfile();
  const { setValue } = useFormContext()
  const analyzer = useAnalyzeProfile()
  const isThaiLanguage = language.startsWith('th');
  const buttonText = isThaiLanguage ? page.metadata.btnTextTH : page.metadata.btnTextEN;
  const destination = isThaiLanguage ? page.metadata.destTH : page.metadata.destEN;
  const [analysis, setAnalysis] = useState({})

  useEffect(() => {
    setValue("LANGUAGE", language)
    setValue("USERID", profile?.userId)
    setValue("destination", destination)
  }, [profile, page])


  useEffect(() => {
    // upload profile data to server
    if (profile?.pictureUrl && page?.metadata?.layout?.showAIProfile) {
      analyzer.mutateAsync({ pictureUrl: profile?.pictureUrl as string, path: "79fb452868/profiles" }).then((response) => {
        console.log("Analyze response", response)
        setAnalysis(response.analysis)
        setValue("interest", response.analysis?.life_style)
        setValue("age", response.analysis?.age)
        setValue("gender", response.analysis?.gender)
        setValue("occupation", response.analysis?.occupation)
      })
    }
  }, [profile, page?.metadata?.layout?.showAIProfile])


  if (!isLoggedIn) {
    return <Loading />
  }

  return (
    <>
      <div className="flex flex-col w-full h-screen max-w-screen-sm mx-auto">
        <div style={{ paddingBottom: 150 }}>
          <div className="flex-none">
            <div className="w-full">
              {page.image && (
                <button type="submit">
                  <img src={`/files/${page.image}`}
                    alt="Promotional"
                    className="w-full h-auto cursor-pointer"
                  />
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-6">
            {/* <h1 className="text-center font-bold text-lg leading-tight mb-4">
              {page.name}
            </h1> */}
            <div className="px-4">
              <WYSIWYGContent content={page.content} />
            </div>

          </div>
          {page?.metadata?.layout?.showAIProfile && (
            <AIProfile page={page} analysis={analysis} />
          )}
          <LayoutBuilder page={page} />
        </div>
        <Footer className="flex-none"
          // bgColor="bg-blue-500"
          bgColor={analyzer.isPending ? "#999999" : page.fore_color}
          height="h-20">
          <div className="w-full">
            <button
              disabled={analyzer.isPending || isPending}
              type="submit"
              id={page.metadata?.tracking?.button?.id}
              className={"text-white rounded-none w-full h-14 text-xl font-semibold uppercase"} >
              {analyzer.isPending ? "Analyzing..." : buttonText}
            </button>
          </div>
        </Footer >
      </div >
    </>
  )
}

const LayoutBuilder: React.FC<{ page: PageLiff }> = ({ page }) => {
  const { register } = useFormContext()
  const { data: profile } = useLineProfile();


  return (
    <>
      <div className={`flex flex-col`}>
        {page?.metadata?.layout?.showProfile && (
          <div className="flex flex-col items-center gap-3">
            <div>
              <img src={profile?.pictureUrl} alt="Profile" className="w-20 h-20 rounded-full" />
            </div>
            <div>{profile?.displayName}</div>
          </div>
        )}
        <div className="flex-grow overflow-y-auto px-4 py-6">
          <div className="max-w-sm space-y-3 mx-auto px-2">
            {page?.metadata?.layout?.form?.fields.map((field, index) => {
              return (
                <input
                  key={field.name}
                  type={field.type}
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder={field.label}
                  required={field.required}
                  {...register(field.name)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

const AIProfile: React.FC<{ page: PageLiff, analysis: any }> = ({ page, analysis }) => {
  const { data: profile } = useLineProfile();
  // const { analysis } = profileData;
  // const analyzer = useAnalyzeProfile()
  // const [analysis, setAnalysis] = useState({})

  const mapping = {
    // "type": "Type",
    // "image_type": "photograph",
    "gender": "เพศ",
    "age": "อายุ",
    "ethnicity": "เชื้อชาติ",
    "life_style": "ไลฟ์สไตล์",
    "dress_style": "สไตล์แต่งตัว",
    "hair_style": "สไตล์ทรงผม",
    // "attire": "Attire",
    "expression": "อารมณ์",
    // "setting": "plain background",
    "occupation": "อาชิพ",
  } as any

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <img src={profile?.pictureUrl} className="w-24 h-24 bg-gray-300 rounded-full" />
          </div>
        </div>
      </div>
      <div className="p-4">
        {analysis?.life_style && (
          <>
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
              AI Profile
            </h2>
            <div className="space-y-2 grid grid-cols-2 text-center justify-center items-center">
              {Object.entries(analysis).map(([key, value]) => {
                if (key !== 'notable_elements' && key !== 'type' && key in mapping) {
                  return (
                    <p key={key} className="text-sm">
                      <span className="font-semibold text-gray-700">{mapping[key]}:</span>{' '}
                      <br />
                      <span className="text-gray-800 text-xl">{value as any}</span>
                    </p>
                  );
                }
                return null;
              })}
            </div>
            <div className="text-gray-400 text-center pt-8">Powered by AIYA.AI</div>
          </>
        )}

        {!analysis?.life_style && (
          <div className="flex flex-col items-center justify-center text-center">
            <div role="status">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <p className="text-gray-800 text-lg">AI กำลังวิเคราะห์ข้อมูล</p>
            <div className="text-gray-800">Powered by AIYA.AI</div>
          </div>
        )}
      </div>
    </div>
  );
};