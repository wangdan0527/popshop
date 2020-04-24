import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet, Image} from 'react-native';

const CommentList = ({username, hour, comment}) => {
  return (
    <View>
      <View style={styles.singleMessage}>
        <Image
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoh_wxk-fkGGHm4pP_Mwe6v-P6weOYRpuchqAu0K0VYoDj4AVQg',
          }}
          style={styles.user}
        />
        <View style={styles.userdataContainer}>
          <View>
            <Text style={styles.username}>{username}</Text>
            <View style={styles.commentside}>
              <Text style={styles.comment}>{comment}</Text>
              <Text style={styles.commentTime}>{hour} hr ago</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  singleMessage: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  user: {
    width: 40,
    height: 40,
    borderRadius: 60 / 2,
  },
  userdataContainer: {
    marginTop: 3,
    marginLeft: 8,
  },
  username: {
    fontWeight: 'bold',
    color: 'white',
  },
  commentside: {
    flexDirection: 'row',
  },
  comment: {
    // marginLeft: 8,
    color: 'white',
  },
  commentTime: {
    marginLeft: 8,
    color: 'white',
  },
});
CommentList.defaultProps = {
  hour: 3,
};

CommentList.propTypes = {
  username: PropTypes.string.isRequired,
  hour: PropTypes.string,
  comment: PropTypes.string.isRequired,
};
export default CommentList;
