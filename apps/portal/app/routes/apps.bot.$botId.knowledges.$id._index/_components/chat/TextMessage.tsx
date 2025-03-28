import React, { useRef, useState } from 'react';
import ToolDropdown from './ToolDropdown';
import { TextMessageResponse } from '~/@types/app';

interface TextMessageProps {
  response: TextMessageResponse;
  onDuplicate?: (id: string) => void;
  onDelete: (id: string) => void;
}

const TextMessage: React.FC<TextMessageProps> = ({ response, onDelete, onDuplicate }) => {
  const handleDelete = () => {
    onDelete?.(response.id);
  }

  const handleDuplicate = () => {
    onDuplicate?.(response.id);
  }

  const handleOpenModal = () => {
    const offcanvasId = `hs-offcanvas-${response.id}`;
    const offcanvas = document.getElementById(offcanvasId);
    if (offcanvas) {
      // Assuming you're using a library like HSOverlay
      // @ts-ignore
      window.HSOverlay.open(offcanvas);
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the clicked element is a link
    const isLink = (e.target as HTMLElement).tagName.toLowerCase() === 'a';

    if (!isLink) {
      e.preventDefault();
      handleOpenModal()
    }
  }

  return (
    <>
      <div className="space-y-1">
        <div
          className="group flex justify-start gap-x-2"
          style={{ wordBreak: "break-word" }}
        >
          <div
            className="order-1 bg-white shadow-xs inline-block rounded-xl pt-2 pb-1.5 px-2.5 cursor-pointer"
            onClick={handleClick}
          >
            <div className="text-sm text-gray-800">
              <FormatAnswer text={response.payload?.text} />
            </div>
          </div>
          <ToolDropdown
            index={0}
            onEditClick={handleOpenModal}
            onDuplicateClick={handleDuplicate}
            onDeleteClick={handleDelete}
          />
        </div>
      </div>
    </>
  );
};

export default TextMessage;

const FormatAnswer: React.FC<{ text: string }> = ({ text }) => {
  // Regular expression to detect URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  // Split the text into parts (alternating between regular text and URLs)
  const parts = text?.split(urlRegex);

  return parts?.map((part, index) => {
    if (part.match(urlRegex)) {
      // If the part is a URL, wrap it in an anchor tag
      return (
        <a key={index} target='_blank' className="break-all text-blue-600 underline" href={part}>
          {part}
        </a>
      );
    } else {
      // If it's regular text, replace newlines with <br/> tags
      return (
        <span key={index} dangerouslySetInnerHTML={{ __html: part.replace(/\n/g, '<br/>') }} />
      );
    }
  });
};