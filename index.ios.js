import React, {Component} from 'react';
import {AppRegistry, Text, View, 
  Image, Button, Switch, ScrollView} from 'react-native';


import Home from './app/components/Home/Home';
import About from './app/components/About/About';
import Contact from './app/components/Contact/Contact';

const s = require('./app/style');

export default class busnessapp extends Component{
 constructor() {
   super();
   this.state = {
     logoHidden: false
   }
 }

  render(){
    let logoHidden = this.state.logoHidden;
    let img = <Text></Text>;  

    if (logoHidden) {
      img = <Text></Text>;
    } else {
       img = <Image style={s.image} source={require('./logo.png')} />
    }
    return(  
      <View>
        <View style={s.imageWrap}>
          {img}
          <Switch onValueChange={(value)=> this.setState({logoHidden: value})}
                  value={this.state.logoHidden}
          />    
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


AppRegistry.registerComponent('busnessapp', () => busnessapp);