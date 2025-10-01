import { useState, useMemo } from "react";

interface Collector {
  userId: string;
  [key: string]: any;
}

interface PaginationData<T> {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  currentItems: T[];
  setCurrentPage: (page: number) => void;
}

/**
 * Hook to handle collector list pagination with memoization
 */
export const useCollectorPagination = <T extends Collector>(
  items: T[] | undefined,
  itemsPerPage: number = 10
): PaginationData<T> => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginationData = useMemo(() => {
    if (!items || items.length === 0) {
      return {
        totalPages: 0,
        startIndex: 0,
        endIndex: 0,
        currentItems: [] as T[],
      };
    }

    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    return {
      totalPages,
      startIndex,
      endIndex,
      currentItems,
    };
  }, [items, currentPage, itemsPerPage]);

  return {
    currentPage,
    setCurrentPage,
    ...paginationData,
  };
};
