import {StyleSheet} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: responsiveFontSize(3),
        marginTop: responsiveHeight(2)
    },
    container: {
        flexDirection:'row',
        alignSelf:'center',
        marginLeft: responsiveWidth(11),
        marginTop: responsiveHeight(5)
    },
    tinggi: {
        position:'absolute',
        marginLeft: responsiveWidth(8), 
        marginTop: responsiveHeight(7),
        fontSize: responsiveFontSize(2)
    },
    alas: {
        position:'absolute',
        textAlign: 'center',
        fontSize: responsiveFontSize(2),
        marginTop:responsiveHeight(27),
        marginLeft: responsiveWidth(45)
    },
    coverimg: {
        width: responsiveWidth(60),
        height: responsiveHeight(15),
        flexDirection:'row',
        alignSelf:'center'
    },
    kotakHasil: {
        flexDirection:'row',
        backgroundColor: 'white',
        width: responsiveWidth(81),
        marginBottom: responsiveHeight(1),
        borderRadius: 4,
        shadowColor: 'black',
        alignSelf:'center',
        height:responsiveHeight(15),
        marginTop: responsiveHeight(7),
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
        marginTop: responsiveHeight(3)
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
        width: responsiveWidth(80),
        marginRight: responsiveWidth(0),
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 4,},
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        marginTop: responsiveHeight(3)
    },
    coverButton:{
        width: responsiveWidth(80),
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