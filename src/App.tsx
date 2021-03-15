import React from 'react';
import { View, StatusBar } from 'react-native';

import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
    <StatusBar barStyle="light-content" backgroundColor="#7348a1" />
    <Dashboard />
  </View>
);

export default App;
