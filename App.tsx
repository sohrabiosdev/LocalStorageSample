/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {Component} from 'react';
import RootNavigator from './src/screens/RootNavigator';
import {AppState} from 'react-native';
import {database} from './src/screens/SQLite/Database';

interface Props {}

interface State {
  appState: string;
  databaseIsReady: boolean;
}

export default class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      appState: AppState.currentState,
      databaseIsReady: false,
    };
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  public componentDidMount() {
    // App is starting up
    this.appIsNowRunningInForeground();
    this.setState({
      appState: 'active',
    });
  }

  public componentWillUnmount() {
    // Remove app state change listener
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  render() {
    return <RootNavigator />;
  }

  private handleAppStateChange(nextAppState: string) {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      // App has moved from the background (or inactive) into the foreground
      this.appIsNowRunningInForeground();
    } else if (
      this.state.appState === 'active' &&
      nextAppState.match(/inactive|background/)
    ) {
      // App has moved from the foreground into the background (or become inactive)
      this.appHasGoneToTheBackground();
    }
    this.setState({appState: nextAppState});
  }

  private appHasGoneToTheBackground() {
    database.close();
  }

  private appIsNowRunningInForeground() {
    console.log('App is now running in the foreground!');
    return database.open().then(() =>
      this.setState({
        databaseIsReady: true,
      }),
    );
  }
}
