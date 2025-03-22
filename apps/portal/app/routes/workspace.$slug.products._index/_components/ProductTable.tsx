import React from 'react';
import { Product } from '~/@types/app';
import ProductTableHeader from './ProductTableHeader';
import ProductTableFooter from './ProductTableFooter';
import { Link } from '@remix-run/react';
import { getDirectusFileUrl } from '~/utils/files';

interface ProductListProps {
  items?: Product[];
}

const ProductTable: React.FC<ProductListProps> = ({ items = [] }) => {
  return (
    <div>
      {/* Tab Content */}
      <div
        id="hs-pro-tabs-dut-all"
        role="tabpanel"
        aria-labelledby="hs-pro-tabs-dut-item-all"
      >
        {/* Table Content */}
        <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <div className="min-w-full inline-block align-middle">
            {/* Table */}
            <table className="min-w-full divide-y divide-stone-200 dark:divide-neutral-700">
              <ProductTableHeader />
              <tbody className="divide-y divide-stone-200 dark:divide-neutral-700">

                {/* Product Row */}
                {items.map((item) => (
                  <tr>
                    <td className="size-px whitespace-nowrap ps-3 py-4">
                      <input
                        type="checkbox"
                        className="shrink-0 border-stone-300 rounded-sm text-blue-600 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-neutral-800"
                      />
                    </td>
                    <td className="size-px whitespace-nowrap px-4 py-3">
                      <div className="w-full flex items-center gap-x-3">
                        {item.thumbnail ?
                          <img
                            className="shrink-0 size-12 rounded-md"
                            src={getDirectusFileUrl(item.thumbnail as string)}
                            alt="Product Image"
                          />
                          : <div className="shrink-0 size-12 rounded-md bg-stone-100 dark:bg-neutral-800"></div>
                        }
                        <div className="grow">
                          <Link to={`${item.id}`}
                            className="text-sm font-medium text-stone-800 decoration-2 hover:underline focus:outline-hidden focus:underline  dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
                          >
                            {item.name}
                          </Link>

                        </div>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap px-4 py-3">
                      <span className="text-sm text-stone-600 dark:text-neutral-400">
                        {item.type}
                      </span>
                    </td>
                    {/* <td className="size-px whitespace-nowrap px-4 py-3">
                      <div className="flex justify-between items-center">
                        <div className="relative inline-block">
                          <input
                            checked={item.is_available as boolean}
                            type="checkbox"
                            className="relative w-[35px] h-[21px] bg-stone-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-neutral-900
                           before:inline-block before:size-4 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow-sm before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                          />
                        </div>
                      </div>
                    </td> */}
                    <td className="size-px whitespace-nowrap px-4 py-3">
                      <span className="text-sm text-stone-600 dark:text-neutral-400">
                        {item.sku}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap px-4 py-3">
                      <span className="text-sm text-stone-600 dark:text-neutral-400">
                        ${item.price}
                      </span>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
            {/* End Table */}
          </div>
        </div>
        {/* End Table Content */}
        {/* <ProductTableFooter /> */}
      </div>
      {/* End Tab Content */}
    </div>
  );
};

export default ProductTable;