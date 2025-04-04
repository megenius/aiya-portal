import { Avatar } from '@repo/preline/Avatar';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { User } from '~/@types/app';
import { useFileDelete } from '~/hooks/useFileDelete';
import { useFileUpload } from '~/hooks/useFileUpload';
import useUpdateMe from '~/hooks/useUpdateMe';
import { getDirectusFileUrl } from '~/utils/files';

interface AvatarProps {
  user?: User
}

const AvatarUploader: React.FC<AvatarProps> = ({ user }) => {
  const { t } = useTranslation('profile');
  const updateMe = useUpdateMe();
  const fileUpload = useFileUpload();
  const fileDelete = useFileDelete();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatar, setAvatar] = useState(user?.avatar);

  const removeAvatar = useCallback(() => {
    if (user?.avatar) {
      setAvatar(null);
      updateMe.mutateAsync({ ...user, avatar: null }).then(() => {
        fileDelete.mutateAsync(user?.avatar as string);
      });
    }
  }, [user, updateMe]);

  const PreviewAvatar = () => {
    return avatar ?
      <Avatar src={getDirectusFileUrl(avatar as string)} size={80} />
      : <span className="flex shrink-0 justify-center items-center size-20 border-2 border-dotted border-gray-300 text-gray-400 rounded-full dark:border-neutral-700 dark:text-neutral-600">
        <svg
          className="shrink-0 size-7"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
          <circle cx={9} cy={9} r={2} />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      </span>
  };

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (user?.avatar) {
      await fileDelete.mutateAsync(user?.avatar as string);
    }

    fileUpload.mutateAsync(file, {
      onSuccess: (data) => {
        updateMe.mutateAsync({ ...user, avatar: data.id });
      },
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [user, updateMe]);

  useEffect(() => {
    if (user) {
      setAvatar(user.avatar);
    }
  }, [user]);
  
  return (
    <div className="py-6 sm:py-8 space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
      <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
        <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
          <label className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500">
            {t('avatar.label')}
          </label>
        </div>
        <div className="sm:col-span-8 xl:col-span-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <PreviewAvatar />
            <div className="grow">
              <div className="flex items-center gap-x-2">
                <label className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500 cursor-pointer">
                  <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileUpload} accept="image/*" disabled={fileUpload.isPending} />
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1={12} x2={12} y1={3} y2={15} />
                  </svg>
                  {fileUpload.isPending ? t('avatar.uploading') : t('avatar.upload')}
                </label>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-red-500 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-red-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  disabled={!!!user?.avatar}
                  onClick={removeAvatar}
                >
                  {t('avatar.delete')}
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500 dark:text-neutral-500">
                {t('avatar.help_text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarUploader;