import { useOutletContext } from '@remix-run/react';
import React from 'react';
import { useForm, useFormContext, FormProvider } from "react-hook-form";
import PageViewer from '~/components/PageViewer';
import { PageLiff } from '~/types/page';
interface routeProps {

}

const route: React.FC<routeProps> = () => {
  const { page } = useOutletContext<{ page: PageLiff }>()
  const methods = useForm()

  const onSubmit = async (values: any) => {
    console.log("Form submitted", values)
    const { destination } = values
    // const destUrl = resolveUrl(destination)
    // openWindow(destUrl)
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