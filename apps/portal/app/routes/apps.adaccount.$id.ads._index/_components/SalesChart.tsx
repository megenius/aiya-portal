import React, { Suspense, useEffect, useState } from 'react';
import { ClientOnly } from 'remix-utils/client-only';

const Chart = React.lazy(() => import('react-apexcharts'));

interface SalesChartProps {

}

const SalesChart: React.FC<SalesChartProps> = () => {
  return (
    <Suspense fallback="">
      <ClientOnly>
        {() =>
          <div className="p-5 flex flex-col bg-white border border-gray-200 shadow-xs rounded-xl">
            {/* Header */}
            <div className="grid md:grid-cols-2 items-start gap-2 md:gap-4">
              <div className="space-y-1">
                {/* Select */}
                <div className="relative inline-block">
                  <select
                    id="hs-pro-select-revenue"
                    data-hs-select='{
      "placeholder": "Select option...",
      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
      "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative -ms-2 py-1.5 ps-2.5 pe-6 inline-flex shrink-0 justify-center items-center gap-x-1.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 before:absolute before:inset-0 before:z-1",
      "dropdownClasses": "mt-2 z-50 w-48 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]",
      "optionClasses": "hs-selected:bg-gray-100 py-1.5 px-2 w-full text-[13px] text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100",
      "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-gray-800" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
    }'
                    className="hidden"
                  >
                    <option value="">Choose</option>
                    <option selected>Revenue</option>
                    <option>Total sales</option>
                    <option>New sales</option>
                    <option>Refunds</option>
                    <option>New subscriptions</option>
                    <option>Trial conversion rate</option>
                    <option>Affiliate revenue</option>
                    <option>Affiliate clicks</option>
                  </select>
                  <div className="absolute top-1/2 end-2 -translate-y-1/2">
                    <svg
                      className="shrink-0 size-3.5 text-gray-600"
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
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
                {/* End Select */}
                <h4 className="text-2xl font-semibold text-gray-800">
                  $62,820.59
                  <svg
                    className="inline-block align-top mt-1 shrink-0 size-5 text-red-500"
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
                    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                    <polyline points="16 17 22 17 22 11" />
                  </svg>
                </h4>
                <p className="text-sm text-red-500">
                  0.2% less than the previous 30 days.
                </p>
              </div>
              {/* End Col */}
              <div className="flex md:justify-end items-center gap-x-1">
                {/* Calendar Dropdown */}
                <div className="hs-dropdown [--placement:bottom-right] [--strategy:absolute] [--flip:false] [--auto-close:inside] relative inline-flex">
                  <button
                    id="hs-pro-dachcd"
                    type="button"
                    className="py-2 px-2.5 inline-flex items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    <svg
                      className="shrink-0 size-3.5"
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
                      <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
                      <line x1={16} x2={16} y1={2} y2={6} />
                      <line x1={8} x2={8} y1={2} y2={6} />
                      <line x1={3} x2={21} y1={10} y2={10} />
                      <path d="M8 14h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 18h.01" />
                      <path d="M12 18h.01" />
                      <path d="M16 18h.01" />
                    </svg>
                    25 Jul, 2023 - 25 Aug, 2023
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
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-[318px] sm:w-[636px] transition-[opacity,margin] duration opacity-0 hidden start-5 z-50 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-pro-dachcd"
                  >
                    {/* Calendar */}
                    <div className="sm:flex">
                      {/* Calendar */}
                      <div className="p-3 space-y-0.5">
                        {/* Months */}
                        <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
                          {/* Prev Button */}
                          <div className="col-span-1">
                            <button
                              type="button"
                              className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              aria-label="Previous"
                            >
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
                                <path d="m15 18-6-6 6-6" />
                              </svg>
                            </button>
                          </div>
                          {/* End Prev Button */}
                          {/* Month / Year */}
                          <div className="col-span-3 flex justify-center items-center gap-x-1">
                            <div className="relative">
                              <select
                                data-hs-select='{
                  "placeholder": "Select month",
                  "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 before:absolute before:inset-0 before:z-1",
                  "dropdownClasses": "mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
                  "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100",
                  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-gray-800" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                }'
                                className="hidden"
                              >
                                <option value={0}>January</option>
                                <option value={1}>February</option>
                                <option value={2}>March</option>
                                <option value={3}>April</option>
                                <option value={4}>May</option>
                                <option value={5}>June</option>
                                <option value={6} selected="">
                                  July
                                </option>
                                <option value={7}>August</option>
                                <option value={8}>September</option>
                                <option value={9}>October</option>
                                <option value={10}>November</option>
                                <option value={11}>December</option>
                              </select>
                            </div>
                            <span className="text-gray-800">/</span>
                            <div className="relative">
                              <select
                                data-hs-select='{
                  "placeholder": "Select year",
                  "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 before:absolute before:inset-0 before:z-1",
                  "dropdownClasses": "mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
                  "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100",
                  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-gray-800" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                }'
                                className="hidden"
                              >
                                <option selected="">2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                              </select>
                            </div>
                          </div>
                          {/* End Month / Year */}
                          {/* Next Button */}
                          <div className="col-span-1 flex justify-end">
                            <button
                              type="button"
                              className="opacity-0 pointer-events-none size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              aria-label="Next"
                            >
                              <svg
                                className="shrink-0 size-4"
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
                            </button>
                          </div>
                          {/* End Next Button */}
                        </div>
                        {/* Months */}
                        {/* Weeks */}
                        <div className="flex pb-1.5">
                          <span className="m-px w-10 block text-center text-sm text-gray-500">
                            Mo
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500">
                            Tu
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500">
                            We
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500">
                            Th
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500">
                            Fr
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500">
                            Sa
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500">
                            Su
                          </span>
                        </div>
                        {/* Weeks */}
                        {/* Days */}
                        <div className="flex">
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                              disabled=""
                            >
                              26
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                              disabled=""
                            >
                              27
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                              disabled=""
                            >
                              28
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                              disabled=""
                            >
                              29
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                              disabled=""
                            >
                              30
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              1
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              2
                            </button>
                          </div>
                        </div>
                        {/* Days */}
                        {/* Days */}
                        <div className="flex">
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              3
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              4
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              5
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              6
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              7
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              8
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              9
                            </button>
                          </div>
                        </div>
                        {/* Days */}
                        {/* Days */}
                        <div className="flex">
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              10
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              11
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              12
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              13
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              14
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              15
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              16
                            </button>
                          </div>
                        </div>
                        {/* Days */}
                        {/* Days */}
                        <div className="flex">
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              17
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              18
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              19
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              20
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              21
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              22
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              23
                            </button>
                          </div>
                        </div>
                        {/* Days */}
                        {/* Days */}
                        <div className="flex">
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              24
                            </button>
                          </div>
                          <div className="bg-gray-100 rounded-s-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center bg-blue-600 border border-transparent text-sm font-medium text-white hover:border-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                            >
                              25
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              26
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              27
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              28
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              29
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              30
                            </button>
                          </div>
                        </div>
                        {/* Days */}
                        {/* Days */}
                        <div className="flex">
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              31
                            </button>
                          </div>
                          <div className="bg-linear-to-r from-gray-100">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              1
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              2
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              3
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              4
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              5
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              6
                            </button>
                          </div>
                        </div>
                        {/* Days */}
                      </div>
                      {/* Calendar */}
                      <div className="p-3 space-y-0.5">
                        {/* Months */}
                        <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
                          {/* Prev Button */}
                          <div className="col-span-1">
                            <button
                              type="button"
                              className="opacity-0 pointer-events-none size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              aria-label="Previous"
                            >
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
                                <path d="m15 18-6-6 6-6" />
                              </svg>
                            </button>
                          </div>
                          {/* End Prev Button */}
                          {/* Month / Year */}
                          <div className="col-span-3 flex justify-center items-center gap-x-1">
                            <div className="relative">
                              <select
                                data-hs-select='{
                  "placeholder": "Select month",
                  "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 before:absolute before:inset-0 before:z-1",
                  "dropdownClasses": "mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
                  "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100",
                  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-gray-800" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                }'
                                className="hidden"
                              >
                                <option value={0}>January</option>
                                <option value={1}>February</option>
                                <option value={2}>March</option>
                                <option value={3}>April</option>
                                <option value={4}>May</option>
                                <option value={5}>June</option>
                                <option value={6} selected="">
                                  July
                                </option>
                                <option value={7}>August</option>
                                <option value={8}>September</option>
                                <option value={9}>October</option>
                                <option value={10}>November</option>
                                <option value={11}>December</option>
                              </select>
                            </div>
                            <span className="text-gray-800">/</span>
                            <div className="relative">
                              <select
                                data-hs-select='{
                  "placeholder": "Select year",
                  "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 before:absolute before:inset-0 before:z-1",
                  "dropdownClasses": "mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
                  "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100",
                  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-gray-800" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                }'
                                className="hidden"
                              >
                                <option selected="">2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                              </select>
                            </div>
                          </div>
                          {/* End Month / Year */}
                          {/* Next Button */}
                          <div className="col-span-1 flex justify-end">
                            <button
                              type="button"
                              className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              aria-label="Next"
                            >
                              <svg
                                className="shrink-0 size-4"
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
                            </button>
                          </div>
                          {/* End Next Button */}
                        </div>
                        {/* Months */}
                        {/* Weeks */}
                        <div className="flex pb-1.5">
                          <span className="m-px w-10 block text-center text-sm text-gray-500">
                            Mo
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500">
                            Tu
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500">
                            We
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500">
                            Th
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500">
                            Fr
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500">
                            Sa
                          </span>
                          <span className="m-px w-10 block text-center text-sm text-gray-500">
                            Su
                          </span>
                        </div>
                        {/* Weeks */}
                        {/* Days */}
                        <div className="flex">
                          <div className="bg-linear-to-l from-gray-100">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              31
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                            >
                              1
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                            >
                              2
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                            >
                              3
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                            >
                              4
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              5
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              6
                            </button>
                          </div>
                        </div>
                        {/* Days */}
                        {/* Days */}
                        <div className="flex">
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              7
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              8
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              9
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              10
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              11
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              12
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              13
                            </button>
                          </div>
                        </div>
                        {/* Days */}
                        {/* Days */}
                        <div className="flex">
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              14
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              15
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              16
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              17
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              18
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              19
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              20
                            </button>
                          </div>
                        </div>
                        {/* Days */}
                        {/* Days */}
                        <div className="flex">
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              21
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              22
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              23
                            </button>
                          </div>
                          <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              24
                            </button>
                          </div>
                          <div className="bg-gray-100 rounded-e-full">
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center bg-blue-600 border border-transparent text-sm font-medium text-white hover:border-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                            >
                              25
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              26
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              27
                            </button>
                          </div>
                        </div>
                        {/* Days */}
                        {/* Days */}
                        <div className="flex">
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              28
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              29
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              30
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600"
                            >
                              31
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              1
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              2
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              3
                            </button>
                          </div>
                        </div>
                        {/* Days */}
                        {/* Days */}
                        <div className="flex">
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              4
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              5
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              6
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              7
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              8
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              9
                            </button>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                              disabled=""
                            >
                              10
                            </button>
                          </div>
                        </div>
                        {/* Days */}
                      </div>
                    </div>
                    {/* End Calendar */}
                    {/* Button Group */}
                    <div className="flex items-center py-3 px-4 justify-end border-t border-gray-200 gap-x-2">
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3  inline-flex justify-center items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                      >
                        Apply
                      </button>
                    </div>
                    {/* End Button Group */}
                  </div>
                </div>
                {/* End Calendar Dropdown */}
                {/* Download Dropdown */}
                <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                  <button
                    id="hs-pro-dachd"
                    type="button"
                    className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
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
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1={12} x2={12} y1={15} y2={3} />
                    </svg>
                  </button>
                  {/* Download Dropdown */}
                  <div
                    className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-pro-dachd"
                  >
                    <div className="p-1">
                      <div className="py-2 px-3">
                        <span className="block font-semibold text-gray-800">
                          Download Report
                        </span>
                        <span className="block text-xs text-gray-500">
                          Select Options
                        </span>
                      </div>
                      <div className="m-2 border-t border-gray-200" />
                      <div className="py-1 px-2">
                        <div className="flex items-center bg-gray-100 rounded-xl p-1">
                          <label
                            htmlFor="hs-pro-dachdts1"
                            className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs"
                          >
                            <svg
                              className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                              width={32}
                              height={32}
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.0324 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 15.8079L25.9844 18.3197L31.9364 15.8079V8.86395L20.0324 1.91994Z"
                                fill="#21A366"
                              />
                              <path
                                d="M8.12839 8.86395H20.0324V15.8079H8.12839V8.86395Z"
                                fill="#107C41"
                              />
                              <path
                                d="M30.614 1.91994H20.0324V8.86395H31.9364V3.24228C31.9364 2.89158 31.7971 2.55523 31.5491 2.30725C31.3011 2.05926 30.9647 1.91994 30.614 1.91994Z"
                                fill="#33C481"
                              />
                              <path
                                d="M20.0324 15.8079H8.12839V28.3736C8.12839 28.7243 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.6959 9.45071 29.6959H30.6141C30.9647 29.6959 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7243 31.9364 28.3736V22.7519L20.0324 15.8079Z"
                                fill="#185C37"
                              />
                              <path
                                d="M20.0324 15.8079H31.9364V22.7519H20.0324V15.8079Z"
                                fill="#107C41"
                              />
                              <path
                                opacity="0.1"
                                d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                className="fill-black"
                                fill="currentColor"
                              />
                              <path
                                opacity="0.2"
                                d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                className="fill-black"
                                fill="currentColor"
                              />
                              <path
                                opacity="0.2"
                                d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                className="fill-black"
                                fill="currentColor"
                              />
                              <path
                                opacity="0.2"
                                d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                className="fill-black"
                                fill="currentColor"
                              />
                              <path
                                d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16402 23.7439 0.827672 23.6047 0.579686 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579686 8.25922C0.827672 8.01122 1.16402 7.87194 1.51472 7.87194Z"
                                fill="#107C41"
                              />
                              <path
                                d="M3.69711 20.7679L6.90722 15.794L3.96694 10.8479H6.33286L7.93791 14.0095C8.08536 14.3091 8.18688 14.5326 8.24248 14.68H8.26328C8.36912 14.4407 8.47984 14.2079 8.5956 13.9817L10.3108 10.8479H12.4822L9.46656 15.7663L12.5586 20.7679H10.2473L8.3932 17.2959C8.30592 17.148 8.23184 16.9927 8.172 16.8317H8.14424C8.09016 16.9891 8.01824 17.1399 7.92998 17.2811L6.02236 20.7679H3.69711Z"
                                fill="white"
                              />
                            </svg>
                            <span className="relative z-10 align-middle">Excel</span>
                            <input
                              type="radio"
                              name="hs-pro-dachdts"
                              className="hidden"
                              id="hs-pro-dachdts1"
                              defaultChecked=""
                            />
                          </label>
                          <label
                            htmlFor="hs-pro-dachdts2"
                            className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs"
                          >
                            <svg
                              className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                              width={32}
                              height={32}
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z"
                                fill="#41A5EE"
                              />
                              <path
                                d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z"
                                fill="#2B7CD3"
                              />
                              <path
                                d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z"
                                fill="#185ABD"
                              />
                              <path
                                d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z"
                                fill="#103F91"
                              />
                              <path
                                opacity="0.1"
                                d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                className="fill-black"
                                fill="currentColor"
                              />
                              <path
                                opacity="0.2"
                                d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                className="fill-black"
                                fill="currentColor"
                              />
                              <path
                                opacity="0.2"
                                d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                className="fill-black"
                                fill="currentColor"
                              />
                              <path
                                opacity="0.2"
                                d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                className="fill-black"
                                fill="currentColor"
                              />
                              <path
                                d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z"
                                fill="#185ABD"
                              />
                              <path
                                d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z"
                                fill="white"
                              />
                            </svg>
                            <span className="relative z-10 align-middle">Word</span>
                            <input
                              type="radio"
                              name="hs-pro-dachdts"
                              className="hidden"
                              id="hs-pro-dachdts2"
                            />
                          </label>
                        </div>
                      </div>
                      <div className="m-2 border-t border-gray-200" />
                      <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100">
                        <label
                          htmlFor="hs-pro-dachds1"
                          className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800"
                        >
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
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                            <path d="m15 5 4 4" />
                          </svg>
                          Section name
                        </label>
                        <input
                          type="checkbox"
                          className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          id="hs-pro-dachds1"
                          defaultChecked=""
                        />
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100">
                        <label
                          htmlFor="hs-pro-dachds2"
                          className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800"
                        >
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
                            <path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
                            <polyline points="14 2 14 8 20 8" />
                            <path d="M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29" />
                            <path d="M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z" />
                          </svg>
                          Comparison stats
                        </label>
                        <input
                          type="checkbox"
                          className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          id="hs-pro-dachds2"
                          defaultChecked=""
                        />
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100">
                        <label
                          htmlFor="hs-pro-dachds3"
                          className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800"
                        >
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
                            <circle cx={12} cy={12} r={10} />
                          </svg>
                          Legend indicator
                        </label>
                        <input
                          type="checkbox"
                          className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          id="hs-pro-dachds3"
                          defaultChecked=""
                        />
                      </div>
                      <div className="my-1 border-t border-gray-200" />
                      <button
                        type="button"
                        className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                      >
                        Download
                      </button>
                    </div>
                  </div>
                  {/* End Download Dropdown */}
                </div>
                {/* End Download Dropdown */}
                {/* Download Dropdown */}
                <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                  <button
                    id="hs-pro-dachmd"
                    type="button"
                    className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
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
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={12} cy={5} r={1} />
                      <circle cx={12} cy={19} r={1} />
                    </svg>
                  </button>
                  {/* Download Dropdown */}
                  <div
                    className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-pro-dachmd"
                  >
                    <div className="p-1">
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-hidden focus:bg-gray-100 disabled:pointer-events-none"
                      >
                        <svg
                          className="shrink-0 size-3.5"
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
                          <circle cx={18} cy={5} r={3} />
                          <circle cx={6} cy={12} r={3} />
                          <circle cx={18} cy={19} r={3} />
                          <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                          <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                        </svg>
                        Share reports
                      </button>
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-hidden focus:bg-gray-100 disabled:pointer-events-none"
                      >
                        <svg
                          className="shrink-0 size-3.5"
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
                          <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                          <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                          <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                          <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                        </svg>
                        View in fullscreen
                      </button>
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-hidden focus:bg-gray-100 disabled:pointer-events-none"
                      >
                        <svg
                          className="shrink-0 size-3.5"
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
                          <path d="M3 3h6l6 18h6" />
                          <path d="M14 3h7" />
                        </svg>
                        Connect other apps
                      </button>
                      <div className="my-1 border-t border-gray-200" />
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-hidden focus:bg-gray-100 disabled:pointer-events-none"
                      >
                        <svg
                          className="shrink-0 size-3.5"
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
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          <line x1={9} x2={15} y1={10} y2={10} />
                          <line x1={12} x2={12} y1={7} y2={13} />
                        </svg>
                        Submit Feedback
                      </button>
                    </div>
                  </div>
                  {/* End Download Dropdown */}
                </div>
                {/* End Download Dropdown */}
              </div>
              {/* End Col */}
            </div>
            {/* End Header */}
            {/* Legend Indicator */}
            <div className="flex justify-center sm:justify-end items-center gap-x-4 mt-5 sm:mt-0 sm:mb-6">
              <div className="inline-flex items-center">
                <span className="size-2.5 inline-block bg-blue-600 rounded-xs me-2" />
                <span className="text-[13px] text-gray-600">This month</span>
              </div>
              <div className="inline-flex items-center">
                <span className="size-2.5 inline-block bg-purple-600 rounded-xs me-2" />
                <span className="text-[13px] text-gray-600">Last month</span>
              </div>
            </div>
            {/* End Legend Indicator */}
            {/* Apex Line Chart */}
            {/* <div id="hs-sales-line-chart" className="min-h-[415px] " /> */}
            <ApexChartComponent />
          </div>
        }
      </ClientOnly>
    </Suspense>

  );
};

