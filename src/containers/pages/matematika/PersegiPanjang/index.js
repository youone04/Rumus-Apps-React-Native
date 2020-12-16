import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import styles from './css';
class PersegiPanjang extends Component {
    constructor(props){
        super(props);
        this.state={
            luas: 0,
            panjang:0,
            lebar: 0,
            keliling: 0
        }
    }
   
    menanganiInput = (inputsatu) =>{
        // console.log(inputsatu.target.value)
            this.setState({
                panjang: inputsatu
        })
    }
    menanganiInput2 = (inputDua) => {
        this.setState({
            lebar: inputDua
        })
    }
    hitungLuas = () => {
        let input1 = parseInt(this.state.panjang)
        let input2 = parseInt(this.state.lebar)
        let luas = input1 * input2;
        let keliling = 2 * (input1 + input2)
        if(input1 < input2){
            alert('nilai panjang tidak boleh lebh kecil dari nilai lebar');
        }else if(input1 <= 0 || input2 <= 0){
            alert('Tidak ada sisi yang dibawah atau sama dengan 0!');

        }else{
            this.setState({
                luas: luas,
                keliling: keliling
            })
        }
    }
    render(){
        return(
            <ScrollView>
                <Text style={styles.header}>Rumus Persegi Panjang</Text>
                <View style={styles.container}>
                <View style={styles.coverimg}>
                    <Image source={require('../../../../assets/img/imgRumus/persegiPanjang.png')} />
                </View>
                <Text style={styles.lebar}>{this.state.lebar}</Text>
                </View>
                <Text style={styles.panjang}>{this.state.panjang}</Text>
                    <View style={styles.kotakHasil}>
                        <Text style={styles.textHasil}>{`Luas : ${this.state.luas}`}</Text>
                    </View>
                    <View style={styles.coverTextInput}>
                    <TextInput onChangeText={this.menanganiInput}  placeholder="masukan panjang" style={styles.textInput}/>
                    <TextInput onChangeText={this.menanganiInput2}  placeholder="Masukan lebar" style={styles.textInput}/>
                    </View>
                    <View style={styles.coverButton}>
                    <Text onPress={() => this.hitungLuas()} style={styles.textButton}>HITUNG LUAS</Text>    
                    </View>
            </ScrollView>
        )
    }
}
export default PersegiPanjang;