import React from 'react';
import BasicModal from '~/components/BasicModal';
import { useForm, SubmitHandler } from "react-hook-form"
import { randomHexString } from '~/utils/random';

type Inputs = {
  name: string
  slug?: string
}

interface AddWorkspaceProps {
  id: string;
  onOk: (values: Inputs) => void;
}

const AddWorkspace: React.FC<AddWorkspaceProps> = ({ id, onOk }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<Inputs>({
    defaultValues: {
      slug: randomHexString(8)
    }
  })

  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    e?.preventDefault()
    reset()
    onOk(data)
  }

  return (
    <BasicModal id={id} title="Add WorkSpace">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          {/* Project name input */}
          <div>
            <label
              htmlFor="hs-pro-dalpn"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Workspace name
            </label>
            <input
              type="text"
              id="hs-pro-dalpn"
              className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="My Workspace"
              {...register("name", { required: true })}
            />
          </div>
        </div>

        {/* <div className="space-y-5">
          <div>
            <label
              htmlFor="hs-pro-dalpn"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Machine Name
            </label>
            <input
              type="text"
              id="hs-pro-dalpn"
              className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="my_workspace"
              {...register("slug", { required: true })}
            />
          </div>
        </div> */}

        <div className="mt-5 flex justify-end gap-x-2">
          <button
            type="button"
            className="py-2 px-3 inline-flex justify-center items-center text-start bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            data-hs-overlay={`#${id}`}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-blue-600 border border-blue-600 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-blue-300"
            data-hs-overlay={`#${id}`}
          >
            Save
          </button>
        </div>
      </form>
    </BasicModal>
  );
};

export default AddWorkspace;