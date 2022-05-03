import React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import ProfileComponent from '../components/ProfileComponent';
import HomeComponent from '../components/HomeComponent';
import {useSelector, useDispatch} from 'react-redux';
import {onIndexChange} from '../redux/bottomNavigationSlice';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;


const AppStack = () => {
  const dispatch = useDispatch();
  const index = useSelector(state => state.bottomNavigation.index);
  const routes = useSelector(state => state.bottomNavigation.routes);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    home: HomeComponent,
    profile: ProfileComponent,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={i => dispatch(onIndexChange(i))}
      renderScene={renderScene}
    />
  );
};

export default AppStack;
