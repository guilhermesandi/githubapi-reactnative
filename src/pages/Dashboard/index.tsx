import React from 'react';

import { Container, User, Avatar, Login, UserInfo, Info } from './styles';

import Navbar from '../../components/Navbar';

const Dashboard: React.FC = () => {
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
      </Container>
    </>
  );
};

export default Dashboard;
