import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import BasicModal from './BasicModal';

interface Field {
  label?: string;
  name: string;
  required?: boolean;
  type: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
}

interface BasicAddModalProps {
  id: string;
  title: string;
  fields: Field[];
  onOk?: (values: Record<string, string>) => void;
  className?: string;
  submitButtonLabel?: string;
}

const BasicAddModal: React.FC<BasicAddModalProps> = ({ id, title, fields, onOk, className, submitButtonLabel }) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    document.addEventListener('close.hs.overlay', () => {
      reset()
    });

    return () => {
      document.removeEventListener('close.hs.overlay', () => {
        reset()
      });
    }
  }, []);

  const onSubmit: SubmitHandler<Record<string, string>> = async (data, e) => {
    e?.preventDefault()
    if (Object.keys(errors).length > 0) return

    reset()
    onOk && onOk(data as Record<string, string>)
    const { HSOverlay } = await import('preline/preline');
    HSOverlay.close("#"+id);
  }

  return (
    <BasicModal id={id} title={title}
      className={className}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          {fields.map((field, index) => (
            <div key={index}>
              <label
                htmlFor={`hs-pro-dalpn-${field.name}`}
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <div>
                  <textarea
                    id={`hs-pro-dalpn-${field.name}`}
                    className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder={field.placeholder}
                    rows={typeof field.rows === 'number' ? field.rows : 10}
                    {...register(field.name, { required: field.required })}
                  />
                  <div className='flex justify-end mt-2'>
                    <span className="text-sm text-gray-500">Max {field.maxLength} characters</span>
                  </div>
                </div>
              ) : (
                <input
                  type={field.type}
                  id={`hs-pro-dalpn-${field.name}`}
                  className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder={field.placeholder}
                  {...register(field.name, { required: field.required })}
                />
              )}
              {errors[field.name] && <p className="text-sm text-red-600 mt-2">This field is required</p>}
            </div>
          ))}

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
          // data-hs-overlay={`#${id}`}
          >
            {submitButtonLabel || "Save"}
          </button>
        </div>
      </form>
    </BasicModal>
  );
};

export default BasicAddModal;