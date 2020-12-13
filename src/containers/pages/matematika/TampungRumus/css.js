import {StyleSheet} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
    coverKumpulRumus: {
        marginLeft: responsiveWidth(2),
        marginTop: responsiveHeight(3)
    },
    coverImg: {
        borderRadius:4,
        marginRight:responsiveWidth(4), 
        marginVertical: responsiveHeight(2),
        width: responsiveWidth(29),
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 4,},
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9
    },
    imgkumpulRumus: {
        marginTop: responsiveHeight(1), 
        marginLeft:responsiveWidth(1), 
        width: responsiveWidth(27),
        height: responsiveHeight(17),
        resizeMode:'contain'
    },
    headerRumusMatematika: {
        fontSize: responsiveFontSize(3),
        textAlign: 'center'
    },
    ketimg: {
        marginLeft:responsiveWidth(3),
        textAlign:'center',
        width: responsiveWidth(23),
        marginTop: responsiveHeight(2),
        marginBottom: 3
    }

})
export default styles;