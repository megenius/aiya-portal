
import { Avatar } from '@repo/preline/Avatar';
import React from 'react';
import { AdApp } from '~/@types/app';
import { getDirectusFileUrl } from '~/utils/files';


type DataTableProps = {
  items?: AdApp[];
  onRowClick?: (item: AdApp) => void
};

export const DataTable: React.FC<DataTableProps> = ({ items, onRowClick }) => {
  return (
    <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
      <div className="min-w-full inline-block align-middle">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
          <thead>
            <tr>
              <th className="min-w-[250px]">
                <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-500">
                  Name
                </div>
              </th>
              {/* <th className="min-w-48">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-500">
                  Role
                </div>
              </th>
              <th className="min-w-36">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-500">
                  Plan
                </div>
              </th> */}
              <th>
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-500">
                  Status
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            {items?.map((item, index) => (
              <tr key={index} className='cursor-pointer' onClick={() => onRowClick && onRowClick(item)}>
                <td className="size-px whitespace-nowrap pe-4 py-3">
                  <div className="w-full flex items-center gap-x-3">
                    <Avatar firstName={item.name as string} />
                    <div className="grow">
                      <span className="text-sm font-medium text-gray-800 dark:text-neutral-500">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </td>
                {/* <td className="size-px whitespace-nowrap px-4 py-3">
                  <span className="text-sm text-gray-600">{item.role}</span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-3">
                  <span className="text-sm text-gray-600">{item.plan}</span>
                </td> */}
                <td className="size-px whitespace-nowrap px-4 py-3">
                  <span
                    className={`inline-flex items-center gap-x-1.5 py-1.5 px-2.5 text-xs font-medium rounded-full ${item.status === 'Active'
                      ? 'bg-teal-100 text-teal-800'
                      : 'bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white'
                      }`}
                  >
                    <span className="size-1.5 inline-block bg-gray-800 rounded-full"></span>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

