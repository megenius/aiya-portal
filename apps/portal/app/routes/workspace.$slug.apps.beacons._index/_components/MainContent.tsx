import React, { useState } from 'react';
import { Loading } from "@repo/preline"
import { DataTable } from './DataTable';
import PageFilter from './PageFilter';
import AddModal from './AddModal';
import { useNavigate } from '@remix-run/react';
import MainContainer from '~/components/MainContainer';
import { useAds } from '~/hooks/ad/useAds';
import { useAdInsert } from '~/hooks/ad/useAdInsert';
import { AdApp, Workspace } from '~/@types/app';
import { randomHexString } from '~/utils/random';

interface MainContentProps {
  workspace: Workspace
}

const MainContent: React.FC<MainContentProps> = ({ workspace }) => {
  const ads = useAds({ variables: { wid: workspace?.id as string } });
  const insertAd = useAdInsert();
  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredItems = React.useMemo(() => {
    if (!searchValue) return ads.data?.items || [];

    const searchText = searchValue.toLowerCase().trim();

    return ads.data?.items.filter(ad => {
      return ad.name?.toLowerCase().includes(searchText);
    });
  }, [ads.data, searchValue]);

  const handleAddModal = (values) => {
    insertAd.mutateAsync({
      ...values,
      id: randomHexString(10),
      slug: randomHexString(8),
      date_created: new Date(),
      date_updated: new Date(),
      team: workspace.id,
      status: 'Draft',
      metadata: {
        "basic": {},
        "enabled": 1,
        "ad_name": "",
        "shop_info": {
          "api_key": "",
          "shop_url": "",
          "shop_name": "",
          "shop_type": "",
          "basic_info": {
            "tel": "",
            "email": "",
            "address": ""
          }
        }
      }
    }).then((res) => {
      // Show toast or something
      console.log(res)
    })
  }

  const handleRowClick = (item: AdApp) => {
    navigate(`/apps/beacon/${item.id}`)
  }

  if (ads.isPending) {
    return <Loading />
  }

  return (
    <>
      <MainContainer title="Locations" description="Manage your locations" button={{
        id: 'hs-add-location',
        title: "Location"
      }}>
        <PageFilter onChanged={handleSearchChange} />
        <DataTable items={filteredItems} onRowClick={handleRowClick} />
      </MainContainer>

      <AddModal id='hs-add-ad' onOk={handleAddModal} />
    </>
  )
};

export default MainContent;
