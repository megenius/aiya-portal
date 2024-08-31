import React from 'react';
import BasicModal from '~/components/BasicModal';
import { useForm, SubmitHandler } from "react-hook-form"
import { randomHexString } from '~/utils/random';
import { useFacebookSDK } from '~/hooks/useFacebookSDK';

type Inputs = {
  provider_id: string
  provider_secret: string
}

interface AddFacebookModalProps {
  id: string;
  onOk: (values: Inputs) => void;
}


const AddFacebookModal: React.FC<AddFacebookModalProps> = ({ id, onOk }) => {
  
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

  return (
    <BasicModal id={id} title="Add LINE Channel">
      <form onSubmit={handleSubmit(onSubmit)}>


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

export default AddFacebookModal;