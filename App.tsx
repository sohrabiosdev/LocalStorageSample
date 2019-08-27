/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Home from './src/screens/Home';
import SaveData from './src/screens/SaveData';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  SaveData: {screen: SaveData},
});
const App = createAppContainer(MainNavigator);
export default App;
