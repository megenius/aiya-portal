/**
 * Creates a mapping from category names to their IDs
 */
export function createCategoryNameToIdMap(categories: any[] = []) {
  return categories.reduce((acc, category) => {
    if (category.name?.en) {
      acc[category.name.en.toLowerCase()] = category.id;
    }
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Groups vouchers by their category
 */
export function groupVouchersByCategory(vouchers: any[] = []) {
  return vouchers.reduce((acc, voucher) => {
    const categoryName = voucher.voucher_brand_id?.metadata?.category?.name?.en?.toLowerCase() || 'other';
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(voucher);
    return acc;
  }, {} as Record<string, any[]>);
}

/**
 * Maps vouchers from category names to category IDs
 */
export function mapVouchersToCategoryIds(vouchersByCategory: Record<string, any[]>, categoryNameToId: Record<string, string>) {
  return Object.entries(vouchersByCategory).reduce((acc, [name, categoryVouchers]) => {
    const categoryId = categoryNameToId[name] || `unknown-${name}`;
    acc[categoryId] = categoryVouchers;
    return acc;
  }, {} as Record<string, any[]>);
}

/**
 * Gets filtered vouchers based on selected category
 */
export function getFilteredVouchers(
  selectedCategory: string, 
  allVouchers: any[], 
  vouchersByCategoryId: Record<string, any[]>
) {
  return selectedCategory === 'all' 
    ? allVouchers 
    : (vouchersByCategoryId[selectedCategory] || []);
}

/**
 * Filters brands based on selected category
 */
export function getFilteredBrands(
  selectedCategory: string, 
  allBrands: any[], 
  categoryNameToId: Record<string, string>
) {
  return selectedCategory === 'all'
    ? allBrands
    : allBrands.filter(brand => {
        const brandCategoryName = brand.metadata?.category?.name?.en?.toLowerCase();
        return categoryNameToId[brandCategoryName || ''] === selectedCategory;
      });
}

/**
 * Gets the display name for the current category
 */
export function getCurrentCategoryName(
  selectedCategory: string, 
  categories: any[]
) {
  return selectedCategory === 'all' 
    ? 'All Vouchers' 
    : (categories.find(cat => cat.id === selectedCategory)?.name.en || 'Category');
}
