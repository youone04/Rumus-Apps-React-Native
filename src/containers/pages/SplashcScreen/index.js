import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
const SplashcScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('halamanutama')
        },2000)
    })

    return (
        // center component
        <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
            <Text style={{fontSize: 25,fontWeight:'bold'}}>Rumus Apps</Text>
        </View>
    )
}

export default SplashcScreen
