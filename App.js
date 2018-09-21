/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';
import PinEntry from './components/PinEntry';
import Home from './components/Home';
import PinInvalid from './components/pinInvalid';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    <Router navigationBarStyle={{ backgroundColor: '#9370DB'}} titleStyle={{color: '#FFFFFF', textAlign: 'center'}} >
        <Stack key="root">
          <Scene key="pinEntry" component={PinEntry} initial title="Enter Pin" />
          <Scene key="home" component={Home} title="Home" />
          <Scene key="pinInvalid" component={PinInvalid}  />
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
