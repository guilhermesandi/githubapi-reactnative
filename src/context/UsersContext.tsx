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
