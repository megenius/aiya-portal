import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useBots } from '../hooks/useBots';
import { useAppSelector } from '../store';

export function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const login = useLogin();
  const { data: bots, isLoading: isLoadingBots } = useBots();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate({ email, password });
  };

  if (isAuthenticated) {
    return (
      <div>
        <h2>Welcome! You are logged in.</h2>
        {isLoadingBots ? (
          <p>Loading bots...</p>
        ) : (
          <ul>
            {bots?.data?.items?.map((bot: any) => (
              <li key={bot.id}>{bot.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={login.isLoading}>
        {login.isLoading ? 'Logging in...' : 'Log in'}
      </button>
      {login.isError && <p>Login failed. Please try again.</p>}
    </form>
  );
}