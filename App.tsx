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
import AsyncStorageView from './src/screens/AsyncStorage';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  AsyncStorageView: {screen: AsyncStorageView},
});
const App = createAppContainer(MainNavigator);
export default App;
