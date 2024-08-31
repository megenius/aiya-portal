import { Hono } from 'hono';
import { getAdminDirectusClient } from '../config/directus';
import { readUsers } from '@directus/sdk';

const adminRoutes = new Hono();

adminRoutes.get('/users', async (c) => {
  try {
    const directus = getAdminDirectusClient();
    const users = await directus.request(readUsers());
    return c.json(users);
  } catch (error) {
    return c.json({ error: 'Failed to fetch users' }, 500);
  }
});

export { adminRoutes };