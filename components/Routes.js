import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home'

import LoginForm from './Auth/Login'
import SignupForm from './Auth/Signup'

export const Index = createStackNavigator({
    Home:{
      screen:Home,
      navigationOptions:{
          title:'Railstagram'
      }
    }
});

export const Login = createStackNavigator({
    Login:{
      screen:LoginForm
    }
});

export const Signup = createStackNavigator({
    Signup:{
      screen:SignupForm
    }
});

export const UserStack = createBottomTabNavigator(
  {
    Home:Index,
    // Profile:User (NUEVA NOTA)
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName == 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } 
        // else if (routeName === 'Profile') {
        //   iconName = `ios-contact${focused ? '' : '-outline'}`;
        // }

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
