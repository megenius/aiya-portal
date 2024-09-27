import React, { useState } from 'react';
import { Loading } from "@repo/preline"
import PageFilter from './PageFilter';
import AddProduct from './AddProduct';
import { useNavigate } from '@remix-run/react';
import MainContainer from '~/components/MainContainer';
import { useProductInsert } from '~/hooks/ecommerce/useProductInsert';
import { Product, Workspace } from '~/@types/app';
import { randomHexString } from '~/utils/random';
import { useWorkspaceProducts } from '~/hooks/workspace/';
import ProductTable from './ProductTable';

interface MainContentProps {
  workspace: Workspace
}

const MainContent: React.FC<MainContentProps> = ({ workspace }) => {
  const products = useWorkspaceProducts({ variables: { workspaceId: workspace?.id as string } });
  const insertProduct = useProductInsert();
  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredItems = React.useMemo(() => {
    if (!searchValue) return products.data?.items || Array<Product>();

    const searchText = searchValue.toLowerCase().trim();

    return products.data?.items.filter(product => {
      return product.name?.toLowerCase().includes(searchText);
    });
  }, [products.data, searchValue]);

  const handleAddProduct = (values) => {
    insertProduct.mutateAsync({
      ...values,
      // id: randomHexString(10),
      // slug: randomHexString(8),
      date_created: new Date(),
      date_updated: new Date(),
      team: workspace.id,
    }).then((product) => {
      navigate(`./${product.id}`)
    })
  }

  const handleRowClick = (item: Product) => {
    // navigate(`/apps/product/${item.id}`)
  }

  if (products.isPending) {
    return <Loading />
  }

  return (
    <>
      <MainContainer title="Products" description="Manage your products"
        button={
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center text-sm gap-x-1 font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-hs-overlay={`#hs-add-product`}
          >
            <svg className="hidden sm:block flex-shrink-0 size-3 me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" clipRule="evenodd" d="M8 1C8.55228 1 9 1.44772 9 2V7L14 7C14.5523 7 15 7.44771 15 8C15 8.55228 14.5523 9 14 9L9 9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V9.00001L2 9.00001C1.44772 9.00001 1 8.5523 1 8.00001C0.999999 7.44773 1.44771 7.00001 2 7.00001L7 7.00001V2C7 1.44772 7.44772 1 8 1Z" />
            </svg>
            <span className="hidden sm:block">Add</span>Product
          </button>
        }
      >
        <PageFilter onChanged={handleSearchChange} />
        {/* <ProductTable products={filteredItems} onRowClick={handleRowClick} /> */}
        <ProductTable items={filteredItems} />
      </MainContainer>

      <AddProduct id='hs-add-product' onOk={handleAddProduct} />
    </>
  )
};

export default MainContent;
