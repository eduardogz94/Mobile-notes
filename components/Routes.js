import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home'

import NewNote from './Notes/NewNote'

export const Index = createStackNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
        title:'Notes'
    }
  }
});

export const Noting = createStackNavigator({
  Note: {
    screen: NewNote,
    navigationOptions: {
      title: 'Add Notes'
    }
  }
});

export const UserStack = createBottomTabNavigator(
  {
    Home:Index,
    Note:Noting
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName == 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        }
        else if (routeName == 'Note') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'gray',
    },
  }
);
