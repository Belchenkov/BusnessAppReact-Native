import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class mobiletodos extends Component{
 

  render(){
    return(
      <View>
        <Text>Welcome to React-Native!</Text>
      </View>
    )
  }
}


AppRegistry.registerComponent('mobiletodos', () => mobiletodos);