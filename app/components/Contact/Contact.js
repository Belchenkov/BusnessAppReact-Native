import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var s = require('../../style');

export default class Contact extends Component {
  render() {
    return (
      <View>
        <Text style={s.heading}>Contact Us</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Contact', () => Contact);
