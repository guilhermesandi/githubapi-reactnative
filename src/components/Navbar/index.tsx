import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import { Container, IconEvil, InputView, Page, TextInput } from './styles';

const Navbar: React.FC = () => {
  function searchLogin(login: string) {
    console.log(login);
  }

  return (
    <>
      <Container>
        <TouchableOpacity>
          <Icon name="dots-three-horizontal" size={32} color="#fff" />
        </TouchableOpacity>

        <Page>My Apps</Page>

        <TouchableOpacity>
          <Icon name="magnifying-glass" size={32} color="#fff" />
        </TouchableOpacity>
      </Container>

      <InputView>
        <TextInput onChangeText={text => searchLogin(text)} />
        <TouchableOpacity>
          <IconEvil name="close" size={32} color="#000" />
        </TouchableOpacity>
      </InputView>
    </>
  );
};

export default Navbar;
