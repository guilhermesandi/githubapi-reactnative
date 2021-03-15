import React from 'react';

import { Container } from './styles';

import Navbar from '../../components/Navbar';

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>Hello World!</Container>
    </>
  );
};

export default Dashboard;
