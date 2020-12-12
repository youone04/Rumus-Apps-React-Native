import React from 'react';
import{View,Text,TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const TampungRumus = () => {
    const navigation = useNavigation();
    const pindahHalamanKe = (screen) => {
        navigation.navigate(screen)
    }
    return(
        <View style={{marginLeft: 10,marginTop: 10}}>
            <Text style={{fontSize: 20,textAlign: 'center'}}>Rumus Matematika</Text>
            <View style={{flexDirection:'row'}}>
            <View style={{borderRadius:4, marginRight:8, marginVertical: 8,width: '30%',backgroundColor:'white',shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}>
                <TouchableOpacity onPress={pindahHalamanKe.bind(this,'persegi')}>
                <Image style={{marginTop: 11, marginLeft:10, width: 100,height: 100,resizeMode:'cover'}} source={require('../../../../assets/img/kumpulRumus/persegi.png')}/>
                <Text style={{marginLeft:10, textAlign:'center',width: '80%',marginTop: 4}}>Luas Persegi</Text>
                </TouchableOpacity>
            </View>
            <View style={{borderRadius:4,marginLeft:7, marginVertical: 8,width: '30%',backgroundColor:'white',shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}>
                <TouchableOpacity onPress={pindahHalamanKe.bind(this,'segitiga')}>
                    <Image style={{marginTop: 11, marginLeft:10, width: 100,height: 100,resizeMode:'cover'}} source={require('../../../../assets/img/kumpulRumus/segitiga.png')}/>
                    <Text style={{marginLeft:10,textAlign:'center',width: '80%',marginTop: 5}}>Luas Segitiga</Text>
                </TouchableOpacity>
            </View>

            <View style={{borderRadius:4,marginLeft:12, marginVertical: 8,width: '30%',backgroundColor:'white',shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}>
                <TouchableOpacity onPress={pindahHalamanKe.bind(this,'persegipanjang')}>
                    <Image style={{marginLeft:8,marginTop:10, width: 105,height: 70,resizeMode:'cover'}} source={require('../../../../assets/img/kumpulRumus/persegi_panjang.png')}/>
                    <Text style={{marginLeft:10, width:'75%',textAlign:'center',marginTop: 12}}>Luas persegi panjang</Text>
                </TouchableOpacity>
            </View>
            </View>

            <View style={{flexDirection:'row'}}>
            <View style={{marginVertical: 8,width: '30%',backgroundColor:'white',shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}>
                <TouchableOpacity onPress={pindahHalamanKe.bind(this,'trapesium')}>
                <Image style={{marginLeft: 5, marginTop: 30, width: 115,height: 50}} source={require('../../../../assets/img/kumpulRumus/tp.png')}/>
                <Text style={{ marginTop:30, marginLeft: 10}} >Luas Trapesium</Text>
                </TouchableOpacity>
            </View>
            <View style={{borderRadius:4,marginLeft:12, marginVertical: 8,width: '30%',backgroundColor:'white',shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}>
                <TouchableOpacity onPress={pindahHalamanKe.bind(this,'lingkaran')}>
                    <Image style={{marginTop: 11, marginLeft:10, width: 100,height: 100,resizeMode:'cover'}} source={require('../../../../assets/img/kumpulRumus/lingkaran.png')}/>
                    <Text style={{marginLeft:10,textAlign:'center',width: '80%',marginTop: 5}}>Luas Lingkaran</Text>
                </TouchableOpacity>
            </View>

            <View style={{borderRadius:4,marginLeft:12, marginVertical: 8,width: '30%',backgroundColor:'white',shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}>
                <TouchableOpacity onPress={pindahHalamanKe.bind(this,'layang')}>
                    <Image style={{marginTop: 11, marginLeft:10, width: 100,height: 100,resizeMode:'cover'}} source={require('../../../../assets/img/kumpulRumus/layang.png')}/>
                    <Text style={{marginLeft:10,textAlign:'center',width: '80%',marginTop: 5}}>Luas Layang-Layang</Text>
                </TouchableOpacity>
            </View>
            </View>

            <View style={{flexDirection:'row'}}>
            <View style={{marginLeft: 70, marginVertical: 8,width: '30%',backgroundColor:'white',shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}>
                <TouchableOpacity onPress={pindahHalamanKe.bind(this,'jajargenjang')}>
                <Image style={{marginLeft: 5, marginTop: 30, width: 115,height: 50}} source={require('../../../../assets/img/kumpulRumus/jajargenjang.png')}/>
                <Text style={{textAlign:'center', marginTop:20, marginLeft: 6}} >Luas Jajar Genjang</Text>
                </TouchableOpacity>
            </View>
            <View style={{borderRadius:4,marginLeft:12, marginVertical: 8,width: '30%',backgroundColor:'white',shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}>
                <TouchableOpacity onPress={pindahHalamanKe.bind(this,'belahkeupat')}>
                    <Image style={{marginTop: 11, marginLeft:10, width: 100,height: 100,resizeMode:'cover'}} source={require('../../../../assets/img/kumpulRumus/ketupat.png')}/>
                    <Text style={{marginLeft:10,textAlign:'center',width: '80%',marginTop: 5}}>Luas Belah Ketupat</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>

    )
}
export default TampungRumus;