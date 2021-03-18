import React from 'react';
import { View, StatusBar } from 'react-native';

import Dashboard from './pages/Dashboard';

import UsersProvider from './context/UsersContext';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#7348a1" />
    <UsersProvider>
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Dashboard />
      </View>
    </UsersProvider>
  </>
);

export default App;
