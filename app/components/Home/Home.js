import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

const s = require('../../style');

export default class Home extends Component{
 

  render(){
    return(  
      <View>
        <Text style={s.heading}>Home!</Text>
        <Text style={s.sectonText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis enim asperiores voluptas nobis architecto, ipsam tempore corporis veritatis pariatur commodi. Officiis libero cupiditate explicabo molestias dolore, quae architecto nam ut inventore dignissimos temporibus sit modi ratione! Quas consequuntur itaque id modi. Consectetur, laboriosam.</Text>
      </View>
    )
  }
}


AppRegistry.registerComponent('Home', () => Home);