import React, { useState, useCallback } from "react";
import { Loading } from "@repo/preline";
import { VoucherTable } from "./VoucherTable";
import PageFilter from "./PageFilter";
import { useNavigate } from "@remix-run/react";
import MainContainer from "~/components/MainContainer";
import { Workspace } from "~/@types/app";
import { useWorkspaceLiffPages } from "~/hooks/workspace/useWorkspaceLiffPages";
import { components } from "~/@types/directus";

type PageLiff = components["schemas"]["ItemsPagesLiff"];

interface MainContentProps {
  workspace: Workspace;
}


const MainContent: React.FC<MainContentProps> = ({ workspace }) => {
  const liffPages = useWorkspaceLiffPages({
    variables: { workspaceId: workspace?.id as string },
  });
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [statusValue, setStatusValue] = useState("published");

  const handleSearch = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const handleStatusFilter = useCallback((value: string) => {
    setStatusValue(value);
  }, []);

  const handleSelectLiffPage = useCallback((page: PageLiff) => {
    navigate(`/apps/voucher/${page.id}/dashboard`);
  }, [navigate]);

  const filteredPages = liffPages.data?.filter((page) => {
    const matchesSearch = page.name?.toLowerCase().includes(searchValue.toLowerCase()) ?? false;
    const matchesStatus = statusValue === "" || page.status === statusValue;
    return matchesSearch && matchesStatus;
  }) || [];

  return (
    <MainContainer>
      <div className="mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Vouchers</h1>
          <p className="text-gray-600">
            Manage your LIFF voucher applications
          </p>
        </div>
      </div>

      <PageFilter onSearchChange={handleSearch} onStatusChange={handleStatusFilter} />

      <div className="mt-6">
        {liffPages.isLoading ? (
          <Loading />
        ) : (
          <VoucherTable
            pages={filteredPages}
            onSelectPage={handleSelectLiffPage}
          />
        )}
      </div>

    </MainContainer>
  );
};

export default MainContent;