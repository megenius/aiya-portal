import React from 'react';

interface ProductsProps {

}

const Products: React.FC<ProductsProps> = () => {
  return (
    <>
      {/* Categories */}
      <div className="w-full max-w-[85rem] mt-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mb-3 sm:mb-6 lg:mb-10 max-w-md mx-auto text-center">
          <h2 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-neutral-200">
            The better way to shop with Preline top-products
          </h2>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card */}
          <div className="relative group bg-white border border-gray-200 rounded-xl hover:shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
            <div className="h-80 grid grid-cols-5">
              <div className="col-span-3 p-1 pe-0">
                <img
                  className="w-full h-[calc(20rem-8px)] bg-gray-100 object-cover rounded-lg dark:bg-neutral-800"
                  src="https://images.unsplash.com/photo-1699595749116-33a4a869503c?q=80&w=560&h=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Category Image"
                />
              </div>
              <div className="col-span-2 p-1 space-y-1">
                <img
                  className="w-full h-[calc(10rem-6px)] bg-gray-100 object-cover rounded-lg dark:bg-neutral-800"
                  src="https://images.unsplash.com/photo-1699593022913-7068606059c8?q=80&w=560&h=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Category Image"
                />
                <img
                  className="w-full h-[calc(10rem-6px)] bg-gray-100 object-cover rounded-lg dark:bg-neutral-800"
                  src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=560&h=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Category Image"
                />
              </div>
            </div>
            {/* Body */}
            <div className="p-6 text-center">
              <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                Nike Shoes
              </h4>
              <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                Starting from $99
              </p>
              <p className="mt-3">
                <span className="inline-flex items-center gap-x-1.5 text-sm text-gray-800 underline underline-offset-4 group-hover:text-indigo-600 group-focus:text-indigo-600 dark:text-neutral-200 dark:group-hover:text-indigo-400 dark:group-focus:text-indigo-400">
                  View all
                </span>
              </p>
            </div>
            {/* End Body */}
            <a
              className="after:absolute after:inset-0 after:z-10"
              href="../../pro/shop/listing-grid.html"
            />
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="relative group bg-white border border-gray-200 rounded-xl hover:shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
            <div className="h-80 grid grid-cols-5">
              <div className="col-span-3 p-1 pe-0">
                <img
                  className="w-full h-[calc(20rem-8px)] bg-gray-100 object-cover rounded-lg dark:bg-neutral-800"
                  src="https://images.unsplash.com/photo-1708443683276-8a3eb30faef2?q=80&w=560&h=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Category Image"
                />
              </div>
              <div className="col-span-2 p-1 space-y-1">
                <img
                  className="w-full h-[calc(10rem-6px)] bg-gray-100 object-cover rounded-lg dark:bg-neutral-800"
                  src="https://images.unsplash.com/photo-1627225924765-552d49cf47ad?q=80&w=560&h=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Category Image"
                />
                <img
                  className="w-full h-[calc(10rem-6px)] bg-gray-100 object-cover rounded-lg dark:bg-neutral-800"
                  src="https://images.unsplash.com/photo-1708443683198-a2b77a54c36e?q=80&w=560&h=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Category Image"
                />
              </div>
            </div>
            {/* Body */}
            <div className="p-6 text-center">
              <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                Men's Clothing
              </h4>
              <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                Starting from $39
              </p>
              <p className="mt-3">
                <span className="inline-flex items-center gap-x-1.5 text-sm text-gray-800 underline underline-offset-4 group-hover:text-indigo-600 group-focus:text-indigo-600 dark:text-neutral-200 dark:group-hover:text-indigo-400 dark:group-focus:text-indigo-400">
                  View all
                </span>
              </p>
            </div>
            {/* End Body */}
            <a
              className="after:absolute after:inset-0 after:z-10"
              href="../../pro/shop/listing-grid.html"
            />
          </div>
          {/* End Card */}

        </div>
        {/* Grid */}
      </div>
      {/* End Categories */}
    </>
  );
};

export default Products;