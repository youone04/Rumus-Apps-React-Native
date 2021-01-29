import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HalamanUtama from '../HalamanUtama';
import Persegi from '../matematika/Persegi'
import TampungRumus from '../matematika/TampungRumus'
import SegiTiga from '../matematika/Segitiga';
import PersegiPanjang from '../matematika/PersegiPanjang';
import Trapesium from '../matematika/Trapesium';
import Lingkaran from '../matematika/Lingkaran';
import Layang from '../matematika/Layang';
import JajarGenjang from '../matematika/JajarGenjang';
import BelahKetupat from '../matematika/BelahKetupat';
import TampungRumusFisika from '../fisika/TampungRumusFisika';
import SplashcScreen from '../SplashcScreen';
const Stack = createStackNavigator();

const  Router = () =>  {
    return (
        <Stack.Navigator>
          <Stack.Screen 
            name="splash" 
            component={SplashcScreen} 
            options={{headerShown: false}}
            />
          <Stack.Screen 
            name="halamanutama" 
            component={HalamanUtama} 
            options={{headerShown: false}}
            />
          <Stack.Screen 
            name="tampungrumus" 
            component={TampungRumus} 
            options={{headerShown: false}}
            />
          <Stack.Screen 
            name="persegi" 
            component={Persegi} 
            options={{headerShown: false}}
            />
          <Stack.Screen 
            name="segitiga" 
            component={SegiTiga} 
            options={{headerShown: false}}
            />
          <Stack.Screen 
            name="persegipanjang" 
            component={PersegiPanjang} 
            options={{headerShown: false}}
            />
          <Stack.Screen 
            name="trapesium" 
            component={Trapesium} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="lingkaran" 
            component={Lingkaran} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="layang" 
            component={Layang} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="jajargenjang" 
            component={JajarGenjang} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="belahkeupat" 
            component={BelahKetupat} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="tampungfisika" 
            component={TampungRumusFisika} 
            options={{headerShown: false}}
          />
        </Stack.Navigator>
    );
  };
export default Router;
