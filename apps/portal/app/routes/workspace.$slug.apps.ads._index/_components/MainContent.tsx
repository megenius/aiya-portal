import React, { useState } from 'react';
import { Loading } from "@repo/preline"
import { DataTable } from './DataTable';
import PageFilter from './PageFilter';
import AddModal from './AddModal';
import { useNavigate } from '@remix-run/react';
import MainContainer from '~/components/MainContainer';
import { useAds } from '~/hooks/adaccount/useAds';
import { useAdInsert } from '~/hooks/adaccount/useAdInsert';
import { AdApp, FacebookAdAccount, Workspace, WorkspaceFacebookAdAccount } from '~/@types/app';
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
  const adAccountsInsert = useAdAccountsInsert();
  const insertAd = useAdInsert();
  const navigate = useNavigate()

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

  const handleRowClick = (item: FacebookAdAccount) => {
    if (item.last_synced) {
      navigate(`/apps/adaccount/${item.id}`)
    }
  }

  const handleSync = () => {
    const configId = "1241725043635802"
    login({
      config_id: configId,
    }).then((response) => {
      getAdAccounts(response.authResponse?.accessToken).then((accounts) => {
        const newItems = accounts.filter(acc => {
          return !adAccounts.data?.items.find(item => item.ad_account_id === acc.id)
        }).map(acc => {
          const data: FacebookAdAccount = {
            name: acc.name,
            ad_account_id: acc.id,
            team: workspace.id,
            metadata: acc as any,
            access_token: response.authResponse?.accessToken
          }
          return data
        }) as WorkspaceFacebookAdAccount[]

        if (newItems.length > 0) {
          adAccountsInsert.mutateAsync(newItems).then((res) => {
            toast.success('Successfully synced ad accounts')
          })
        } else {
          toast.success('Successfully synced ad accounts')
        }
      })
    })
  }

  if (adAccounts.isPending) {
    return <Loading />
  }

  return (
    <>
      <MainContainer
        title="Ad Accounts"
        description="Manage your ad accounts"
        button={
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center text-sm gap-x-1 font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => handleSync()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>
            Sync
          </button>
        }>
        <PageFilter onChanged={handleSearchChange} />
        <DataTable items={filteredItems}
          onRowClick={handleRowClick}
        />
      </MainContainer>

    </>
  )
};

export default MainContent;
