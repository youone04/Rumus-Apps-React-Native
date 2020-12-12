/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
AppRegistry.registerComponent(appName, () => App);
// https://stackoverflow.com/questions/42711008/error-when-running-watchman
