import React, { useState } from 'react';
import SearchInput from './SearchInput';
import { useFacebookSDK } from '~/hooks/useFacebookSDK';
import { PageInfo } from '~/@types/app';

interface MemberTableFilterProps {
  button: React.ReactNode;
  onChanged?: (value: string) => void;
  onLoadPages?: (pages: Array<PageInfo>) => void;
}

const MemberTableFilter: React.FC<MemberTableFilterProps> = ({ onChanged, onLoadPages, button }) => {
  return (
    <>
      <div className="flex sm:grid sm:grid-cols-2 gap-x-2 sm:gap-x-5">
        <SearchInput onSearchChange={(value) => onChanged && onChanged(value)} />
        <div className="flex justify-end items-center gap-x-2">
          {/* <DownloadCSVButton /> */}
          {/* <AddButton /> */}
          {/* <AddButton onLoadPages={onLoadPages} /> */}
          {button}
        </div>
      </div>
    </>
  );
};

export default MemberTableFilter;