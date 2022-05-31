import React from 'react';
import { BottomNavigation, Appbar } from 'react-native-paper';
import ProfileComponent from '../components/ProfileComponent';
import HomeComponent from '../components/HomeComponent';
import HistoryComponent from '../components/HistoryComponent';
import { useSelector, useDispatch } from 'react-redux';
import { onIndexChange } from '../redux/bottomNavigationSlice';
import { logout } from '../redux/userSlice';
import Styles from '../styles/Styles';



const AppStack = () => {
  const dispatch = useDispatch();
  const index = useSelector(state => state.bottomNavigation.index);
  const routes = useSelector(state => state.bottomNavigation.routes);

  const renderScene = BottomNavigation.SceneMap({
    history: HistoryComponent,
    home: HomeComponent,
    profile: ProfileComponent,
  });

  return (
    <>
      <Appbar.Header
        style={Styles.appbar}
      >
        <Appbar.Content title="Cupitos" subtitle={'Cupos seguros transportes seguros'} />
        <Appbar.Action icon="logout-variant" onPress={() => dispatch(logout())} />
      </Appbar.Header>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={i => dispatch(onIndexChange(i))}
        renderScene={renderScene}
        barStyle={Styles.bottomNavigation}
      />
    </>
  );
};

export default AppStack;
