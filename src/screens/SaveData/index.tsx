import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Prop {
  navigation: any;
}

interface State {
  name: string;
  age: string;
  mobile: string;
  address: string;
}

export default class SaveData extends Component<Prop, State> {
  static navigationOptions = {
    title: 'Save',
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
    this.props.navigation.navigate('Details', {
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
    // alignItems: 'center',
    // justifyContent: 'center',
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
