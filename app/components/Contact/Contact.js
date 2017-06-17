import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

const s = require('../../style');

export default class Contact extends Component{
 

  render(){
    return(  
      <View>
        <Text style={s.heading}>Contact!</Text>
      </View>
    )
  }
}


AppRegistry.registerComponent('Contact', () => Contact);