export default SalesChart;


const ApexChartComponent = () => {
  const [chartOptions, setChartOptions] = useState<any>({});
  const [series, setSeries] = useState<any>([]);

  useEffect(() => {
    const options = {
      chart: {
        height: 400,
        type: 'area',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      colors: ['#2563eb', '#9333ea'],
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',
          shadeIntensity: 1,
          opacityFrom: 0.2,
          opacityTo: 0.8,
          stops: [0, 90, 100]
        }
      },
      xaxis: {
        type: 'category',
        tickPlacement: 'on',
        categories: [
          '25 January 2023',
          '28 January 2023',
          '31 January 2023',
          '1 February 2023',
          '3 February 2023',
          '6 February 2023',
          '9 February 2023',
          '12 February 2023',
          '15 February 2023',
          '18 February 2023',
          '21 February 2023',
          '25 February 2023'
        ],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          stroke: {
            dashArray: 0
          },
          dropShadow: {
            show: false
          }
        },
        tooltip: {
          enabled: false
        },
        labels: {
          style: {
            colors: '#9ca3af',
            fontSize: '13px',
            // fontFamily: 'Inter, ui-sans-serif',
            fontWeight: 400
          },
          formatter: (value) => {
            if (value) {
              const parts = value?.split(' ');
              return `${parts[0]} ${parts[1].slice(0, 3)}`;
            }
            return value
          }
        }
      },
      yaxis: {
        labels: {
          align: 'left',
          minWidth: 0,
          maxWidth: 140,
          style: {
            colors: '#9ca3af',
            fontSize: '12px',
            // fontFamily: 'Inter, ui-sans-serif',
            fontWeight: 400
          },
          formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
        }
      },
      tooltip: {
        x: {
          format: 'MMMM yyyy'
        },
        y: {
          formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}`
        },
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          const data = series.map((s, i) => ({
            name: w.globals.seriesNames[i],
            value: s[dataPointIndex],
            color: w.globals.colors[i]
          }));
          return (
            '<div class="apexcharts-tooltip-title" style="font-family: Inter, ui-sans-serif; font-size: 12px; font-weight: 600; padding: 4px 8px; background-color: #f3f4f6; border-bottom: 1px solid #e5e7eb; color: #111827;">Revenue</div>' +
            '<div class="apexcharts-tooltip-series-group" style="padding: 8px; display: flex; flex-direction: column;">' +
            data.map(item => `
              <div style="display: flex; align-items: center; margin-bottom: 4px;">
                <span style="width: 12px; height: 12px; border-radius: 50%; background-color: ${item.color}; margin-right: 6px;"></span>
                <span style="font-family: Inter, ui-sans-serif; font-size: 12px; font-weight: 400; color: #6b7280;">${item.name}: </span>
                <span style="font-family: Inter, ui-sans-serif; font-size: 12px; font-weight: 600; color: #111827; margin-left: 4px;">$${item.value >= 1000 ? `${item.value / 1000}k` : item.value}</span>
              </div>
            `).join('') +
            '</div>'
          );
        }
      },
      grid: {
        strokeDashArray: 2,
        borderColor: '#e5e7eb'
      },
      responsive: [{
        breakpoint: 568,
        options: {
          chart: {
            height: 300
          },
          xaxis: {
            labels: {
              style: {
                fontSize: '11px'
              },
              offsetX: -2,
              formatter: (value) => value.slice(0, 3)
            }
          },
          yaxis: {
            labels: {
              style: {
                fontSize: '11px'
              }
            }
          }
        }
      }]
    };

    setChartOptions(options);
    setSeries([
      {
        name: '2022',
        data: [18000, 51000, 60000, 38000, 88000, 50000, 40000, 52000, 88000, 80000, 60000, 70000]
      },
      {
        name: '2023',
        data: [27000, 38000, 60000, 77000, 40000, 50000, 49000, 29000, 42000, 27000, 42000, 50000]
      }
    ]);
  }, []);

  return (
    <div className="w-full h-[400px]">
      <Chart options={chartOptions} series={series} type="area" height="100%" />
    </div>
  );
};