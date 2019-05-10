import React, { Component } from 'react';
import { ScrollView, StyleSheet, Button, Text, View, Image } from 'react-native';
import { VALUE } from '../../utils/constance';
import PageScrollView from '../../components/PageScrollView';
import mockjsInit from '../../api/mock'; // 添加mockjs拦截请求，模拟返回服务器数据
import api from '../../api/page';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '1212',
      imageUrl: [
        {
          uri:
            'https://images.pexels.com/photos/2176338/pexels-photo-2176338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          uri:
            'https://images.pexels.com/photos/2209511/pexels-photo-2209511.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          uri:
            'https://images.pexels.com/photos/2236703/pexels-photo-2236703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
      ],
    };
  }
  componentDidMount() {
    // mockjsInit();
  }
  onPressButton = () => {
    this.setState({
      value: JSON.stringify(5656),
    });
    api
      .list()
      .then((res) => {
        this.setState({
          value: JSON.stringify(777),
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <PageScrollView
          style={{ width: VALUE.width, height: 210 }}
          imageArr={this.state.imageUrl}
          infiniteInterval={5000}
          pointerColor={['#fff', '#0000', '#fff']}
          pointerViewStyle={{ bottom: 10 }}
        />
        <Text onPress={this.onPressButton}>{this.state.value}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    fontSize: 19,
  },
  scrollStyle: {
    height: 210,
    width: VALUE.width,
  },
});
