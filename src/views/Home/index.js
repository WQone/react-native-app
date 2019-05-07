import React, { Component } from 'react';
import { Platform, Button, Text, View } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>MineScreen Screen</Text>
        <Button title="Go to Login" onPress={() => this.props.navigation.navigate('Login')} />
        <Button title="Go to Mine" onPress={() => this.props.navigation.navigate('Mine')} />
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
