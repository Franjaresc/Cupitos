import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import {Provider as PaperProvider} from 'react-native-paper';

const Routes = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <AuthStack />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default Routes;
