import {StyleSheet} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
    listRumus:{
        textAlign:'center',
        marginVertical: responsiveHeight(4),
        fontFamily: 'serif',
        fontSize: responsiveFontSize(3)
    },
    imgHalamanUtama: {
        marginTop: 3,
        width: responsiveWidth(40),
        height: responsiveHeight(20),
        borderRadius: 4,
        alignSelf:'center'
    },
    coverImg: {
        width: responsiveWidth(10),
        marginHorizontal: responsiveHeight(3),
        backgroundColor:'white',
        height: responsiveHeight(21),
        marginTop: responsiveHeight(2),
        borderRadius: 4,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 4,},
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9
    },
    textCover: {
        textAlign:'center',
        fontFamily: 'Roboto',
        fontSize: responsiveFontSize(3),
        marginTop: 5
    }
    
  });
  export default styles;