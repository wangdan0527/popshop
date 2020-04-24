import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AppStack from './stacks/AppStack';

const MainNavigator = createStackNavigator(
  {
    AppStack,
  },
  {
    initialRouteName: 'AppStack',
    headerMode: 'none',
    navigationOptions: {header: null},
    gestureEnabled: false,
  },
);

export default createAppContainer(MainNavigator);
