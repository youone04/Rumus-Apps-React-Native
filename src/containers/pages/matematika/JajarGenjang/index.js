import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

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
        // console.log(inputsatu.target.value)
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
        // alert(this.state.sisi)
        let input1 = parseInt(this.state.alas)
        let input2 = parseInt(this.state.tinggi)
        let luas = input1 * input2;
        // console.log(hasil)
        
            this.setState({
                hasil: luas
            })
    }
    render(){
        return(
            <ScrollView>
                <Text style={{marginLeft:40, textAlign: 'center',fontSize: 20}}>Rumus Jajar Genjang</Text>
                <View style={{marginTop: 20, flexDirection:'row',alignSelf:'center',marginLeft: 20}}>
                <View style={{width: 200,height: 100,flexDirection:'row',alignSelf:'center'}}>
                    <Image style={{width: '100%',height: '100%'}} source={require('../../../../assets/img/imgRumus/jajarGenjang.png')} />
                </View>
                <Text style={{position:'absolute',marginLeft: 30, marginTop: 40,fontSize: 20}}>{this.state.tinggi}</Text>
                </View>
                <Text style={{textAlign: 'center',fontSize: 20,marginLeft: 0}}>{this.state.alas}</Text>
                    <View style={{flexDirection:'row',backgroundColor: 'white',width: '80%',marginBottom: 5,borderRadius: 4,shadowColor: 'black',alignSelf:'center',height:90,marginTop: 50,shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}>
                        <Text style={{fontSize: 20,marginLeft: 20,marginTop: 10}}>{`Luas : ${this.state.hasil} `}</Text>
                    </View>
                    <View style={{alignSelf:'center',marginTop: 20}}>
                    <TextInput onChangeText={this.menanganiInput}  placeholder="masukan alas" style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius: 25,height:50,fontSize: 14,paddingLeft: 45,paddingRight: 25,backgroundColor: 'white',width: 330,marginRight: 10,shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}/>
                    <TextInput onChangeText={this.menanganiInput2}  placeholder="Masukan tinggi" style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius: 25,height:50,fontSize: 14,paddingLeft: 45,paddingRight: 25,backgroundColor: 'white',width: 330,marginRight: 10,shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9,marginTop:10}}/>
                    </View>
                    <View style={{width: '78%',backgroundColor: '#00acc1',height: 'auto',borderRadius: 10,alignSelf:'center',marginTop: 15,height:40}}>
                    <Text onPress={() => this.hitungLuas()} style={{fontSize:13,fontWeight:'bold',color:'white',textAlign:'center',marginTop: 13}}>HITUNG LUAS</Text>    
                    </View>
            </ScrollView>
        )
    }
}
export default JajarGenjang;