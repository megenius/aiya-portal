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
      <MainContainer title="Workspaces" description="Manage your workspaces"
        button={
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center text-sm gap-x-1 font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-hs-overlay={`#hs-add-workspace`}
          >
            <svg className="hidden sm:block flex-shrink-0 size-3 me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" clipRule="evenodd" d="M8 1C8.55228 1 9 1.44772 9 2V7L14 7C14.5523 7 15 7.44771 15 8C15 8.55228 14.5523 9 14 9L9 9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V9.00001L2 9.00001C1.44772 9.00001 1 8.5523 1 8.00001C0.999999 7.44773 1.44771 7.00001 2 7.00001L7 7.00001V2C7 1.44772 7.44772 1 8 1Z" />
            </svg>
            <span className="hidden sm:block">Add</span>Workspace
          </button>
        }
      >
        <PageFilter onChanged={handleSearchChange} />
        <WorkspaceTable workspaces={filteredItems} onRowClick={handleRowClick} />
      </MainContainer>

      <AddWorkspace id='hs-add-workspace' onOk={handleAddWorkspace} />
    </>
  )
};

export default MainContent;
