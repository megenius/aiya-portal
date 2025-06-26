import React from "react"
import { useNavigate, useSearchParams } from "@remix-run/react"

const Route = () => {
  const [search] = useSearchParams()
  const mail = search.get('mail')
  const navigate = useNavigate()


  return (
    <div className="grow px-5">
      <div className="h-full min-h-screen sm:w-[448px] flex flex-col justify-center mx-auto space-y-5">
        {/* Title */}
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Verify your email
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            We've sent a link to your email address:{" "}
            <span className="font-semibold text-gray-800">{mail}</span>
          </p>
          <p className="text-sm text-gray-500">
            Please follow the link inside to continue.
          </p>
        </div>
        {/* End Title */}
        <form>
          <button
            onClick={() => navigate('/')}
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Continue
          </button>
        </form>
        {/* <p className="text-sm text-gray-500">
          Didn't receive an email?
          <a
            className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-hidden focus:underline"
            href="#"
          >
            Resend
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </p> */}
      </div>
    </div>
  )
}

export default Route

