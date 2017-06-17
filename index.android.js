import React, {Component} from 'react';
import {AppRegistry, Text, View, Image, Button, ScrollView} from 'react-native';


import Home from './app/components/Home/Home';
import About from './app/components/About/About';
import Contact from './app/components/Contact/Contact';

const s = require('./app/style');

export default class mobiletodos extends Component{
 

  render(){
    return(  
      <View>
        <View style={s.imageWrap}>
          <Image style={s.image} source={require('./logo.png')} />    
        </View>
        <ScrollView style={s.scrollView}>
          <Home />
          <About />
          <Contact />
        </ScrollView>
      </View>
    )
  }
}


AppRegistry.registerComponent('mobiletodos', () => mobiletodos);