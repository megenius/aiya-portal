import React from 'react';
import BasicModal from '~/components/BasicModal';
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  emails: string
}

interface AddMemberProps {
  id: string;
  onOk: (values: { emails: string[] }) => void;
}

const AddMember: React.FC<AddMemberProps> = ({ id, onOk }) => {
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
    onOk({
      emails: data?.emails.split("\n").map((email) => email.trim()).filter((email) => email)
    })
  }

  return (
    <BasicModal id={id} title="Invite">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          {/* Project name input */}
          <div>
            <label
              htmlFor="hs-pro-dalpn"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Invite
            </label>
            <textarea
              // ref={textareaRef}
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              rows={6}
              placeholder={"Enter email here (one per line)..."}
              {...register("emails", { required: true })}
            />
          </div>
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
            Send
          </button>
        </div>
      </form>
    </BasicModal>
  );
};

export default AddMember;