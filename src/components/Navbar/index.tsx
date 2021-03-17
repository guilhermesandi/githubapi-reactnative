import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import { Container, Page, TextInput } from './styles';

const Navbar: React.FC = () => {
  function searchLogin(login: string) {
    console.log(login);
  }

  return (
    <Container>
      <TouchableOpacity>
        <Icon name="dots-three-horizontal" size={32} color="#fff" />
      </TouchableOpacity>

      <Page>My Apps</Page>

      <TextInput onChangeText={text => searchLogin(text)} />
      <TouchableOpacity>
        <Icon name="magnifying-glass" size={32} color="#fff" />
      </TouchableOpacity>
    </Container>
  );
};

export default Navbar;
