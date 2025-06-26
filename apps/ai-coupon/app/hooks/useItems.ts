import { useState, useEffect, useCallback } from 'react';
import directusClient from '../lib/directusClient';

export function useItems<T>(collection: string) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Implement useItems logic here

  return { items, loading, error, fetchItems, createItem, updateItem, deleteItem };
}
