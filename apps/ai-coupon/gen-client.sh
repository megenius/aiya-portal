#!/bin/bash

# Create directories
mkdir -p app/lib app/hooks app/@types

# Create directusClient.ts
cat << EOF > app/lib/directusClient.ts
import axios, { AxiosInstance, AxiosError } from 'axios';
import { AuthTokens, User } from '../@types/directus';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

class DirectusClient {
  private axiosInstance: AxiosInstance;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
    });

    // Add interceptors and other methods here
  }

  // Implement login, logout, refreshAccessToken, and CRUD methods here
}

const directusClient = new DirectusClient();
export default directusClient;
EOF

# Create useAuth.ts
cat << EOF > app/hooks/useAuth.ts
import { useState, useEffect, useCallback } from 'react';
import directusClient from '../lib/directusClient';
import { User } from '../@types/directus';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Implement useAuth logic here

  return { user, login, logout, loading };
}
EOF

# Create useItems.ts
cat << EOF > app/hooks/useItems.ts
import { useState, useEffect, useCallback } from 'react';
import directusClient from '../lib/directusClient';

export function useItems<T>(collection: string) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Implement useItems logic here

  return { items, loading, error, fetchItems, createItem, updateItem, deleteItem };
}
EOF

# Create directus.d.ts
cat << EOF > app/@types/directus.d.ts
export interface User {
  id: string;
  email: string;
  role: string;
}

export interface AuthTokens {
  access_token: string;
  expires: number;
  refresh_token?: string;
}

// Add other interfaces as needed
EOF

echo "Directus client files have been created successfully!"