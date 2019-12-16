import * as React from 'react';
import { StyleSheet, Text, Button, View, TextInput, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Introduction from './screens/Intro'
import Home from './screens/Home'
import ImageDisplay from './screens/ImageDisplay'

// import { Pershendetje } from "https://i.ibb.co/vcKxrg9/Pershendetje.gif";
// import { Sije } from "https://i.ibb.co/5LJPVG8/source.gif";




const RootStack = createStackNavigator(
  {
    Intro: Introduction,
    Home: Home,
    ImageDisplay: ImageDisplay
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008081',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImpWord: {
    color: 'red',
    fontSize: 14
  },

  fullText: {
    color: "blue",
    fontSize: 20
  }
});
