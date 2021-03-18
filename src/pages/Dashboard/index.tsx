import React, { useContext } from 'react';
import { ScrollView } from 'react-native';

import Navbar from '../../components/Navbar';

import { Container, User, Avatar, Login, UserInfo, Info } from './styles';
import { UsersContext } from '../../context/UsersContext';

const Dashboard: React.FC = () => {
  const { users, searchLogin } = useContext(UsersContext);

  return (
    <>
      <Navbar />

      <ScrollView>
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

          {users
            .filter(user => {
              if (searchLogin === '') {
                return user;
              } else if (
                user.login.toLowerCase().includes(searchLogin.toLowerCase())
              ) {
                return user;
              }
            })
            .map(user => (
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
      </ScrollView>
    </>
  );
};

export default Dashboard;
