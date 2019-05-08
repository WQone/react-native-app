import React, { Component } from 'react';
import { ScrollView, StyleSheet, Button, Text, View, Image } from 'react-native';
import { VALUE } from '../../utils/constance';
import PageScrollView from '../../components/PageScrollView';
// Mockjs 解析随机的文字
import Mock from 'mockjs';

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
  onPressButton = () => {
    let result = Mock.mock({
      'data|20': [
        {
          _id: '@ID',
          thumb: "@IMG(1024x700,@COLOR(),'\u56fe\u7247\u4e0a\u7684\u6587\u5b57')",
          title: '@cparagraph(1, 3)',
          video: "'http://v.youku.com/v_show/id_XMzY5ODY5MDI3Ng==.html?spm=a2h1n.8251846.0.0'",
        },
      ],
      success: true,
    });
    this.setState({
      value: JSON.stringify(result.data),
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
    backgroundColor: '#F5FCFF',
    fontSize: 19,
  },
  scrollStyle: {
    height: 210,
    width: VALUE.width,
  },
});
