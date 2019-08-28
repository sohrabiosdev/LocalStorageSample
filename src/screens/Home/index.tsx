import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Prop {
  navigation: any;
}

interface State {}

export default class Home extends Component<Prop, State> {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props: Readonly<Prop>) {
    super(props);
  }

  private saveDataAsyncStorage() {
    this.props.navigation.navigate('AsyncStorageView');
  }

  private saveDataSQLite() {
    this.props.navigation.navigate('SQLiteView');
  }

  private saveDataRealm() {
    this.props.navigation.navigate('AsyncStorageView');
  }

  private saveDataMongoDB() {
    this.props.navigation.navigate('AsyncStorageView');
  }

  private saveDataFirebase() {
    this.props.navigation.navigate('AsyncStorageView');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>{'Local Storage Options'}</Text>
        <TouchableOpacity onPress={() => this.saveDataAsyncStorage()}>
          <View
            style={{
              backgroundColor: 'green',
              padding: 10,
              marginTop: 20,
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              {'Async Storage'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.saveDataSQLite()}>
          <View
            style={{
              backgroundColor: 'green',
              padding: 10,
              marginTop: 20,
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              {'SQLite'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.saveDataRealm()}>
          <View
            style={{
              backgroundColor: 'green',
              padding: 10,
              marginTop: 20,
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>{'Realm'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.saveDataMongoDB()}>
          <View
            style={{
              backgroundColor: 'green',
              padding: 10,
              marginTop: 20,
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              {'Mongo DB'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.saveDataFirebase()}>
          <View
            style={{
              backgroundColor: 'green',
              padding: 10,
              marginTop: 20,
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              {'Firebase'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
