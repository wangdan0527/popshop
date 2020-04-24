import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PixelRatio,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import {
  KeyboardAccessoryView,
  KeyboardUtils,
} from 'react-native-keyboard-input';

const IsIOS = Platform.OS === 'ios';
const TrackInteractive = false;

export default class KeyboardInput extends Component {
  static propTypes = {
    message: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.keyboardAccessoryViewContent = this.keyboardAccessoryViewContent.bind(
      this,
    );
    this.onKeyboardItemSelected = this.onKeyboardItemSelected.bind(this);
    this.resetKeyboardView = this.resetKeyboardView.bind(this);
    this.onKeyboardResigned = this.onKeyboardResigned.bind(this);

    this.state = {
      customKeyboard: {
        component: undefined,
        initialProps: undefined,
      },
      receivedKeyboardData: undefined,
    };
  }

  onKeyboardItemSelected(keyboardId, params) {
    const receivedKeyboardData = `onItemSelected from "${keyboardId}"\nreceived params: ${JSON.stringify(
      params,
    )}`;
    this.setState({receivedKeyboardData});
  }

  onKeyboardResigned() {
    this.resetKeyboardView();
  }
  resetKeyboardView() {
    this.setState({customKeyboard: {}});
  }

  showKeyboardView(component, title) {
    this.setState({
      customKeyboard: {
        component,
        initialProps: {title},
      },
    });
  }

  _onChange = event => {
    this.setState({messages: event.nativeEvent.text || ''});
  };

  keyboardAccessoryViewContent = () => {
    const {onPostComment} = this.props;
    return (
      <View style={styles.keyboardContainer}>
        <View style={styles.inputContainer}>
          <AutoGrowingTextInput
            maxHeight={200}
            style={styles.textInput}
            ref={r => {
              this.textInputRef = r;
            }}
            placeholder={'Say something'}
            underlineColorAndroid="transparent"
            onFocus={() => this.resetKeyboardView()}
            testID={'input'}
            value={this.state.messages}
            onChange={event => this._onChange(event)}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => {
              if (!this.state.messages) {
                return;
              } else {
                onPostComment(this.state.messages);
                this.setState({messages: ''});
                KeyboardUtils.dismiss();
              }
            }}>
            <Text>Comment</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAccessoryView
          renderContent={this.keyboardAccessoryViewContent}
          onHeightChanged={
            IsIOS
              ? height => this.setState({keyboardAccessoryViewHeight: height})
              : undefined
          }
          trackInteractive={TrackInteractive}
          kbInputRef={this.textInputRef}
          kbComponent={this.state.customKeyboard.component}
          kbInitialProps={this.state.customKeyboard.initialProps}
          onItemSelected={this.onKeyboardItemSelected}
          onKeyboardResigned={this.onKeyboardResigned}
          revealKeyboardInteractive
          allowHitsOutsideBounds
        />
      </View>
    );
  }
}

const COLOR = '#F5FCFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    backgroundColor: COLOR,
  },
  scrollContainer: {
    justifyContent: 'center',
    // padding: 15,
    paddingBottom: 0,
    flex: 1,
    backgroundColor: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  keyboardContainer: {
    flex: 1,
    backgroundColor: COLOR,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingTop: 2,
    paddingBottom: 5,
    fontSize: 16,
    backgroundColor: 'white',
    borderWidth: 0.5 / PixelRatio.get(),
    borderRadius: 18,
  },
  sendButton: {
    paddingRight: 15,
    paddingLeft: 15,
    alignSelf: 'center',
  },
});
