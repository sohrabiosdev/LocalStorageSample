import React, {Component} from 'react';
import {
  Alert,
  AsyncStorage,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import {database} from './Database/Database';

interface Prop {
  navigation: any;
}

interface State {
  name: string;
  age: string;
  mobile: string;
  address: string;
  refresh: boolean;
}


export default class SQLiteView extends Component<Prop, State> {
  name: string | null = null;
  age: string | null = null;
  mobile: string | null = null;
  address: string | null = null;

  static navigationOptions = {
    title: 'SQLite Storage',
  };

  constructor(props: Readonly<Prop>) {
    super(props);
    this.state = {
      name: '',
      age: '',
      mobile: '',
      address: '',
      refresh: false,
    };
  }

  componentDidMount(): void {
    SQLite.DEBUG(true);
    SQLite.enablePromise(true);

    SQLite.openDatabase({
      name: 'TestDatabase',
      location: 'default',
    }).then(db => {
      console.log('Database open!');
      database.createList('Sohrab Hussain').then(r => {
        console.log('Names Table Ceated!');
      });
    });
  }

  private saveData() {
    this._storeData();
  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem('name', this.state.name);
      await AsyncStorage.setItem('age', this.state.age);
      await AsyncStorage.setItem('mobile', this.state.mobile);
      await AsyncStorage.setItem('address', this.state.address);
    } catch (error) {
      // Error saving data
    }
  };

  private viewData() {
    this._retrieveData();
  }

  _retrieveData = async () => {
    try {
      this.name = await AsyncStorage.getItem('name');
      this.age = await AsyncStorage.getItem('age');
      this.mobile = await AsyncStorage.getItem('mobile');
      this.address = await AsyncStorage.getItem('address');
      this.setState({
        refresh: true,
      });
    } catch (error) {
      // Error retrieving data
    }
  };

  private showTheory() {
    Alert.alert(
      'SQLite Storage',
      'https://brucelefebvre.com/blog/2018/11/06/react-native-offline-first-db-with-sqlite/',
      [
        {
          text: 'Open Website',
          onPress: () =>
            Linking.openURL(
              'https://brucelefebvre.com/blog/2018/11/06/react-native-offline-first-db-with-sqlite/',
            ),
        },
        {
          text: 'Cancel',
        },
      ],
      {cancelable: true},
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity onPress={() => this.showTheory()}>
            <View
              style={{
                backgroundColor: 'black',
                padding: 10,
                marginTop: 0,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>THEORY</Text>
            </View>
          </TouchableOpacity>
          <View style={{height: 10}} />
          <Text>Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({name: text})}
            value={this.state.name}
          />
          <Text style={styles.text}>Age</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({age: text})}
            value={this.state.age}
          />
          <Text style={styles.text}>Mobile</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({mobile: text})}
            value={this.state.mobile}
          />
          <Text style={styles.text}>Address</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({address: text})}
            value={this.state.address}
          />
          <TouchableOpacity onPress={() => this.saveData()}>
            <View
              style={{
                backgroundColor: 'green',
                padding: 10,
                marginTop: 20,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>SAVE</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.viewData()}>
            <View
              style={{
                backgroundColor: 'green',
                padding: 10,
                marginTop: 20,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                VIEW DATA
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{height: 10}} />
          {this.name && <Text>{this.name}</Text>}
          {this.age && <Text>{this.age}</Text>}
          {this.mobile && <Text>{this.mobile}</Text>}
          {this.address && <Text>{this.address}</Text>}
        </ScrollView>
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
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  text: {
    marginTop: 10,
  },
});
