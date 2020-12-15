import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import styles from './css';
class Lingkaran extends Component {
    constructor(props){
        super(props);
        this.state={
            hasil: 0,
            jari:0,
        }
    }
   
    menanganiInput = (inputJariJari) =>{
        // console.log(inputsatu.target.value)
            this.setState({
                jari: inputJariJari
        })
    }
    hitungLuas = () => {
        // alert(this.state.sisi)
        let jari = parseInt(this.state.jari)
        let luas = (22/7) * jari*jari;
            this.setState({
                hasil: luas
        })
    }
    render(){
        return(
            <ScrollView>
                <Text style={styles.header}>Rumus Lingkaran</Text>
                <View style={styles.container}>
                <View style={styles.coverimg}>
                    <Image source={require('../../../../assets/img/imgRumus/lingkaran.png')} />
                </View>
                <Text style={styles.jari}>{this.state.jari}</Text>
                </View>
                    <View style={styles.kotakHasil}>
                        <Text style={styles.textHasil}>{`Luas : ${this.state.hasil}`}</Text>
                    </View>
                    <View style={styles.coverTextInput}>
                    <TextInput onChangeText={this.menanganiInput}  placeholder="masukan jari-jari" style={styles.textInput}/>
                    </View>
                    <View style={styles.coverButton}>
                    <Text onPress={() => this.hitungLuas()} style={styles.textButton}>HITUNG LUAS</Text>    
                    </View>
            </ScrollView>
        )
    }
}
export default Lingkaran;