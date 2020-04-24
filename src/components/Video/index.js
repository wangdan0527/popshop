import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';

import Content from './Content';

class VideoComponent extends Component {
  render() {
    const {index, currentIndex, url, liked, likecount, comments} = this.props;
    return (
      <View style={styles.container}>
        <Video
          source={url || require('../../constants/video.mp4')}
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
          playWhenInactive={false}
          playInBackground={false}
          paused={index !== currentIndex}
          repeat
        />
        <Content liked={liked} likecount={likecount} comments={comments} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
});

VideoComponent.defaultProps = {
  currentIndex: 0,
  liked: false,
  likecount: 100,
  comments: [],
  url: '',
};

VideoComponent.propTypes = {
  index: PropTypes.number.isRequired,
  currentIndex: PropTypes.number,
  liked: PropTypes.bool,
  likecount: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.object),
  url: PropTypes.string,
};

export default VideoComponent;
