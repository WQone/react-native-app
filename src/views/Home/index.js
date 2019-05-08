import React, { Component } from 'react';
import { ScrollView, StyleSheet, Button, Text, View, Image } from 'react-native';
import { VALUE } from '../../utils/constance';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: [
        'https://images.pexels.com/photos/2176338/pexels-photo-2176338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/2209511/pexels-photo-2209511.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/2236703/pexels-photo-2236703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ],
    };
  }
  _onMomentumScrollEnd = () => {};
  _onScrollBeginDrag = () => {};
  _onScrollEndDrag = () => {};
  renderImages = (i) => {
    return <Image key={i} source={{ uri: i }} style={{ width: '100%', height: 210 }} />;
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref="scrollView"
          style={styles.scrollStyle}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
          onMomentumScrollEnd={(e) => {
            this._onMomentumScrollEnd(e);
          }}
          onScrollBeginDrag={() => {
            this._onScrollBeginDrag();
          }}
          onScrollEndDrag={() => {
            this._onScrollEndDrag();
          }}
        >
          <View style={{ width: VALUE.width }}>{this.state.imageUrl.map(this.renderImages)}</View>
        </ScrollView>
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
