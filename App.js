import * as React from "react";
import { StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

const AppSwitchNavigator = createSwitchNavigator({
  Screen1:HomeScreen,
  Screen2:LoginScreen,
  Screen3:SignUpScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
