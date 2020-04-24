import React, {Component} from 'react';
import {BackHandler} from 'react-native';

import NavigationService from './src/navigation/NavigationService';
import RootStack from './src/navigation';

class App extends Component {
  forbidAndroidBackHandler = () =>
    BackHandler.addEventListener('hardwareBackPress', () => true);

  handleSetNavigationReference = navigatorRef => {
    NavigationService.setTopLevelNavigator(navigatorRef);
  };

  render() {
    return <RootStack ref={this.handleSetNavigationReference} />;
  }
}

const RootNavigator = App;

// NOTE: ROOT COMPONENT

export default () => <RootNavigator />;
