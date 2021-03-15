import React from 'react';
import {View, StatusBar} from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#7348a1" />
    <View style={{flex: 1, backgroundColor: '#ffffff'}} />
  </>
);

export default App;
