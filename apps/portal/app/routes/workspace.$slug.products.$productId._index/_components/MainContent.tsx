import React, { useState } from 'react';
import { Loading } from "@repo/preline"
import PageFilter from './PageFilter';
import AddProduct from './AddProduct';
import { useNavigate, useParams } from '@remix-run/react';
import MainContainer from '~/components/MainContainer';
import { Product, Workspace } from '~/@types/app';
import { randomHexString } from '~/utils/random';
import ProductDetail from './ProductDetail';
import { useProduct } from '~/hooks/ecommerce/useProduct';
import { useProductUpdate } from '~/hooks/ecommerce/useProductUpdate';
import { toast } from 'react-toastify';

interface MainContentProps {
  workspace: Workspace
}

const MainContent: React.FC<MainContentProps> = ({ workspace }) => {
  const { productId } = useParams()
  const { data: item, isLoading } = useProduct({ id: productId })
  const updateProduct = useProductUpdate();

  const handleOnSave = (values: any) => {
    console.log(values);
    updateProduct.mutateAsync({
      ...values,
      id: productId
    }).then(res => {
      toast.success('Product updated successfully')
    })
  }

  if (!item) {
    return <Loading />
  }

  return (
    <>
      <ProductDetail item={item} onSave={handleOnSave} />
    </>
  )
};

export default MainContent;
