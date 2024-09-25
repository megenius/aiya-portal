import React from 'react';
import { Image, Plus, Type } from 'lucide-react';
interface ChatToolbarProps {
  modalKey: string;
  onAddText?: () => void;
  onAddImage?: () => void;
}

export const ChatToolbar: React.FC<ChatToolbarProps> = ({ modalKey, onAddText, onAddImage }) => {

  return (
    <>
      <div className="relative inline-flex gap-1">
        {/* <button
          aria-haspopup="menu"
          aria-expanded="false"
          // aria-label="Dropdown"
          type="button"
          className="flex justify-center cursor-default items-center size-9 bg-white hover:bg-gray-50 hover:text-gray-900 focus:outline-none text-gray-800 rounded-full dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
        >
          <Plus className="size-5" />
        </button> */}
        <button
          aria-haspopup="menu"
          aria-expanded="false"
          // aria-label="Dropdown"
          type="button"
          className="flex justify-center items-center size-9 bg-white hover:bg-gray-50 hover:text-gray-900 focus:outline-none text-gray-800 rounded-full dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
          onClick={() => onAddText?.()}
        >
          <Type className="size-5" />
        </button>

        <button
          aria-haspopup="menu"
          aria-expanded="false"
          // aria-label="Dropdown"
          type="button"
          className="flex justify-center items-center size-9 bg-white hover:bg-gray-50 hover:text-gray-900 focus:outline-none text-gray-800 rounded-full dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
          onClick={() => onAddImage?.()}
        >
          <Image className="size-5" />
        </button>
      </div>
    </>
  );
};

export default ChatToolbar;