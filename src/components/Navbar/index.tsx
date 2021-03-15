import React from 'react';

import Icon from 'react-native-vector-icons/Entypo';

import { Container, Page } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Icon name="dots-three-horizontal" size={32} color="#fff" />
      <Page>My Apps</Page>
      <Icon name="magnifying-glass" size={32} color="#fff" />
    </Container>
  );
};

export default Navbar;
