import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreens from './router';

const App = () => {

  return (
    <NavigationContainer>
        <MainScreens />
    </NavigationContainer>
  );
};

export default App;
