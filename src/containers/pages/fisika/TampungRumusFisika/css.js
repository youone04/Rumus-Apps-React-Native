import {StyleSheet} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  const styles = StyleSheet.create({
      header:{
          fontSize: responsiveFontSize(3),
          textAlign:'center'
      }
  })
  export default styles;