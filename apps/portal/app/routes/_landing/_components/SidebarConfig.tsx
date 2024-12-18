import { Layout, User, ArrowUpCircle, CreditCard, Gift, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SidebarLink {
  to: string;
  label: JSX.Element | string;
  icon: JSX.Element | null;
  subLinks?: SidebarLink[];
  isDivider?: boolean;
}

export const useSidebarLinks = (): SidebarLink[] => {
  const { t } = useTranslation('common');

  return [
    {
      to: "/",
      label: t('sidebar.workspaces'),
      icon: <Layout className="flex-shrink-0 mt-0.5 size-4 dark:text-blue-500 active:text-blue-600" />,
    },
    {
      to: "/profile",
      label: t('sidebar.my_account'),
      icon: <User className="flex-shrink-0 mt-0.5 size-4" />,
    },
    {
      to: "/plans",
      label: (
        <span className="bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-600 to-80% text-transparent dark:from-blue-500 dark:to-purple-500">
          {t('sidebar.plans')}
        </span>
      ),
      icon: <ArrowUpCircle className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" />,
    },
    {
      to: "/billing",
      label: t('sidebar.billing'),
      icon: <CreditCard className="flex-shrink-0 mt-0.5 size-4" />,
    },
    {
      to: "/credits",
      label: t('sidebar.credits'),
      icon: <Gift className="flex-shrink-0 mt-0.5 size-4" />,
    },
    {
      to: "/affiliates",
      label: t('sidebar.affiliates'),
      icon: <DollarSign className="flex-shrink-0 mt-0.5 size-4" />,
    },
  ];
};