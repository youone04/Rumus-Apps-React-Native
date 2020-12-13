import React from 'react';
import{View,Text,TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './css'
const TampungRumus = () => {
    const navigation = useNavigation();
    const pindahHalamanKe = (screen) => {
        navigation.navigate(screen)
    }
    return(
        <View style={styles.coverKumpulRumus}>
            <Text style={styles.headerRumusMatematika}>Rumus Matematika</Text>
            <View style={{flexDirection:'row'}}>
            <View style={styles.coverImg}>
                <TouchableOpacity onPress={pindahHalamanKe.bind(this,'persegi')}>
                <Image style={styles.imgkumpulRumus} source={require('../../../../assets/img/kumpulRumus/persegi.png')}/>
                <Text style={styles.ketimg}>Luas Persegi</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.coverImg}>
                <TouchableOpacity onPress={pindahHalamanKe.bind(this,'segitiga')}>
                    <Image style={styles.imgkumpulRumus} source={require('../../../../assets/img/kumpulRumus/segitiga.png')}/>
                    <Text style={styles.ketimg}>Luas Segitiga</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.coverImg}>
                <TouchableOpacity onPress={pindahHalamanKe.bind(this,'persegipanjang')}>
                    <Image style={styles.imgkumpulRumus} source={require('../../../../assets/img/kumpulRumus/persegi_panjang.png')}/>
                    <Text style={styles.ketimg}>Luas persegi panjang</Text>
                </TouchableOpacity>
            </View>
            </View>

            <View style={{flexDirection:'row'}}>
            <View style={styles.coverImg}>
                <TouchableOpacity onPress={pindahHalamanKe.bind(this,'trapesium')}>
                <Image style={styles.imgkumpulRumus} source={require('../../../../assets/img/kumpulRumus/tp.png')}/>
                <Text style={styles.ketimg} >Luas Trapesium</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.coverImg}>
                <TouchableOpacity onPress={pindahHalamanKe.bind(this,'lingkaran')}>
                    <Image style={styles.imgkumpulRumus} source={require('../../../../assets/img/kumpulRumus/lingkaran.png')}/>
                    <Text style={styles.ketimg}>Luas Lingkaran</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.coverImg}>
                <TouchableOpacity onPress={pindahHalamanKe.bind(this,'layang')}>
                    <Image style={styles.imgkumpulRumus} source={require('../../../../assets/img/kumpulRumus/layang.png')}/>
                    <Text style={styles.ketimg}>Luas Layang-Layang</Text>
                </TouchableOpacity>
            </View>
            </View>

            <View style={{flexDirection:'row'}}>
            <View style={{marginLeft: 70, marginVertical: 8,width: '30%',backgroundColor:'white',shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}>
                <TouchableOpacity onPress={pindahHalamanKe.bind(this,'jajargenjang')}>
                <Image style={styles.imgkumpulRumus} source={require('../../../../assets/img/kumpulRumus/jajargenjang.png')}/>
                <Text style={styles.ketimg} >Luas Jajar Genjang</Text>
                </TouchableOpacity>
            </View>
            <View style={{borderRadius:4,marginLeft:12, marginVertical: 8,width: '30%',backgroundColor:'white',shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}>
                <TouchableOpacity onPress={pindahHalamanKe.bind(this,'belahkeupat')}>
                    <Image style={styles.imgkumpulRumus} source={require('../../../../assets/img/kumpulRumus/ketupat.png')}/>
                    <Text style={styles.ketimg}>Luas Belah Ketupat</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>

    )
}
export default TampungRumus;