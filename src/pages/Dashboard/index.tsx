import React from 'react';

import { Container, Repositories, Avatar } from './styles';

import Navbar from '../../components/Navbar';
import { Text, View } from 'react-native';

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />

      <Container>
        <Repositories>
          <Avatar
            source={{
              uri: 'https://avatars.githubusercontent.com/u/38008649?v=4',
            }}
          />
          <View>
            <Text>Login</Text>
            <Text>Quantidade de seguindores</Text>
            <Text>Quantidade de Seguindo</Text>
          </View>
        </Repositories>
      </Container>
    </>
  );
};

export default Dashboard;
