import React, {Component} from 'react';
import {View, StyleSheet, VirtualizedList} from 'react-native';

import {safeAreaBottom, viewportHeight} from '../helpers/deviceHelper';
import VideoComponent from '../components/Video';
import {tiktok_video} from '../constants/data';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }
  componentDidMount() {}

  _getItem(data, index) {
    return {
      id: index,
      liked: data[index].liked,
      likecount: data[index].likecount,
      comments: data[index].comments,
    };
  }

  _renderItem({index, item}) {
    const {currentIndex} = this.state;
    return (
      <View style={{height: viewportHeight}}>
        <VideoComponent
          index={index}
          currentIndex={currentIndex}
          liked={item.liked}
          likecount={item.likecount}
          comments={item.comments}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <VirtualizedList
          initialNumToRender={1}
          initialScrollIndex={this.props.size}
          data={tiktok_video}
          getItemCount={() => 3}
          getItem={this._getItem.bind(this)}
          keyExtractor={(item, index) => index.toString()}
          vertical
          pagingEnabled
          renderItem={this._renderItem.bind(this)}
          scrollEnabled={true}
          onMomentumScrollEnd={async event => {
            const index = parseInt(
              event.nativeEvent.contentOffset.y / viewportHeight,
              10,
            );
            this.setState({currentIndex: index});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: safeAreaBottom,
    backgroundColor: 'black',
  },
});

export default HomeScreen;
