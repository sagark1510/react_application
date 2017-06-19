/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
console.ignoredYellowBox = ['Remote debugger'];
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Button,
  Alert,
  Image,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { StackNavigator } from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
import styles from './class/Style';
import SignUp from './class/SignUp'
import RegimenInfomation from './class/RegimenInfomation'
import Condition from './class/Condition'

export default class project extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      position: 1,
      interval: null
    };
  };
  static navigationOptions = {
    title: 'Welcome',
  };
  componentWillMount() {
      this.setState({interval: setInterval(() => {
          this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
      }, 2000)});
  }

  componentWillUnmount() {
      clearInterval(this.state.interval);
  }
  render() {
      return (
        <View style = {{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between'}}>
          <View style ={{
            marginBottom: 20
          }}>
            <ImageSlider images = {[
              require('./images/brian.jpg'),
              require('./images/Taegyum.jpg'),
              require('./images/Kian.jpg')]}
              height = {400}
              position={this.state.position}
              onPositionChanged={position => this.setState({position})}/>
          </View>
          
          <View style = {{
            alignItems: 'center'
          }}>
            <Text> 
              Adding introduction about this application
              It can be multiple lines 
            </Text>
          </View>
          
          <View>

          </View>
            <View style={{backgroundColor: 'antiquewhite'}}>
            <Button
              onPress = {() => this.props.navigation.navigate('SignUp')}
              title = "Sign Up"/>
            <Button
              onPress = {() => this.props.navigation.navigate('Condition')}
              title = "Log In W/ CancerBase"/>
          </View>
        </View>
      );
  };
}
const App = StackNavigator({
  Home: { screen: project },
  SignUp: { screen: SignUp },
  RegimenInfomation: { screen: RegimenInfomation },
  Condition: {screen: Condition},
});

AppRegistry.registerComponent('project', () => App);
