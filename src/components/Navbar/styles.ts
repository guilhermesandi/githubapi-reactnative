import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/EvilIcons';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: #7348a1;

  padding: 10px 16px;
`;

export const Page = styled.Text`
  color: #fff;

  font-size: 24px;
`;

export const InputView = styled.View`
  position: absolute;
  width: 100%;
  top: 0;

  flex-direction: row;
  align-items: center;
`;

export const IconEvil = styled(Icon)`
  margin: 14px;
`;

export const TextInput = styled.TextInput`
  background: #fff;
  color: #000;
  border-radius: 5px;
  width: 100%;
  padding-left: 60px;

  position: absolute;

  font-size: 18px;
`;
