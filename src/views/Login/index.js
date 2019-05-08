import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  View,
  Text,
  TextInput,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { VALUE } from '../../utils/constance';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { user_text: '', pass_text: '' };
  }
  onPressButton = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent barStyle={'dark-content'} />
        <Image
          source={require('../../assets/images/loginbg.jpeg')}
          style={styles.loginBg}
          resizeMode="stretch"
        />
        <View style={styles.login}>
          <View style={styles.InputName}>
            <SimpleLineIcons name={'user'} size={21} style={{ lineHeight: 40, color: 'white' }} />
            <TextInput
              onChangeText={(user_text) => this.setState({ user_text })}
              style={styles.Input}
              autoComplete={'username'}
              underlineColorAndroid={'transparent'}
              maxLength={30}
              placeholder={'请输入用户名'}
              placeholderTextColor={'white'}
            />
          </View>
          <View style={styles.InputPass}>
            <SimpleLineIcons name={'lock'} size={23} style={{ lineHeight: 40, color: 'white' }} />
            <TextInput
              onChangeText={(pass_text) => this.setState({ pass_text })}
              style={styles.Input}
              autoComplete={'password'}
              secureTextEntry={true}
              underlineColorAndroid={'transparent'}
              maxLength={16}
              placeholder={'请输入密码'}
              placeholderTextColor={'white'}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.9} //点击时的透明度
            style={styles.InputBtn}
            //点击事件，要记得绑定
            onPress={this.onPressButton}
          >
            <Text style={{ fontSize: 16, color: '#168f48', fontWeight: 'bold' }}>立即登录</Text>
          </TouchableOpacity>
        </View>
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
  loginBg: {
    width: VALUE.width,
    height: VALUE.height,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: -1,
  },
  login: {
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: VALUE.width,
    height: VALUE.height,
  },
  InputName: {
    flexDirection: 'row',
    height: 45,
    borderColor: 'white',
    borderBottomWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingBottom: 5,
  },
  InputPass: {
    flexDirection: 'row',
    height: 45,
    borderColor: 'white',
    borderBottomWidth: 1,
    width: '100%',
    paddingBottom: 5,
  },
  Input: {
    fontSize: 16,
    padding: 0,
    paddingLeft: 20,
    // color: 'white',
  },
  InputBtn: {
    marginTop: 30,
    width: '100%',
    height: 47,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center', //显示Text组件居中
    borderRadius: 4, //按钮圆角
    alignSelf: 'center',
  },
});
