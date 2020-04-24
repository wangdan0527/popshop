import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import Modal from 'react-native-modal';

import CommentList from './CommentList';
import CustomKeyboard from '../Keyboard';
import styles from './styles';
class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
    };
  }

  _renderComments = ({item, index}) => {
    return (
      <CommentList
        key={index}
        username={item.username}
        hour="3"
        comment={item.comment}
      />
    );
  };

  render() {
    const {isVisible, onHide, postComment, comments} = this.props;
    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => onHide()}
        style={styles.modalStyle}
        backdropOpacity={0}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.titleView}>
              <Text style={styles.headerTitle}>{comments.length} comments</Text>
            </View>
            <TouchableOpacity onPress={onHide} style={styles.closeView}>
              <Text style={styles.closeText}>Done</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapper}>
            <FlatList
              ref={ref => (this.flatList = ref)}
              data={comments}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this._renderComments}
              style={{}}
            />
          </View>
          <View style={styles.commentInput}>
            <CustomKeyboard onPostComment={postComment} />
          </View>
        </View>
      </Modal>
    );
  }
}

CommentBox.defaultProps = {};

CommentBox.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
};
export default CommentBox;
