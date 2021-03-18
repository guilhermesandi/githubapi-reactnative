import React, { createContext, ReactNode, useEffect, useState } from 'react';
import api from '../services/api';

interface UsersContextData {
  users: User[];
  searchLogin: string;
  setSearchLogin: (login: string) => void;
}

interface User {
  id: number;
  avatar_url: string;
  login: string;
  following: number;
  followers: number;
}

interface UsersProviderProps {
  children: ReactNode;
}

export const UsersContext = createContext({} as UsersContextData);

export default function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [searchLogin, setSearchLogin] = useState('');

  useEffect(() => {
    api.get('').then(response => {
      setUsers(response.data);
    });
  }, []);

  const getFollow = () => {
    users.map(async (user, index) => {
      const response = await api.get(`/${user.login}`);
      const data = await response.data;

      users[index].followers = data.followers;
      users[index].following = data.following;
    });
  };

  getFollow();

  return (
    <UsersContext.Provider
      value={{
        users,
        searchLogin,
        setSearchLogin,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
