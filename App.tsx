import React from 'react';
import { StatusBar, View } from 'react-native';
import { Home } from './src/Home';

function App() {
  return (
    <View>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Home />
    </View>
  );
}

export default App;
