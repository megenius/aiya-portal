import React from 'react';
import Location from './Location';
import { useForm, SubmitHandler } from "react-hook-form"
import useUpdateMe from '~/hooks/useUpdateMe';
import { User } from '~/@types/app';
import { Id, toast } from 'react-toastify';
interface PersonalInfoProps {
  user?: User
}

type Inputs = {
  name: string
  email: string
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ user }) => {
  const updateMe = useUpdateMe()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: user,
  })


  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    e?.preventDefault()
    const [first_name, last_name] = data.name.split(' ')
    updateMe.mutateAsync({ first_name, last_name, email: data.email }).then(res => toast.success("Success"))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="py-6 sm:py-8 space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
        <h2 className="font-semibold text-gray-800 dark:text-neutral-200">
          Personal info
        </h2>
        {/* Grid */}
        <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
          <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
            <label
              htmlFor="hs-pro-dappinm"
              className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500"
            >
              Name
            </label>
          </div>
          {/* End Col */}
          <div className="sm:col-span-8 xl:col-span-4">
            <input
              id="hs-pro-dappinm"
              type="text"
              className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm text-neutral-600 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
              placeholder="Enter full name"
              {...register("name", { required: true })}
            />
            <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
              Enter your full name, or a display name you are comfortable
              with.
            </p>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}

        {/* Grid */}
        <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
          <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
            <label
              htmlFor="hs-pro-dappiem"
              className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500"
            >
              Email
            </label>
          </div>
          {/* End Col */}
          <div className="sm:col-span-8 xl:col-span-4">
            <input
              id="hs-pro-dappiem"
              type="text"
              className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm text-neutral-600 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
              placeholder="Enter email address"
              {...register("email", { required: true })}
            />
            <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
              Enter the email address you want to use to log in with Preline.
            </p>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
        {/* <Location /> */}
        {/* Button Group */}
        <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
          <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2" />
          <div className="sm:col-span-8 xl:col-span-4">
            <div className="flex gap-x-3">
              <button
                type="submit"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              >
                Save changes
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        {/* End Button Group */}
      </div>
    </form>
  );
};

export default PersonalInfo;