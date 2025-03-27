import React, { useEffect, useState } from 'react';
import { Loading } from "@repo/preline"
import { DataTable } from './DataTable';
import PageFilter from './PageFilter';
import AddFacebookAdsModal from './AddFacebookAdsModal';
import { useNavigate } from '@remix-run/react';
import MainContainer from '~/components/MainContainer';
import { useAds } from '~/hooks/adaccount/useAds';
import { useAdInsert } from '~/hooks/adaccount/useAdInsert';
import { AdApp, WorkspaceFacebookAdAccount, Workspace } from '~/@types/app';
import { randomHexString } from '~/utils/random';
import { useAdAccounts } from '~/hooks/adaccount/useAdAccounts';
import { useFacebookSDK } from '~/hooks/useFacebookSDK';
import { useAdAccountsInsert } from '~/hooks/adaccount/useAdAccountsInsert';
import { toast } from 'react-toastify';

interface MainContentProps {
  workspace: Workspace
}

const MainContent: React.FC<MainContentProps> = ({ workspace }) => {
  const { login, getAdAccounts } = useFacebookSDK({ appId: import.meta.env.VITE_FB_APP_ID });
  const adAccounts = useAdAccounts({ variables: { workspaceId: workspace?.id as string } });
  const insertAdAccounts = useAdAccountsInsert();
  const insertAd = useAdInsert();
  const navigate = useNavigate()
  const [ads, setAds] = useState<Array<WorkspaceFacebookAdAccount & { checked: boolean }>>([]);

  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredItems = React.useMemo(() => {
    if (!searchValue) return adAccounts.data?.items || [];

    const searchText = searchValue.toLowerCase().trim();

    return adAccounts.data?.items.filter(ad => {
      return ad.name?.toLowerCase().includes(searchText);
    });
  }, [adAccounts, searchValue]);

  const handleRowClick = (item: WorkspaceFacebookAdAccount) => {
    // if (item.last_synced) {
    navigate(`/apps/adaccount/${item.id}`)
    // }
  }

  const handleSync = () => {

    const scopes = [
      'email',
      'pages_show_list',
      'read_page_mailboxes',
      'pages_messaging',
      'pages_messaging_subscriptions',
      'pages_manage_metadata', //review
      'pages_read_user_content',
      'pages_manage_engagement', //review
      'public_profile',
      'instagram_basic',
      'instagram_manage_messages',
      //page insight
      'read_insights',
      'pages_read_engagement',
      // ads api
      'ads_read',
      'ads_management'
    ];

    login({
      scope: scopes.join(','),
    }).then((response) => {
      getAdAccounts(response.authResponse?.accessToken).then((accounts) => {
        setAds(accounts.map(acc => {
          return {
            name: acc.name,
            ad_account_id: acc.id,
            team: workspace.id,
            metadata: acc as any,
            access_token: response.authResponse?.accessToken,
            checked: adAccounts?.data?.items.find(ad => ad.ad_account_id === acc.id) ? true : false
          }
        }))

        const offcanvas = document.getElementById(`add-facebook-modal`);
        if (offcanvas) {
          window.HSOverlay.open(offcanvas as HTMLElement);
        }
      })
    })
  }

  const handleInsertFacebookAds = (selectedAds: WorkspaceFacebookAdAccount[]) => {
    const existingAds = adAccounts?.data?.items?.map(ad => ad.ad_account_id);
    selectedAds = selectedAds.filter(ad => !existingAds?.includes(ad.ad_account_id));
    insertAdAccounts.mutateAsync(selectedAds).then(() => {
      setTimeout(() => {
        toast.success('Successfully synced ad accounts')
      }, 1000);
    })
  }

  useEffect(() => {
    setTimeout(() => {
      window.HSOverlay.autoInit();
    }, 1000);
  }, []);

  if (adAccounts.isPending) {
    return <Loading />
  }

  return (
    <>
      <MainContainer
        title="Ad Bots"
        description="Manage your ad bots"
        button={
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center text-sm gap-x-1 font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            onClick={() => handleSync()}
          >
            <svg className="hidden sm:block shrink-0 size-3 me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" clipRule="evenodd" d="M8 1C8.55228 1 9 1.44772 9 2V7L14 7C14.5523 7 15 7.44771 15 8C15 8.55228 14.5523 9 14 9L9 9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V9.00001L2 9.00001C1.44772 9.00001 1 8.5523 1 8.00001C0.999999 7.44773 1.44771 7.00001 2 7.00001L7 7.00001V2C7 1.44772 7.44772 1 8 1Z" />
            </svg>
            <span className="hidden sm:block">Add</span>Ad Bot
          </button>
        }>
        <PageFilter onChanged={handleSearchChange} />
        {insertAdAccounts.isPending && <Loading />}
        <DataTable items={filteredItems}
          onRowClick={handleRowClick}
        />
      </MainContainer>

      <AddFacebookAdsModal id='add-facebook-modal' ads={ads} onOk={(selectedAds) => {
        handleInsertFacebookAds(selectedAds)
      }} />

    </>
  )
};

export default MainContent;
