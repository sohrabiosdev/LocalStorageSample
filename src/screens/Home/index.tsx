import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

interface Prop {
  navigation: any;
}

interface State {
  name: string;
  age: string;
  mobile: string;
  address: string;
}

export default class Home extends Component<Prop, State> {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props: Readonly<Prop>) {
    super(props);
    this.state = {
      name: '',
      age: '',
      mobile: '',
      address: '',
    };
  }

  private saveData() {
    this.props.navigation.navigate('SaveData', {
      name: this.state.name,
      age: this.state.age,
      mobile: this.state.mobile,
      address: this.state.address,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Name</Text>
        <TouchableOpacity onPress={() => this.saveData()}>
          <View style={{backgroundColor: 'green', padding: 10, marginTop: 20}}>
            <Text style={{color: 'white', textAlign: 'center'}}>SAVE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.saveData()}>
          <View style={{backgroundColor: 'green', padding: 10, marginTop: 20}}>
            <Text style={{color: 'white', textAlign: 'center'}}>SAVE</Text>
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
