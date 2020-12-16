import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import styles from './css';
class Trapesium extends Component {
    constructor(props){
        super(props);
        this.state={
            hasil: 0,
            sisiAtas:0,
            sisiBawah: 0,
            tinggi: 0,
            luas: 0
        }
    }
   
    inputAtas = (inputAtas) =>{
            this.setState({
                sisiAtas: inputAtas
        })
    }
    inputTinggi = (inputTinggi) => {
        this.setState({
            tinggi: inputTinggi
        })
    }

    inputBawah = (inputBawah) => {
        this.setState({
            sisiBawah: inputBawah
        })
    }
    hitungLuas = () => {
        let sisiAtas = parseInt(this.state.sisiAtas)
        let tinggi = parseInt(this.state.tinggi)
        let sisiBawah = parseInt(this.state.sisiBawah)
        let luas = 1/2*(sisiAtas+sisiBawah)*tinggi
            this.setState({
                hasil: luas
            })
    }
    render(){
        return(
            <ScrollView>
                <Text style={styles.header}>Rumus Trapesium</Text>
                <View style={styles.container}>
                <View style={styles.coverimg}>
                    <Image  source={require('../../../../assets/img/imgRumus/trapesium.png')} />
                </View>
                <Text style={styles.sisiAtas}>{this.state.sisiAtas}</Text>
                <Text style={styles.tinggi}>{this.state.tinggi}</Text>
                <Text style={styles.sisiBawah}>{this.state.sisiBawah}</Text>
                </View>
                    <View style={styles.kotakHasil}>
                        <Text style={styles.textHasil}>{`Luas : ${this.state.hasil} `}</Text>
                    </View>
                    <View style={styles.coverTextInput}>
                    <TextInput onChangeText={this.inputAtas}  placeholder="masukan sisi atas" style={styles.textInput}/>
                    <TextInput onChangeText={this.inputTinggi}  placeholder="Masukan tinggi" style={styles.textInput}/>
                    <TextInput onChangeText={this.inputBawah}  placeholder="Masukan sisi bawah" style={styles.textInput}/>
                    </View>
                    <View style={styles.coverButton}>
                    <Text onPress={() => this.hitungLuas()} style={styles.textButton}>HITUNG LUAS</Text>    
                    </View>
            </ScrollView>
        )
    }
}
export default Trapesium;