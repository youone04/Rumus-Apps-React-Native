import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import styles from './css';

class SegiTiga extends Component {
    constructor(props){
        super(props);
        this.state={
            luas: 0,
            sisi:0,
            sisi2: 0,
        }
    }
   
    menanganiInput = (inputsatu) =>{
       this.setState({
            sisi: inputsatu
       })
    }
    menanganiInput2 = (inputDua) => {
        this.setState({
            sisi2: inputDua
        })
    }
    hitungLuas = () => {
        let input1 = parseInt(this.state.sisi2)
        let input2 = parseInt(this.state.sisi)
        let luas = 1/2 * (input1 * input2);
        if(input1 <= 0 || input2 <= 0){
            alert('tinggi atau panjang alas tidak boleh dibawah atau sama dengan 0!');

        }else{
            this.setState({
                luas: luas,
            })
        }
    }
    render(){
        return(
            <ScrollView>
                <Text style={styles.header}>Rumus Segitiga</Text>
                <View style={styles.container}>
                <View style={styles.coverimg}>
                    <Image source={require('../../../../assets/img/imgRumus/segitiga.png')} />
                </View>
                <Text style={styles.sisiAtas}>{this.state.sisi}</Text>
                </View>
                <Text style={styles.sisiBawah}>{this.state.sisi2}</Text>
                    <View style={styles.kotakHasil}>
                        <Text style={styles.textHasil}>{`Luas : ${this.state.luas}`}</Text>
                    </View>
                    <View style={styles.coverTextInput}>
                    <TextInput  onChangeText={this.menanganiInput}  placeholder="masukan tinggi" style={styles.textInput}/>
                    <TextInput onChangeText={this.menanganiInput2}  placeholder="Masukan alas" style={styles.textInput}/>
                    </View>
                    <View  style={styles.coverButton}>
                    <Text onPress={() => this.hitungLuas()} style={styles.textButton}>HITUNG</Text>    
                    </View>
            </ScrollView>
        )
    }
}
export default SegiTiga;