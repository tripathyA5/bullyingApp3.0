import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import RequestScreen from '../screens/RequestScreen';
import LawsScreen from '../screens/LawsScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CustomSideBarMenu from './CustomSideBarMenu'
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  HomeScreen : {
    screen : HomeScreen,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
  LawsScreen : {
    screen : LawsScreen,
    navigationOptions:{
      drawerIcon : <Icon name="gift" type ="font-awesome" />,
      drawerLabel : "My Donations"
    }
  },
  RequestScreen: {
    screen : RequestScreen,
    navigationOptions:{
      drawerIcon : <Icon name="bell" type ="font-awesome" />,
      drawerLabel : "Notifications"
    }
  },

  Login : {
    screen : LoginScreen,
    navigationOptions:{
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "Settings"
    }
  }
},
{
    contentComponent : CustomSideBarMenu
},
  {
    initialRouteName : 'HomeScreen'
  })
