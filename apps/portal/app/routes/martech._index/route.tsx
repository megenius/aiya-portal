import { useSearchParams } from '@remix-run/react';
import React from 'react';
import { useRecentBeaconUsers } from '~/hooks/useRecentBeaconUsers';
import FullScreenBalls from './_components/FullScreenBalls';

const Route: React.FC = () => {
  const [search] = useSearchParams();
  const providerIds = search.get("provider_ids") || "";
  
  // Use our enhanced custom hook
  const { users, count, loading, error, hasMore, loadMore } = useRecentBeaconUsers({
    providerIds: providerIds ? providerIds.split(',') : [],
    timeWindowMinutes: 5,
    limit: 1000
  });

  if (loading && count === 0) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Render the FullScreenBalls component with user data
  return (
    <div className="w-full h-screen">
      {users.length > 0 ? (
        <FullScreenBalls users={users} />
      ) : (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Users with Beacon Events in Last 5 Minutes</h2>
          <p className="mb-4">Total users: {count}</p>
          
          <div className="p-4 bg-gray-100 rounded">
            No users with recent beacon events found
          </div>
        </div>
      )}
    </div>
  );
}

export default Route;