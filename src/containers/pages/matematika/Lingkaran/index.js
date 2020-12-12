import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

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
                <Text style={{textAlign: 'center',fontSize: 20}}>Rumus Lingkaran</Text>
                <View style={{flexDirection:'row',alignSelf:'center',marginRight:60,marginTop: 20}}>
                <View style={{width: 160,height: 160,flexDirection:'row',alignSelf:'center'}}>
                    <Image style={{width: '100%',height: '100%'}} source={require('../../../../assets/img/imgRumus/lingkaran.png')} />
                </View>
                <Text style={{marginLeft: -60,marginTop: 50,fontSize: 20}}>{this.state.jari}</Text>
                </View>
                    <View style={{flexDirection:'row',backgroundColor: 'white',width: '80%',marginBottom: 5,borderRadius: 4,shadowColor: 'black',alignSelf:'center',height:90,marginTop: 50,shadowColor: 'black',alignSelf:'center',height:90,marginTop: 50,shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}>
                        <Text style={{fontSize: 20,marginLeft: 20,marginTop: 10}}>{`Luas : ${this.state.hasil}`}</Text>
                    </View>
                    <View style={{alignSelf:'center',marginTop: 20}}>
                    <TextInput onChangeText={this.menanganiInput}  placeholder="masukan jari-jari" style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius: 25,height:50,fontSize: 14,paddingLeft: 45,paddingRight: 25,backgroundColor: 'white',width: 330,marginRight: 10,shadowColor: 'black',alignSelf:'center',shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}/>
                    </View>
                    <View style={{height: 40, width: '78%',backgroundColor: '#00acc1',borderRadius: 10,alignSelf:'center',marginTop: 15}}>
                    <Text onPress={() => this.hitungLuas()} style={{fontSize:13,fontWeight:'bold',color:'white',textAlign:'center',marginTop: 10}}>HITUNG LUAS</Text>    
                    </View>
            </ScrollView>
        )
    }
}
export default Lingkaran;