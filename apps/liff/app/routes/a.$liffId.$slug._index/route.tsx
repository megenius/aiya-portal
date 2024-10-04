import { useNavigate, useOutletContext } from '@remix-run/react';
import React from 'react';
import { useForm, useFormContext, FormProvider } from "react-hook-form";
import PageViewer from '~/components/PageViewer';
import { useLineLiff } from '~/hooks/useLineLiff';
import { useTracking } from '~/hooks/useTracking';
import { PageLiff } from '~/types/page';
interface routeProps {

}

const route: React.FC<routeProps> = () => {
  const { page } = useOutletContext<{ page: PageLiff }>()
  const { data: liff } = useLineLiff()
  const methods = useForm()
  const tracking = useTracking()
  const navigate = useNavigate()

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

  const openWindow = async (url: string) => {
    console.log("Open window", url);
    const { browser } = page.metadata
    const isExternal = browser === "external"

    tracking.mutateAsync({
      tracking: page.metadata.tracking,
      data: methods.getValues()
    }).then(res => {
      if (browser === "liff") {
        if (url.startsWith("http")) {
          window.location.href = url
        } if (url === 'liff://close') {
          liff?.closeWindow()
        } else {
          navigate(url)
        }
      } else {
        liff?.openWindow({
          url,
          external: isExternal
        })
      }
    })
  }

  const onSubmit = async (values: any) => {
    console.log("Form submitted", values)
    const { destination } = values
    const destUrl = resolveUrl(destination)
    openWindow(destUrl)

  }

  if (!page) {
    return
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {page?.liff_id &&
          <PageViewer page={page} />
        }
      </form>
    </FormProvider>
  );
};

export default route;