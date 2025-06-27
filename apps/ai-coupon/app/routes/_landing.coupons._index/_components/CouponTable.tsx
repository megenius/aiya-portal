import { useNavigate } from '@remix-run/react';
import React from 'react';
import Pagination from '~/components/Pagination';



interface Coupon {
  id: string;
  name: string;
  discount: string;
  campaign: string;
  createdDate: string;
  expiryDate: string;
  status: 'active' | 'inactive' | 'draft';
  published: boolean;
  used: number;
  total: number;
  usagePercentage: number;
}


interface CouponTableProps {
  mockCoupons: Coupon[];
  searchValue: string;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const CouponTable: React.FC<CouponTableProps> = ({
    mockCoupons,
  searchValue,
  currentPage,
  itemsPerPage,
  onPageChange,
}) => {
    const navigate = useNavigate();
  const filteredCoupons = React.useMemo(() => {
    if (!searchValue) return mockCoupons;

    const searchText = searchValue.toLowerCase().trim();

    return mockCoupons.filter(coupon => {
      return coupon.name?.toLowerCase().includes(searchText) ||
             coupon.campaign?.toLowerCase().includes(searchText);
    });
  }, [searchValue]);

  const paginatedCoupons = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredCoupons.slice(startIndex, endIndex);
  }, [filteredCoupons, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredCoupons.length / itemsPerPage);

  const handleRowClick = (item: Coupon) => {
    console.log('Clicked coupon:', item)
    // navigate to coupon detail page
  }

  const handleEdit = (coupon: Coupon) => {
    console.log('Edit coupon:', coupon)
  }

  const handleDelete = (coupon: Coupon) => {
    console.log('Delete coupon:', coupon)
  }

  const handleDuplicate = (coupon: Coupon) => {
    console.log('Duplicate coupon:', coupon)
  }


  return (
    <>
      {/* Table Content */}
      <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <div className="min-w-full inline-block align-middle">
          {/* Table */}
          <table className="min-w-full divide-y divide-gray-200 border-t border-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <thead className="">
              <tr>
                <th scope="col" className="min-w-56">
                  <div className="px-5 py-2.5 text-start w-full text-sm font-semibold text-black">
                    ชื่อคูปอง
                  </div>
                </th>

                {/* <th scope="col" className="min-w-18">
                  <div className="px-5 py-2.5 text-start w-full text-sm font-semibold text-black">
                    ส่วนลด
                  </div>
                </th> */}

                <th scope="col" className="min-w-32">
                  <div className="px-5 py-2.5 text-start w-full text-sm font-semibold text-black">
                    status
                  </div>
                </th>

                <th scope="col" className="min-w-32">
                  <div className="px-5 py-2.5 text-start w-full text-sm font-semibold text-black">
                    วันที่สร้าง
                  </div>
                </th>

                <th scope="col" className="min-w-32">
                  <div className="px-5 py-2.5 text-start w-full text-sm font-semibold text-black">
                    วันที่สิ้นสุด
                  </div>
                </th>

                <th scope="col" className="min-w-28">
                  <div className="px-5 py-2.5 text-center w-full text-sm font-semibold text-black">
                    เผยแพร่
                  </div>
                </th>

                <th scope="col" className="min-w-28">
                  <div className="px-5 py-2.5 text-start w-full text-sm font-semibold text-black">
                    การใช้งาน
                  </div>
                </th>

                <th scope="col" className="min-w-28">
                  <div className="px-5 py-2.5 text-start w-full text-sm font-semibold text-black">
                    การดำเนินการ
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
              {paginatedCoupons.map((coupon) => (
                <tr key={coupon.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => handleRowClick(coupon)}>
                  <td className="size-px whitespace-nowrap">
                    <div className="py-3 px-5 block text-sm font-medium text-gray-800 dark:text-white">
                      <div className="flex items-center gap-x-4">
                        <div className="shrink-0 size-5 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-indigo-600 text-xs font-medium">{coupon.name.charAt(coupon.name.length - 1)}</span>
                        </div>
                        <div className="grow">
                          {coupon.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* <td className="size-px whitespace-nowrap">
                    <div className="py-3 px-5">
                      <span className="text-sm text-blue-600 font-medium dark:text-blue-400">
                        {coupon.discount}
                      </span>
                    </div>
                  </td> */}
                  <td className="size-px whitespace-nowrap">
                    <div className="py-3 px-5">
                      <span className={`text-sm font-medium ${coupon.status === 'active' ? 'text-green-600 dark:text-green-400': coupon.status === 'draft' ? 'text-blue-600 dark:text-blue-400' : 'text-red-600 dark:text-red-400'}`}>
                        {coupon.status}
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <div className="py-3 px-5">
                      <span className="text-sm text-gray-800 dark:text-white">
                        {coupon.createdDate}
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <div className="py-3 px-5">
                      <span className="text-sm text-gray-800 dark:text-white">
                        {coupon.expiryDate}
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <div className="py-3 px-5">
                      <div className="flex items-center justify-center">
                        {coupon.published ? (
                          <div className="flex items-center gap-x-2">
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd"/>
                              <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/>
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <div className="py-3 px-5">
                      <div className="flex items-center gap-x-3">
                        <span className="text-xs text-gray-500 dark:text-neutral-500">{coupon.used}/{coupon.total}</span>
                        <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow={coupon.usagePercentage} aria-valuemin={0} aria-valuemax={100}>
                          <div className="flex flex-col justify-center overflow-hidden bg-indigo-600 text-xs text-white text-center whitespace-nowrap" style={{width: `${coupon.usagePercentage}%`}}></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <div className="py-3 px-5">
                      <div className="flex justify-end space-x-2">
                        {/* Edit Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEdit(coupon);
                          }}
                          className="text-gray-400 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-neutral-400"
                          title="แก้ไข"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        
                        {/* Duplicate Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDuplicate(coupon);
                          }}
                          className="text-gray-400 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-neutral-400"
                          title="ทำซ้ำ"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>

                        {/* More Actions Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            // Show dropdown menu
                          }}
                          className="text-gray-400 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-neutral-400"
                          title="เพิ่มเติม"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* End Table */}
        </div>
      </div>
      {/* End Table Content */}

      {/* Empty State */}
      {filteredCoupons.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500">ไม่พบคูปองที่ค้นหา</div>
        </div>
      )}

      {/* Pagination */}
      {filteredCoupons.length > 0 && (
        <div className="flex items-center justify-end">
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </>
  );
};

export default CouponTable;
