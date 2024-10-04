import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useLineProfile } from '~/hooks/useLineProfile';
import { PageLiff } from '~/types/page';

interface LayoutBuilderProps {
  page: PageLiff
}

const LayoutBuilder: React.FC<LayoutBuilderProps> = ({ page }) => {
  const { register } = useFormContext()
  const { data: profile } = useLineProfile();

  return (
    <>
      <div className={`flex flex-col`}>
        {page?.metadata?.layout?.showProfile && (
          <div className="flex flex-col items-center gap-3">
            <div>
              <img src={profile?.pictureUrl} alt="Profile" className="w-20 h-20 rounded-full" />
            </div>
            <div>{profile?.displayName}</div>
          </div>
        )}
        <div className="flex-grow overflow-y-auto px-4 py-6">
          <div className="max-w-sm space-y-3 mx-auto px-2">
            {page?.metadata?.layout?.form?.fields.map((field, index) => {
              return (
                <input
                  key={field.name}
                  type={field.type}
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder={field.label}
                  required={field.required}
                  {...register(field.name)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
};

export default LayoutBuilder;