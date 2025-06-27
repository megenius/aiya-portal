import { useNavigate } from '@remix-run/react';
import { Loading } from "@repo/preline";
import React, { useState } from 'react';
import SearchInput from '~/components/SearchInput';
import { useMe } from '~/hooks/useMe';
import { useWorkspaceInsert, useWorkspaces } from '~/hooks/workspace';
import CouponTable from './CouponTable';

// Mock data for coupons
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

interface MainContentProps {

}

const MainContent: React.FC<MainContentProps> = () => {
  const { data: currentUser } = useMe()
  const workspaces = useWorkspaces();
  const insertWorkspace = useWorkspaceInsert();
  const navigate = useNavigate()

  const mockCoupons: Coupon[] = [
    { id: '1', name: 'Coupon A', discount: '10%', campaign: 'Campaign A', createdDate: 'Jan 8, 2:31', expiryDate: 'Feb 15, 23:59', status: 'active', published: true, used: 1, total: 5, usagePercentage: 20 },
    { id: '2', name: 'Coupon B', discount: '15%', campaign: 'Campaign A', createdDate: 'Jan 7, 4:18', expiryDate: 'Feb 20, 23:59', status: 'inactive', published: false, used: 2, total: 5, usagePercentage: 40 },
    { id: '3', name: 'Coupon C', discount: '20%', campaign: 'Campaign A', createdDate: 'Jan 6, 3:25', expiryDate: 'Mar 1, 23:59', status: 'active', published: true, used: 4, total: 5, usagePercentage: 80 },
    { id: '4', name: 'Coupon D', discount: '25%', campaign: 'Campaign B', createdDate: 'Jan 5, 6:40', expiryDate: 'Feb 28, 23:59', status: 'draft', published: false, used: 1, total: 5, usagePercentage: 20 },
    { id: '5', name: 'Coupon E', discount: '30%', campaign: 'Campaign F', createdDate: 'Jan 10, 5:30', expiryDate: 'Mar 10, 23:59', status: 'active', published: true, used: 4, total: 5, usagePercentage: 80 },
    { id: '6', name: 'Coupon F', discount: '5%', campaign: 'Campaign F', createdDate: 'Jan 11, 4:30', expiryDate: 'Feb 25, 23:59', status: 'inactive', published: false, used: 3, total: 5, usagePercentage: 60 },
  ];

  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setCurrentPage(1); // Reset to first page when search changes
  };
  

  const handlerCreate = () => {
    console.log('Create new coupon');
    // navigate to create coupon page
    navigate('/coupons/create');
  }


  if (workspaces.isPending) {
    return <Loading />
  }

  return (
    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm dark:bg-neutral-800 dark:border-neutral-700">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">คูปอง</h1>
        <button 
        onClick={handlerCreate}
        type="button" 
        className="py-2 px-3.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-black text-white shadow-2xs hover:bg-black/80 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-hidden focus:bg-black/80 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
           สร้างคูปอง
        </button>
      </div>

      {/* Search */}
      <div className="mb-6 flex w-1/2">
        <SearchInput placeholder='ค้นหาคูปอง' onSubmit={handleSearchChange} value={searchValue} />
      </div>

      {/* Coupon Table */}
      <CouponTable
        mockCoupons={mockCoupons}
        searchValue={searchValue}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  )
};

export default MainContent;
