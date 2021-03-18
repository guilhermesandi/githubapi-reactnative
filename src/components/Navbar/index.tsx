import React, { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import { UsersContext } from '../../context/UsersContext';

import { Container, IconEvil, InputView, Page, TextInput } from './styles';

const Navbar: React.FC = () => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const { setSearchLogin } = useContext(UsersContext);

  function openSearchBar() {
    setSearchBarOpen(true);
  }

  function closeSearchBar() {
    setSearchBarOpen(false);
    setSearchLogin('');
  }

  return (
    <>
      <Container>
        <TouchableOpacity>
          <Icon name="dots-three-horizontal" size={32} color="#fff" />
        </TouchableOpacity>

        <Page>My Apps</Page>

        <TouchableOpacity onPress={openSearchBar}>
          <Icon name="magnifying-glass" size={32} color="#fff" />
        </TouchableOpacity>
      </Container>

      {searchBarOpen && (
        <InputView>
          <TextInput onChangeText={text => setSearchLogin(text)} />
          <TouchableOpacity onPress={closeSearchBar}>
            <IconEvil name="close" size={32} color="#000" />
          </TouchableOpacity>
        </InputView>
      )}
    </>
  );
};

export default Navbar;
