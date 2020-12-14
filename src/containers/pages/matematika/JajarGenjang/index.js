import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import styles from './css';

class JajarGenjang extends Component {
    constructor(props){
        super(props);
        this.state={
            hasil: 0,
            alas:0,
            tinggi: 0
        }
    }
   
    menanganiInput = (inputsatu) =>{
            this.setState({
                alas: inputsatu
        })
    }
    menanganiInput2 = (inputDua) => {
        this.setState({
            tinggi: inputDua
        })
    }
    hitungLuas = () => {
        let input1 = parseInt(this.state.alas)
        let input2 = parseInt(this.state.tinggi)
        let luas = input1 * input2;        
            this.setState({
                hasil: luas
            })
    }
    render(){
        return(
            <ScrollView>
                <Text style={styles.header}>Rumus Jajar Genjang</Text>
                <View style={styles.container}>
                <View style={styles.coverimg}>
                    <Image  source={require('../../../../assets/img/imgRumus/jajarGenjang.png')} />
                </View>
                <Text style={styles.tinggi}>{this.state.tinggi}</Text>
                </View>
                <Text style={styles.alas}>{this.state.alas}</Text>
                    <View style={styles.kotakHasil}>
                        <Text style={styles.textHasil}>{`Luas : ${this.state.hasil} `}</Text>
                    </View>
                    <View style={styles.coverTextInput}>
                    <TextInput onChangeText={this.menanganiInput}  placeholder="masukan alas" style={styles.textInput}/>
                    <TextInput onChangeText={this.menanganiInput2}  placeholder="Masukan tinggi" style={styles.textInput}/>
                    </View>
                    <View style={styles.coverButton}>
                    <Text onPress={() => this.hitungLuas()} style={styles.textButton}>HITUNG LUAS</Text>    
                    </View>
            </ScrollView>
        )
    }
}
export default JajarGenjang;