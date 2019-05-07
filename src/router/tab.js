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
    My: {
      screen: My,
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
