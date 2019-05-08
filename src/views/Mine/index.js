import React, { Component } from 'react';
import { StyleSheet, ScrollView, Button, Text, View } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MineScreen Screen</Text>
        <Button title="Go to Login" onPress={() => this.props.navigation.navigate('Login')} />
        <Button title="Go to Mine" onPress={() => this.props.navigation.navigate('Mine')} />
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    fontSize: 19,
  },
});
