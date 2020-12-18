/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
AppRegistry.registerComponent(appName, () => App);
// https://stackoverflow.com/questions/42711008/error-when-running-watchman


// import React from 'react';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
//   listenOrientationChange as loc,
//   removeOrientationListener as rol
// } from 'react-native-responsive-screen';
 
// export default class App extends React.Component {
//   componentDidMount() {
//     loc(this);
//   }
  
//   componentWillUnMount() {
//     rol();
//   }render() {
//     const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         backgroundColor: 'gray',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//       responsiveBox: {
//         width: wp('84.5%'),
//         height: hp('17%'),
//         borderWidth: 2,
//         borderColor: 'orange',
//         flexDirection: 'column',
//         justifyContent: 'space-around' 
//       },
//       text: {
//         color: 'white'
//       }
//     });
//     return (
//       <View style={styles.container}>
//         <View style={styles.responsiveBox}>
//           <Text style={styles.text}>This box is always of 84.5% width and 17% height.</Text>
//           <Text style={styles.text}>Test it by running this example repo in phones/
//             emulators with screens of various dimensions and pixel per inch (ppi).</Text>
//         </View>
//       </View>
//     );
//   }
// }