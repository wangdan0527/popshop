import {createStackNavigator} from 'react-navigation-stack';

import HomePage from '../../containers/HomeScreen';

const AppStack = createStackNavigator(
  {
    HomePage,
  },
  {
    initialRouteName: 'HomePage',
    headerMode: 'none',
    navigationOptions: {header: null},
    gestureEnabled: false,
  },
);

export default AppStack;
