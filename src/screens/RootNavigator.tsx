import {createAppContainer, createStackNavigator} from 'react-navigation';
import Home from './Home';
import AsyncStorageView from './AsyncStorage';
import SQLiteView from './SQLite';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  AsyncStorageView: {screen: AsyncStorageView},
  SQLiteView: {screen: SQLiteView},
});

const RootNavigator = createAppContainer(MainNavigator);
export default RootNavigator;
