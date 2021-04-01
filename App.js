import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import RequestScreen from './screens/RequestScreen'
import LoginScreen from './screens/LoginScreen'
import LawsScreen from './screens/LawsScreen'
import {AppDrawerNavigator} from './components/AppDrawerNavigator'


export default function App() {
  return (
    <View style={styles.container}>
      
     <AppContainer/>
      <StatusBar style="auto" />
    </View>
  );
}
const SwitchNavigator =  createSwitchNavigator({
  LoginScreen : {screen : LoginScreen},
  HomeScreen : {screen :HomeScreen},
  RequestScreen : {screen : RequestScreen},
  LawsScreen : {screen : LawsScreen},
  Drawer:{screen: AppDrawerNavigator},

})
const AppContainer = createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
