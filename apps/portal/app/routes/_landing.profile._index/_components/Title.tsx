// Title.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Title: React.FC = () => {
  const { t } = useTranslation('profile');

  return (
    <div className="mb-4 xl:mb-8">
      <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
        {t('title')}
      </h1>
      <p className="text-sm text-gray-500 dark:text-neutral-500">
        {t('subtitle')}
      </p>
    </div>
  );
};

export default Title;