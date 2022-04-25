import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {Provider as PaperProvider} from 'react-native-paper';
import store from '../redux/store';
import {Provider} from 'react-redux';

const Routes = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <AuthStack />
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default Routes;
