import React from 'react';
import {View,Text,TouchableOpacity,Image,ImageBackground,StyleSheet} from 'react-native';
import {
    SafeAreaView,
    StatusBar,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
const HalamanUtama = () => {
    const navigation = useNavigation();
    const pindahHalamanKe = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <View>
            <StatusBar barStyle="dark-content" />
            <Text style={{textAlign:'center',fontSize: 30,marginVertical: 25,fontFamily: 'serif'}}>List Rumus</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={{width: 135,marginHorizontal: 15,backgroundColor:'#00CCCC',height: 135,marginTop: 10,flex: 1}}>
                    <TouchableOpacity onPress={pindahHalamanKe.bind(this,'tampungrumus')}>
                        <Image style={{marginTop: 3,width: 168,height: 130,borderRadius: 4,alignSelf:'center'}} source={require('../../../assets/img/logo_mtk_optimized.jpg')} />
                        <Text style={{textAlign:'center',fontFamily: 'Roboto',fontSize: 18,marginTop: 5}}>Matematika</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: 135,marginHorizontal: 15,backgroundColor:'#00CCCC',height: 135,marginTop: 10,flex: 1}}>
                    <TouchableOpacity onPress={pindahHalamanKe.bind(this,'tampungrumus')}>
                        <Image style={{marginTop: 3,width: 168,height: 130,borderRadius: 4,alignSelf:'center'}} source={require('../../../assets/img/fisika.jpg')} />
                        <Text style={{textAlign:'center',fontFamily: 'Roboto',fontSize: 18,marginTop: 5}}>Fisika</Text>
                    </TouchableOpacity>
                </View>                
            </View>

            <View style={{flexDirection: 'row',marginTop: 50}}>
                <View style={{width: 135,marginHorizontal: 15,backgroundColor:'#00CCCC',height: 135,marginTop: 10,flex: 1}}>
                    <TouchableOpacity onPress={pindahHalamanKe.bind(this,'tampungrumus')}>
                        <Image style={{marginTop: 3,width: 168,height: 130,borderRadius: 4,alignSelf:'center'}} source={require('../../../assets/img/kimia.jpg')} />
                        <Text style={{textAlign:'center',fontFamily: 'Roboto',fontSize: 18,marginTop: 5}}>Kimia</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: 135,marginHorizontal: 15,backgroundColor:'#00CCCC',height: 135,marginTop: 10,flex: 1}}>
                    <TouchableOpacity onPress={pindahHalamanKe.bind(this,'tampungrumus')}>
                        <Image style={{marginTop: 3,width: 168,height: 130,borderRadius: 4,alignSelf:'center'}} source={require('../../../assets/img/logo_mtk_optimized.jpg')} />
                        <Text style={{textAlign:'center',fontFamily: 'Roboto',fontSize: 18,marginTop: 5}}>Soon</Text>
                    </TouchableOpacity>
                </View>                
            </View>
            </View>
    )

}
export default HalamanUtama;

