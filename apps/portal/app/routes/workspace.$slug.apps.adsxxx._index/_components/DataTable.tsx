
import { Avatar } from '@repo/preline/Avatar';
import React from 'react';
import {
  FacebookAdAccount
} from '~/@types/app';
import { getDirectusFileUrl } from '~/utils/files';
import { NumericFormat } from 'react-number-format';
import { CurrencyFormatter } from '@repo/ui';
import { cn } from '@repo/ui/utils';
import { Trash } from 'lucide-react';

type DataTableProps = {
  items?: FacebookAdAccount[];
  onRowClick?: (item: FacebookAdAccount) => void
};

export const DataTable: React.FC<DataTableProps> = ({ items, onRowClick }) => {


  const handleDelete = (item: FacebookAdAccount) => {
    
  };

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
              <th className="min-w-48">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-500">
                  Spent last 28 days
                </div>
              </th>
              {/* <th className="min-w-48">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-500">
                  Business Name
                </div>
              </th>
              <th className="min-w-36">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-500">
                  Business Manager
                </div>
              </th> */}
              <th>
                {/* <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-500">
                  Status
                </div> */}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            {items?.map((item, index) => (
              <tr key={index} className={cn({
                'cursor-pointer': true //item.last_synced
              })} onClick={() => onRowClick && onRowClick(item)}>
                <td className="size-px whitespace-nowrap pe-4 py-3">
                  <div className="w-full flex items-center gap-x-3">
                    <Avatar firstName={item.name as string} />
                    <div className="grow">
                      <span className="text-sm font-medium text-gray-800 dark:text-neutral-500">
                        {item.name}
                      </span>
                      <div className="text-sm text-gray-400 dark:text-neutral-400">
                        {item.ad_account_id}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-3">
                  <Spend spend={item.spend} currency={item.metadata?.currency} />
                </td>
                {/* <td className="size-px whitespace-nowrap px-4 py-3">
                  <span className="text-sm text-gray-600">{item.metadata?.business_name}</span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-3">
                  <span className="text-sm text-gray-600">{item.metadata?.business?.name}</span>
                  <div className="text-sm text-gray-400 dark:text-neutral-400">
                    {item.metadata?.business?.id}
                  </div>
                </td> */}
                <td className="size-px whitespace-nowrap px-4 py-3">
                  <Trash className="cursor-pointer w-4 text-red-300" onClick={() => handleDelete(item)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


const Spend: React.FC<{ spend?: number, currency?: string }> = ({ spend = 0, currency = "" }) => {
  if (spend === 0) {
    return
  }
  return (
    <span className="text-sm text-gray-600"><CurrencyFormatter amount={spend} currency={currency} /></span>
  );
};