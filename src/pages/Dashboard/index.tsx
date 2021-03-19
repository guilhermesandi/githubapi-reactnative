import React, { useContext } from 'react';
import { ScrollView } from 'react-native';

import Navbar from '../../components/Navbar';

import { Container, User, Avatar, Login, UserInfo, Info } from './styles';
import { UsersContext } from '../../context/UsersContext';

const Dashboard: React.FC = () => {
  const { users, searchLogin } = useContext(UsersContext);

  const filteredData = users.filter(user => {
    if (searchLogin === '') {
      return user;
    } else if (user.login.toLowerCase().includes(searchLogin.toLowerCase())) {
      return user;
    }
  });

  return (
    <>
      <Navbar />

      <ScrollView>
        <Container>
          {filteredData.map(user => (
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
