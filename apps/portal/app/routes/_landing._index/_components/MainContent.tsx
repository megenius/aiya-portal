import React, { useState } from 'react';
import { Loading } from "@repo/preline"
import { WorkspaceTable } from './WorkspaceTable';
import MainContainer from '~/components/MainContainer';
import PageFilter from './PageFilter';
import AddWorkspace from './AddWorkspace';
import { useMe } from '~/hooks/useMe';
import { useNavigate } from '@remix-run/react';
import { Workspace } from '~/@types/app';
import { useWorkspaceInsert, useWorkspaces } from '~/hooks/workspace';
interface MainContentProps {

}

const MainContent: React.FC<MainContentProps> = () => {
  const { data: currentUser } = useMe()
  const workspaces = useWorkspaces();
  const insertWorkspace = useWorkspaceInsert();
  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredItems = React.useMemo(() => {
    if (!searchValue) return workspaces.data?.items || [];

    const searchText = searchValue.toLowerCase().trim();

    return workspaces.data?.items.filter(bot => {
      return bot.name?.toLowerCase().includes(searchText);
    });
  }, [workspaces.data, searchValue]);

  const handleAddWorkspace = (values) => {
    insertWorkspace.mutateAsync({
      ...values,
      type: "demo",
      date_created: new Date(),
      date_updated: new Date(),
      users: [{ user_id: currentUser, role: 'administrator' }]
    }).then((res) => {
      // Show toast or something
      console.log(res)
    })
  }

  const handleRowClick = (item: Workspace) => {
    navigate(`/workspace/${item.slug}`)
  }

  if (workspaces.isPending) {
    return <Loading />
  }

  return (
    <>
      <MainContainer title="Workspaces" description="Manage your workspaces" button={{
        id: 'hs-add-workspace',
        title: "Workspace"
      }}>
        <PageFilter onChanged={handleSearchChange} />
        <WorkspaceTable workspaces={filteredItems} onRowClick={handleRowClick} />
      </MainContainer>

      <AddWorkspace id='hs-add-workspace' onOk={handleAddWorkspace} />
    </>
  )
};

export default MainContent;
