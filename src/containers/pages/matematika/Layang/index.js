import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import styles from './css';
class Layang extends Component {
    constructor(props){
        super(props);
        this.state={
            hasil: 0,
            diagonal:0,
            diagonal2: 0
        }
    }
   
    menanganiInput = (diagonal1) =>{
        // console.log(inputsatu.target.value)
            this.setState({
                diagonal: diagonal1
        })
    }
    menanganiInput2 = (diagonal2) => {
        this.setState({
            diagonal2: diagonal2
        })
    }
    hitungLuas = () => {
        // alert(this.state.diagonal)
        let diagonal1 = parseInt(this.state.diagonal2)
        let diagonal2 = parseInt(this.state.diagonal)
        let luas = 1/2 * (diagonal1 * diagonal2);
            this.setState({
                hasil: luas
            })
    }
    render(){
        return(
            <ScrollView>
                <Text style={styles.header}>Rumus layang - layang</Text>
                <View style={styles.container}>
                <View style={styles.coverimg}>
                    <Image source={require('../../../../assets/img/imgRumus/layang.png')} />
                </View>
                <Text style={styles.diagonal1}>{this.state.diagonal}</Text>
                </View>
                <Text style={styles.diagonal2}>{this.state.diagonal2}</Text>
                    <View style={styles.kotakHasil}>
                        <Text style={styles.textHasil}>{`Luas : ${this.state.hasil}`}</Text>
                    </View>
                    <View style={styles.coverTextInput}>
                    <TextInput onChangeText={this.menanganiInput}  placeholder="masukan diagonal 1" style={styles.textInput}/>
                    <TextInput onChangeText={this.menanganiInput2}  placeholder="Masukan diagonal 2" style={styles.textInput}/>
                    </View>
                    <View style={styles.coverButton}>
                    <Text onPress={() => this.hitungLuas()} style={styles.textButton}>HITUNG LUAS</Text>    
                    </View>
            </ScrollView>
        )
    }
}
export default Layang;