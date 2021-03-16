import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: flex-start;
`;

export const User = styled.View`
  margin: 16px;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
`;

export const UserInfo = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-left: 14px;
  margin-bottom: 5px;
`;

export const Login = styled.Text`
  font-size: 24px;
  font-weight: 700;
`;

export const Info = styled.Text`
  color: #b4b4b4;
`;
