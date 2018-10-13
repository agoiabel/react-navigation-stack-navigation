import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

export default class App extends Component {

  render() {
    return (
      <AppStackNavigation />
    );
  }

}

const AppStackNavigation = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
