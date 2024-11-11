import React, { useState } from 'react';
import SearchInput from './SearchInput';
import { Channel, PageInfo } from '~/@types/app';

interface TableFilterProps {
  onChanged?: (value: string) => void;
  onChannelsSelected?: (channels: Array<Channel>) => void;
}

const TableFilter: React.FC<TableFilterProps> = ({ onChanged, onChannelsSelected }) => {
  return (
    <>
      <div className="flex sm:grid sm:grid-cols-2 gap-x-2 sm:gap-x-5">
        <SearchInput onSearchChange={(value) => onChanged && onChanged(value)} />
        <div className="flex justify-end items-center gap-x-2">
          {/* <DownloadCSVButton /> */}
          {/* <AddButton /> */}
          {/* <AddButton /> */}
        </div>
      </div>
    </>
  );
};

export default TableFilter;

const AddButton = () => {

  return (
    <button
      id="hs-pro-dnhd"
      type="button"
      className="hs-tooltip-toggle  py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-haspopup="menu"
      aria-expanded="false"
      aria-label="Dropdown"
      data-hs-overlay={`#add-bot-channel-modal`}
    >
      Add Channel
    </button>
  )
}