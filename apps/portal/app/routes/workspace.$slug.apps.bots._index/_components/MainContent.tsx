import React, { useState } from 'react';
import { Loading } from "@repo/preline"
import { BotTable } from './BotTable';
import PageFilter from './PageFilter';
import AddBot from './AddBot';
import { useNavigate } from '@remix-run/react';
import MainContainer from '~/components/MainContainer';
import { useBotInsert } from '~/hooks/bot/useBotInsert';
import { Bot, Workspace } from '~/@types/app';
import { randomHexString } from '~/utils/random';
import { useWorkspaceBots } from '~/hooks/workspace/useWorkspaceBots';

interface MainContentProps {
  workspace: Workspace
}

const MainContent: React.FC<MainContentProps> = ({ workspace }) => {
  const bots = useWorkspaceBots({ variables: { workspaceId: workspace?.id as string } });
  const insertBot = useBotInsert();
  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredItems = React.useMemo(() => {
    if (!searchValue) return bots.data?.items || [];

    const searchText = searchValue.toLowerCase().trim();

    return bots.data?.items.filter(bot => {
      return bot.name?.toLowerCase().includes(searchText);
    });
  }, [bots.data, searchValue]);

  const handleAddBot = (values) => {
    insertBot.mutateAsync({
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
        "bot_name": "",
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

  const handleRowClick = (item: Bot) => {
    navigate(`/apps/bot/${item.id}`)
  }

  if (bots.isPending) {
    return <Loading />
  }

  return (
    <>
      <MainContainer title="Bots" description="Manage your bots" button={{
        id: 'hs-add-bot',
        title: "Bot"
      }}>
        <PageFilter onChanged={handleSearchChange} />
        <BotTable bots={filteredItems} onRowClick={handleRowClick} />
      </MainContainer>

      <AddBot id='hs-add-bot' onOk={handleAddBot} />
    </>
  )
};

export default MainContent;
