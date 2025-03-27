import React from 'react';
import { MoreHorizontal, Edit, Download } from 'lucide-react';
import { Product } from '~/@types/app';

interface ProductTableRowProps {
  item: Product;
}

const ProductTableRow: React.FC<ProductTableRowProps> = ({ item }) => {
  return (
    <tr>
      <SelectionCell />
      <ProductInfoCell item={item} />
      <CategoryCell category={item.category} />
      <ToggleCell />
      <SKUCell sku={item.sku} />
      <PriceCell price={item.price} />
      <AvailabilityCell inStore={item.inStore} online={item.online} />
      <ActionsCell />
    </tr>
  );
};

const SelectionCell: React.FC = () => (
  <td className="size-px whitespace-nowrap ps-3 py-4">
    <Checkbox />
  </td>
);

interface ProductInfoCellProps {
  item: Pick<Product, 'title' | 'image'>;
}

const ProductInfoCell: React.FC<ProductInfoCellProps> = ({ item }) => (
  <td className="size-px whitespace-nowrap px-4 py-3">
    <div className="w-full flex items-center gap-x-3">
      <img
        className="shrink-0 size-12 rounded-md"
        src={item.image}
        alt="Product Image"
      />
      <div className="grow">
        <a
          className="text-sm font-medium text-stone-800 hover:text-green-600 decoration-2 hover:underline focus:outline-hidden focus:underline focus:text-green-600 dark:text-neutral-200 dark:hover:text-green-500 dark:focus:text-green-500"
          href="#"
        >
          {item.title}
        </a>
      </div>
    </div>
  </td>
);

interface CategoryCellProps {
  category: string;
}

const CategoryCell: React.FC<CategoryCellProps> = ({ category }) => (
  <td className="size-px whitespace-nowrap px-4 py-3">
    <span className="text-sm text-stone-600 dark:text-neutral-400">
      {category}
    </span>
  </td>
);

const ToggleCell: React.FC = () => (
  <td className="size-px whitespace-nowrap px-4 py-3">
    <div className="flex justify-between items-center">
      <div className="relative inline-block">
        <input
          type="checkbox"
          id="hs-pro-epts1"
          className="relative w-[35px] h-[21px] bg-stone-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-900 before:inline-block before:size-4 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow-sm before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
        />
      </div>
    </div>
  </td>
);

interface SKUCellProps {
  sku?: string;
}

const SKUCell: React.FC<SKUCellProps> = ({ sku }) => (
  <td className="size-px whitespace-nowrap px-4 py-3">
    <span className="text-sm text-stone-600 dark:text-neutral-400">
      {sku}
    </span>
  </td>
);

interface PriceCellProps {
  price?: string;
}

const PriceCell: React.FC<PriceCellProps> = ({ price }) => (
  <td className="size-px whitespace-nowrap px-4 py-3">
    <span className="text-sm text-stone-600 dark:text-neutral-400">
      {price}
    </span>
  </td>
);

interface AvailabilityCellProps {
  inStore: boolean;
  online: boolean;
}

const AvailabilityCell: React.FC<AvailabilityCellProps> = ({ inStore, online }) => (
  <td className="size-px whitespace-nowrap px-4 py-3">
    <div className="flex flex-wrap gap-1">
      {inStore && (
        <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
          🛍️ In store
        </span>
      )}
      {online && (
        <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
          🌐 Online
        </span>
      )}
    </div>
  </td>
);

const ActionsCell: React.FC = () => (
  <td className="size-px whitespace-nowrap px-4 py-3">
    <div className="inline-flex items-center -space-x-px">
      {/* <Button variant="outline" size="icon">
        <Edit className="h-4 w-4" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Download className="mr-2 h-4 w-4" />
            <span>Download</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  </td>
);

export default ProductTableRow;