/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import anim from '../../constants/play.json';
import Animation from 'lottie-react-native';

import CommentBox from '../CommentWrap';
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: props.liked,
      likecount: props.likecount,
      comments: props.comments,
      showModal: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.animation.play();
  }
  handleClick() {
    this.setState({
      liked: !this.state.liked,
      likecount: this.state.likecount + 1,
    });
  }

  onComments = () => {
    this.setState({showModal: true});
  };

  hideCommentBox = () => {
    this.setState({showModal: false});
  };

  postComment = message => {
    const comment = {};
    comment.id = '1234-1234-1234';
    comment.username = 'test2';
    comment.comment = message;
    console.log('comment: ', comment);
    this.setState({comments: [...this.state.comments, comment].reverse()});
  };

  render() {
    const {showModal} = this.state;
    const like = this.state.liked ? 'red' : 'white';
    return (
      <View style={styles.container}>
        <View style={styles.full}>
          <View style={styles.half} />
          <View style={[styles.half, {alignItems: 'flex-end'}]}>
            <View>
              <TouchableOpacity>
                <ImageBackground
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoh_wxk-fkGGHm4pP_Mwe6v-P6weOYRpuchqAu0K0VYoDj4AVQg',
                  }}
                  style={styles.avatar}
                  imageStyle={{borderRadius: 25}}>
                  <View style={styles.avatarCircle}>
                    <Icon2 name="add-circle" size={20} color="#fb2956" />
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleClick}>
                <Icon name="heart" size={40} color={like} />
              </TouchableOpacity>
              <Text style={styles.likecount}>{this.state.likecount}</Text>
              <TouchableOpacity onPress={() => this.onComments()}>
                <Icon2 name="chat-bubble" size={40} color="white" />
              </TouchableOpacity>
              <Text style={styles.commentcount}>
                {this.state.comments.length}
              </Text>
              <TouchableOpacity>
                <Icon name="share" size={40} color="white" />
              </TouchableOpacity>
              <Text style={styles.share}>share</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 0.5, flexDirection: 'row'}}>
          <View style={{flex: 0.5}}>
            <View style={styles.tag}>
              <Text style={styles.tagtitle}>Click</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.username}>Instructions</Text>

              <Text style={styles.commentsBottom}>1.Cruch the ginger</Text>
              <Text style={styles.commentsBottom}>2.Slice Onion</Text>
              <Text style={styles.commentsBottom}>3.Chop tomatoes</Text>
              <Text style={styles.commentsBottom}>4.Add dalta</Text>
              <Text style={styles.commentsBottom}>
                5.Add Cruched ginergarlic paste
              </Text>
              <Text style={styles.commentsBottom}>6.Add lime juice</Text>
              <Text style={styles.commentsBottom}>7.Add the Ghee</Text>
            </ScrollView>
          </View>
          <View style={styles.half}>
            <View style={styles.reanimatedView}>
              <Animation
                ref={animation => {
                  this.animation = animation;
                }}
                style={styles.reanimatedSize}
                loop={true}
                source={anim}
              />
            </View>
          </View>
        </View>
        <CommentBox
          isVisible={showModal}
          onHide={this.hideCommentBox}
          comments={this.state.comments}
          postComment={this.postComment}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  full: {
    flex: 1,
    flexDirection: 'row',
  },
  half: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
  },
  avatarCircle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rightside: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 8,
  },
  leftside: {
    alignItems: 'flex-start',
  },
  rightcontent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  likecount: {
    color: 'white',
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  commentcount: {
    color: 'white',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  share: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagtitle: {
    padding: 10,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  tag: {
    backgroundColor: '#f20b3a',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  username: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
  commentsBottom: {
    color: 'white',
    marginLeft: 8,
  },
  userimage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  reanimatedView: {
    margin: 12,
    alignItems: 'flex-end',
  },
  reanimatedSize: {
    width: 50,
    height: 50,
  },
});

Content.defaultProps = {
  liked: false,
  likecount: 101,
  comments: [],
};

Content.propTypes = {
  liked: PropTypes.bool,
  likecount: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default Content;
