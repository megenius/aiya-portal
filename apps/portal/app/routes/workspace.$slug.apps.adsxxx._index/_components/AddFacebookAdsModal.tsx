import React, { useEffect, useMemo, useState } from 'react';
import BasicModal from '~/components/BasicModal';
import { useForm, SubmitHandler } from "react-hook-form"
import { randomHexString } from '~/utils/random';
import { PageInfo, WorkspaceFacebookAdAccount } from '~/@types/app';
import { Avatar } from '@repo/preline/Avatar';

type Inputs = {
  ids: Array<string>
}

interface AddFacebookAdsModalProps {
  id: string;
  ads: Array<WorkspaceFacebookAdAccount & { checked: boolean }>;
  onOk: (ads: Array<WorkspaceFacebookAdAccount>) => void;
}


const AddFacebookAdsModal: React.FC<AddFacebookAdsModalProps> = ({ id, onOk, ...rest }) => {
  const [ads, setAds] = useState<Array<WorkspaceFacebookAdAccount & { checked: boolean }>>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
    getValues
  } = useForm<Inputs>({
    defaultValues: {
      ids: rest.ads ? rest.ads.map(ad => {
        return ad.ad_account_id as string
      }) : []
    }
  })

  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    e?.preventDefault()
    reset()
    onOk(ads.filter(ad => data.ids.includes(ad.ad_account_id as string)))
  }

  const onDeselectAll = () => {
    setAds(ads.map(page => {
      return {
        ...page,
        checked: false
      }
    }))
    setValue('ids', [])
  }

  useEffect(() => {
    if (rest.ads?.length) {
      console.log('rest.ads', new Date(),  rest.ads);
      
      setAds(rest.ads || [])
    }
  }, [rest.ads])

  return (
    <BasicModal id={id} title="Facebook Ad Accounts">
      {ads.length === 0 && (
        <div className="flex flex-col items-center justify-center h-96">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">Loading ads accounts</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='max-h-[500px] overflow-y-auto pe-4'>
          <div className="pb-8 mb-8 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0">
            <div className="space-y-6">
              {/* Checkbox */}
              {ads?.map((ad) => (
                <label
                  key={ad.ad_account_id}
                  htmlFor={`hs-pro-${ad.ad_account_id}`}
                  className="flex items-center gap-4 sm:gap-6"
                >
                  {/* <Avatar src={ad.pictureUrl} firstName={ad.name} /> */}

                  <span className="grow">
                    <span className="flex flex-col">
                      <span className="block text-sm text-gray-800">{ad.name}</span>
                      <span className="block text-[13px] text-gray-500">
                        {ad.ad_account_id}
                      </span>
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    id={`hs-pro-${ad.ad_account_id}`}
                    value={ad.ad_account_id as string}
                    className="relative mt-1 shrink-0 w-[44px] h-6 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-indigo-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-indigo-600 checked:border-indigo-600 focus:checked:border-indigo-600 before:inline-block before:size-5 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow-sm before:transform before:ring-0 before:transition before:ease-in-out before:duration-200"
                    defaultChecked={ad.checked}
                    readOnly={ad.checked}
                    disabled={ad.checked}
                    {...register("ids")}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-between gap-x-2">
          <button
            type="button"
            className="py-2 px-3 inline-flex justify-center items-center text-start bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-xs align-middle hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            onClick={onDeselectAll}
          >Deselect All</button>
          <div className='flex gap-2'>
            <button
              type="button"
              className="py-2 px-3 inline-flex justify-center items-center text-start bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-xs align-middle hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-overlay={`#${id}`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-blue-600 border border-blue-600 text-white text-sm font-medium rounded-lg shadow-xs align-middle hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-1 focus:ring-blue-300"
              data-hs-overlay={`#${id}`}
            >
              Next
            </button>
          </div>

        </div>
      </form>
    </BasicModal>
  );
};

export default AddFacebookAdsModal;