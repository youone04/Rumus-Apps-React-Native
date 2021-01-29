import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {
    SafeAreaView,
    StatusBar,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
import styles from './css';
const HalamanUtama = () => {
    const navigation = useNavigation();
    const pindahHalamanKe = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <View>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.listRumus}>List Rumus</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.coverImg}>
                    <TouchableOpacity onPress={pindahHalamanKe.bind(this,'tampungrumus')}>
                        <Image style={styles.imgHalamanUtama} source={require('../../../assets/img/logo_mtk_optimized.jpg')} />
                        <Text style={styles.textCover}>Matematika</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.coverImg}>
                    <TouchableOpacity onPress={pindahHalamanKe.bind(this,'tampungfisika')}>
                        <Image style={styles.imgHalamanUtama} source={require('../../../assets/img/fisika.jpg')} />
                        <Text style={styles.textCover}>Fisika</Text>
                    </TouchableOpacity>
                </View>                
            </View>

            <View style={{flexDirection: 'row',marginTop: 50}}>
                <View style={styles.coverImg}>
                    <TouchableOpacity onPress={pindahHalamanKe.bind(this,'tampungrumus')}>
                        <Image style={styles.imgHalamanUtama} source={require('../../../assets/img/kimia.jpg')} />
                        <Text style={styles.textCover}>Kimia</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.coverImg}>
                    <TouchableOpacity onPress={pindahHalamanKe.bind(this,'tampungrumus')}>
                        <Image style={styles.imgHalamanUtama} source={require('../../../assets/img/logo_mtk_optimized.jpg')} />
                        <Text style={styles.textCover}>Soon</Text>
                    </TouchableOpacity>
                </View>                
            </View>
            </View>
    )

}

export default HalamanUtama;

