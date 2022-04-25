import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {Provider as PaperProvider} from 'react-native-paper';
import {useSelector} from 'react-redux';

const Routes = () => {
  const user = useSelector(state => state.user.user);
  console.log(user);
  return (
    <NavigationContainer>
      <PaperProvider>{user ? <AppStack /> : <AuthStack />}</PaperProvider>
    </NavigationContainer>
  );
};

export default Routes;
