import { Link, useNavigate, useOutletContext, useSearchParams } from "@remix-run/react"
import Footer from "~/components/Footer";
import { useLiff } from "~/hooks/useLiff";
import { PageLiff } from "~/types/page";
import liff from '@line/liff';
import WYSIWYGContent from "~/components/WYSIWYGContent";
import Loading from "~/components/Loading";
import { useEffect, useState } from "react";
import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";


export const loader = async ({ context, params }: LoaderFunctionArgs) => {
  const endpoint = "https://api1.queq.me/QueQAds/Ads/ReqAdsList"
  const token = "eb6ed5f7013d4e9b858a22c0763e4bbe"

  const res = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
      "X-QueQAds-UserToken": token
    }
  })

  const data = await res.json()

  console.log(data);

  return {}
}

const Page = () => {
  const { page, friendFlag } = useOutletContext<{ page: PageLiff, friendFlag: boolean }>()
  const navigate = useNavigate()
  const [ready, setReady] = useState(false)

  const openWindow = (url: string) => {
    const { browser } = page.metadata
    const isExternal = browser === "external"
    if (browser === "liff") {
      if (url.startsWith("http")) {
        window.location.href = url
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

  const resolveUrl = (url: string) => {
    if (url?.startsWith("liff://landing")) {
      return ""
    } else if (url?.startsWith("liff://")) {
      return url.replace("liff://", "")
    }
    return url
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

  if (!ready) {
    return <Loading />
  }

  if (page.require_login) {
    return <LandingWithLogin page={page} openWindow={openWindow} />
  }

  return (
    <Landing page={page} openWindow={openWindow} />
  )
}

export default Page


const Landing: React.FC<{ page: PageLiff, openWindow: (url: string) => void }> = ({ page, openWindow }) => {
  const destination = page.metadata.destTH
  const isThaiLanguage = true
  const buttonText = isThaiLanguage ? page.metadata.btnTextTH : page.metadata.btnTextEN;
  const navigate = useNavigate()

  return (
    <>
      <div className="flex flex-col w-full h-screen max-w-screen-sm mx-auto">
        <div style={{ paddingBottom: 150 }}>


        </div>
        <Footer className="flex-none" bgColor={page.fore_color}>
          <div className="w-full" onClick={() => openWindow(destination)}>
            <button className="text-white rounded-none w-full h-14 text-xl font-semibold uppercase">
              {buttonText}
            </button>
          </div>
        </Footer >
      </div >
    </>
  )
}


const LandingWithLogin: React.FC<{ page: PageLiff, openWindow: (url: string) => void }> = ({ page, openWindow }) => {
  const { language, destination, isLoggedIn } = useLiff({ liffId: page.liff_id, destTH: page.metadata.destTH, destEN: page.metadata.destEN });

  const isThaiLanguage = language.startsWith('th');
  const buttonText = isThaiLanguage ? page.metadata.btnTextTH : page.metadata.btnTextEN;
  const navigate = useNavigate()

  if (!isLoggedIn) {
    return <Loading />
  }

  return (
    <>
      <div className="flex flex-col w-full h-screen max-w-screen-sm mx-auto">
        <div style={{ paddingBottom: 150 }}>
          <div className="flex-none">
            <div onClick={() => openWindow(destination)} className="w-full">
              {page.image && (
                <img src={`/files/${page.image}`}
                  alt="Promotional"
                  className="w-full h-auto"
                />
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
          <div className="w-full" onClick={() => openWindow(destination)}>
            <button className="text-white rounded-none w-full h-14 text-xl font-semibold uppercase">
              {buttonText}
            </button>
          </div>
        </Footer >
      </div >
    </>
  )
}