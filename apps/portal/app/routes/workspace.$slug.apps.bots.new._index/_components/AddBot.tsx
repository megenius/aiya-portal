import React, { useEffect } from 'react';
import BasicModal from '~/components/BasicModal';
import { useForm, SubmitHandler } from "react-hook-form"
import { useAdAccounts } from '~/hooks/adaccount';
import { useOutletContext } from '@remix-run/react';
import { Workspace } from '~/@types/app';

type Inputs = {
  name: string
  type: string
  ad_account: string;
}

interface AddBotProps {
  id: string;
  type: any;
  onOk: (values: Inputs) => void;
}

const AddBot: React.FC<AddBotProps> = ({ id, onOk, ...props }) => {
  const { workspace } = useOutletContext<{ workspace: Workspace }>()
  const adAccounts = useAdAccounts({ variables: { workspaceId: workspace?.id as string } });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    e?.preventDefault()
    reset()
    onOk(data)
  }

  useEffect(() => {
    reset({
      name: "",
      type: props.type
    })
  }, [props.type])

  return (
    <BasicModal id={id} title="Add Bot">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          {/* Project name input */}
          <div>
            <label
              htmlFor="hs-pro-dalpn"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Bot name
            </label>
            <input
              type="text"
              id="hs-pro-dalpn"
              className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="My Bot"
              {...register("name", { required: true })}
            />
          </div>

          {/* Project name input */}
          {/* <div>
            <label
              htmlFor="hs-pro-dalpn"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Bot type
            </label>
            <select
              id="hs-pro-dalpn"
              className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              {...register("type", { required: true })}
            >
              <option value="chatbot">Chatbot</option>
              <option value="orderbot">Orderbot</option>
              <option value="docbot">Docbot</option>
              <option value="adbot">Adbot</option>
            </select>
          </div> */}

          {props.type === "adbot" && (
            <div>
              <label
                htmlFor="hs-pro-dalpn"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Ad account
              </label>
              <select
                id="hs-pro-dalpn"
                className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                {...register("ad_account", { required: true })}
              >
                {adAccounts?.data?.items.map((ad) => (
                  <option key={ad.ad_account_id} value={ad.id as string}>{ad.name}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="mt-5 flex justify-end gap-x-2">
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
            Save
          </button>
        </div>
      </form>
    </BasicModal>
  );
};

export default AddBot;