import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

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
        // console.log(inputsatu.target.value)
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
        // alert(this.state.sisi)
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
                <Text style={{textAlign: 'center',fontSize: 20}}>Rumus Trapesium</Text>
                <View style={{flexDirection:'row',alignSelf:'center',marginLeft: 20}}>
                <View style={{width: 200,height: 100,flexDirection:'row',alignSelf:'center',marginTop: 50}}>
                    <Image style={{width: '99%',height: '100%'}} source={require('../../../../assets/img/imgRumus/trapesium.png')} />
                </View>
                <Text style={{textAlign: 'center',fontSize: 20,marginLeft: 80,position:'absolute',marginTop: 20}}>{this.state.sisiAtas}</Text>
                <Text style={{margin: 0,marginTop: 75,fontSize: 20,position:'absolute',marginLeft: 55}}>{this.state.tinggi}</Text>
                <Text style={{textAlign: 'center',fontSize: 20,marginLeft: 80,position:'absolute',marginTop:150}}>{this.state.sisiBawah}</Text>
                </View>
                    <View style={{flexDirection:'row',backgroundColor: 'white',width: '80%',marginBottom: 5,borderRadius: 4,shadowColor: 'black',alignSelf:'center',height:90,marginTop: 40,shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}>
                        <Text style={{fontSize: 20,marginLeft: 20,marginTop: 10}}>{`Luas : ${this.state.hasil} `}</Text>
                    </View>
                    <View style={{alignSelf:'center',marginTop: 20}}>
                    <TextInput onChangeText={this.inputAtas}  placeholder="masukan sisi atas" style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius: 25,height:50,fontSize: 14,paddingLeft: 45,paddingRight: 25,backgroundColor: 'white',width: 330,marginRight: 10,shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}/>
                    <TextInput onChangeText={this.inputTinggi}  placeholder="Masukan tinggi" style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius: 25,height:50,fontSize: 14,paddingLeft: 45,paddingRight: 25,backgroundColor: 'white',width: 330,marginRight: 10,shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9,marginTop: 10}}/>
                    <TextInput onChangeText={this.inputBawah}  placeholder="Masukan sisi bawah" style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius: 25,height:50,fontSize: 14,paddingLeft: 45,paddingRight: 25,backgroundColor: 'white',width: 330,marginRight: 10,shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9,marginTop: 10}}/>
                    </View>
                    <View style={{width: '78%',backgroundColor: '#00acc1',height: 'auto',borderRadius: 10,alignSelf:'center',marginTop: 10,height: 40}}>
                    <Text onPress={() => this.hitungLuas()} style={{fontSize:13,fontWeight:'bold',color:'white',textAlign:'center',marginTop: 6,marginTop: 13}}>HITUNG LUAS</Text>    
                    </View>
            </ScrollView>
        )
    }
}
export default Trapesium;