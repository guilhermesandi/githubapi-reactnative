import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import Navbar from '../../components/Navbar';

import { Container, User, Avatar, Login, UserInfo, Info } from './styles';

interface User {
  id: number;
  avatar_url: string;
  login: string;
  followers: number;
  following: number;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  // async function getFollowersUser(login: string): Promise<string> {
  //   const response = await api.get(`/${login}`);

  //   const followers = response.data.followers;
  //   console.log(followers);

  //   return followers;
  // }

  useEffect(() => {
    api.get('').then(response => {
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <Navbar />

      <Container>
        <User>
          <Avatar
            source={{
              uri: 'https://avatars.githubusercontent.com/u/38008649?v=4',
            }}
          />
          <UserInfo>
            <Login>guilhermesandi</Login>
            <Info>followers 7 | following 11</Info>
          </UserInfo>
        </User>

        {users.map(user => (
          <User key={user.id}>
            <Avatar
              source={{
                uri: user.avatar_url,
              }}
            />
            <UserInfo>
              <Login>{user.login}</Login>
              <Info>
                followers {user.followers} | following {user.following}
              </Info>
            </UserInfo>
          </User>
        ))}
      </Container>
    </>
  );
};

export default Dashboard;
