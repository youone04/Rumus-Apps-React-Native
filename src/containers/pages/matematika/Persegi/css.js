import {StyleSheet,Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window')

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: width*0.065,
        marginTop: height*0.01
    },
    container: {
        flexDirection:'row',
        alignSelf:'center',
        marginLeft:width*0.02,
        marginTop: height*0.04
    },
    sisiAtas: {
        marginTop: height*0.2,
        fontSize: width*0.04,
        position:'absolute',
        marginLeft: width*0.06
    },
    sisiBawah:{
        marginTop: height*0.5,
        fontSize: responsiveFontSize(2),
        position:'absolute',
        marginLeft: width*0.5
    },
    coverimg: {
        width: width*0.6,
        height: height*0.38,
        flexDirection:'row',
        alignSelf:'center',
    },
    kotakHasil: {
        flexDirection:'row',
        backgroundColor: 'white',
        width: width*0.9,
        marginBottom: height*0,
        borderRadius: 4,
        shadowColor: 'black',
        alignSelf:'center',
        height:height*0.18,
        marginTop: height*0.07,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 4,},
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9
    },
    textHasil: {
        fontSize: responsiveFontSize(2.6),
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(2)
    },
    coverTextInput: {
        alignSelf:'center',
        marginTop: height*0.01
    },
    textInput: {
        borderWidth:responsiveWidth(0.5),
        borderColor:'#E8E8E8',
        borderRadius: responsiveWidth(6),
        height: responsiveHeight(7.7),
        fontSize: responsiveFontSize(1.8),
        paddingLeft: responsiveWidth(5),
        paddingRight: responsiveWidth(2),
        backgroundColor: 'white',
        width: width*0.9,
        marginRight: responsiveWidth(0),
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 4,},
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        marginTop: height*0.003
    },
    coverButton:{
        width: width*0.9,
        backgroundColor: '#00acc1',
        height: responsiveHeight(6),
        borderRadius: responsiveWidth(3),
        alignSelf:'center',
        marginTop: responsiveHeight(3)
    },
    textButton: {
        fontSize:responsiveFontSize(1.6),
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        marginTop: responsiveHeight(2)
    }
})
export default styles;