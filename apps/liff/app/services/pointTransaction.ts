import { PointTransaction } from "~/types/app";
import api from "./api";

/**
 * Fetch point transactions for a specific user
 * @param uid User ID to fetch transactions for
 */
export const fetchUserPointTransactions = ({ uid }: { uid: string }) =>
  api.get<PointTransaction[]>(`/point-transactions/user/${uid}`).then((res) => res.data);

/**
 * Fetch a specific point transaction by ID
 * @param id Transaction ID
 */
export const fetchPointTransaction = ({ id }: { id: string }) =>
  api.get<PointTransaction>(`/point-transactions/${id}`).then((res) => res.data);

/**
 * Create a new point transaction
 * @param data Transaction data to create
 */
export const createPointTransaction = (data: Partial<PointTransaction>) =>
  api.post(`/point-transactions`, data).then((res) => res.data);

/**
 * Update an existing point transaction
 * @param id Transaction ID to update
 * @param data Updated transaction data
 */
export const updatePointTransaction = (id: string, data: Partial<PointTransaction>) =>
  api.patch(`/point-transactions/${id}`, data).then((res) => res.data);

/**
 * Get point balance for a user
 * @param uid User ID to get balance for
 */
export const fetchUserPointBalance = ({ uid }: { uid: string }) =>
  api.get<{ balance: number }>(`/point-transactions/balance/${uid}`).then((res) => res.data);
