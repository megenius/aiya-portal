import React from 'react';
import { ImageMessageResponse } from '~/@types/app';
import ToolDropdown from './ToolDropdown';
import Lightbox from "yet-another-react-lightbox";

interface ImageMessageProps {
  response: ImageMessageResponse
  onDuplicate?: (id: string) => void;
  onDelete: (id: string) => void;
}

const ImageMessage: React.FC<ImageMessageProps> = ({ response, onDelete, onDuplicate }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    const offcanvasId = `hs-offcanvas-${response.id}`;
    const offcanvas = document.getElementById(offcanvasId);
    if (offcanvas) {
      // Assuming you're using a library like HSOverlay
      // @ts-ignore
      window.HSOverlay.open(offcanvas);
    }
  }

  return (
    <>
      <div className="space-y-1">
        <div
          className="group flex justify-start gap-x-2"
          style={{ wordBreak: "break-word" }}
        >
          <div className="order-1 bg-white shadow-sm dark:bg-neutral-800 dark:border-neutral-700 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
            {response.id}
            <div className="text-sm text-gray-800 dark:text-neutral-200"
            >
              <img className="mb-2 rounded-lg cursor-pointer"
                src={response.payload.url} alt={response.payload.alt}
                onClick={() => handleOpenModal()}
              />
            </div>
          </div>
          <ToolDropdown
            index={0}
            onEditClick={() => {
              const offcanvasId = `hs-offcanvas-${response.id}`;
              const offcanvas = document.getElementById(offcanvasId);
              if (offcanvas) {
                // Assuming you're using a library like HSOverlay
                // @ts-ignore
                window.HSOverlay.open(offcanvas);
              }
            }}
            onDuplicateClick={() => onDuplicate?.(response.id)}
            onDeleteClick={() => onDelete?.(response.id)}
          />
        </div>
      </div>
    </>
  );
};

export default ImageMessage;