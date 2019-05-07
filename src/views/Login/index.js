import React, { Component } from 'react';
import { Image, Button, View, Text } from 'react-native';
import { styles } from './style';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.login}>
        <Image source={require('../../assets/images/login.jpg')} style={styles.loginBg} />
        <Text>21212tt</Text>
        <Button title="Go to home" onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}
