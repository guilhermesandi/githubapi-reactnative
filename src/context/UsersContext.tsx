import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

interface UsersContextData {
  users: User[];
  searchLogin: string;
  setUsers: () => void;
  setSearchLogin: (login: string) => void;
}

interface User {
  id: number;
  avatar_url: string;
  login: string;
  following: number;
  followers: number;
}

export const UsersContext = createContext({} as UsersContextData);

export default function UsersProvider({ children }) {
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
        setUsers,
        setSearchLogin,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
