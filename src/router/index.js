import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from '../views/Login/index';
import Home from '../views/Home/index';
import Mine from '../views/Mine/index';

const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: '首页',
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return <Ionicons name={'ios-home'} size={25} style={{ color: tintColor }} />;
        },
      },
    },
    Mine: {
      screen: Mine,
      navigationOptions: {
        title: '我的',
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return <Ionicons name={'logo-octocat'} size={25} style={{ color: tintColor }} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: BottomNavigator,
      navigationOptions: () => ({
        title: '首页',
        headerBackTitle: null,
      }),
    },
  },
  {
    headerMode: 'none',
  },
);

const LoginNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        title: '登录',
        headerBackTitle: null,
      }),
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    headerLayoutPreset: 'center',
  },
);
const App = createSwitchNavigator(
  {
    LoginNavigator,
    AppNavigator,
  },
  {
    initialRouteName: 'LoginNavigator',
  },
);

//导航注册
export default createAppContainer(App);
