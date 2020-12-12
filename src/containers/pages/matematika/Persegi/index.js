import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
class Persegi extends Component {
    constructor(props){
        super(props);
        this.state={
            luas: 0,
            sisi:0,
            sisi2: 0,
            keliling: 0
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
        let luas = input1 * input2;
        let keliling = 2 *(input1 + input2);
        if(input1 !== input2){
            alert('Nilai Kedua Sisi Harus Sama');
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
                <Text style={{textAlign: 'center',fontSize: 20}}>Rumus Persegi</Text>
                <View style={{flexDirection:'row',alignSelf:'center',marginLeft: 20}}>
                <View style={{marginTop: 10, width: 170,height: 170,flexDirection:'row',alignSelf:'center'}}>
                    <Image style={{width: '100%',height: '100%'}} source={require('../../../../assets/img/imgRumus/persegi.png')} />
                </View>
                <Text style={{marginLeft: 5, margin: 0,marginTop: 80,fontSize: 20}}>{this.state.sisi}</Text>
                </View>
                <Text style={{textAlign: 'center',fontSize: 20,marginLeft: 0}}>{this.state.sisi2}</Text>
                    <View style={{flexDirection:'row',backgroundColor: 'white',width: '80%',marginBottom: 5,borderRadius: 4,shadowColor: 'black',alignSelf:'center',height:90,marginTop: 30,shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}>
                        <Text style={{fontSize: 20,marginLeft: 20,marginTop: 10,flex: 1,width: '100%'}}>{`Luas : ${this.state.luas}`}</Text>
                        <Text style={{fontSize: 20,marginLeft: 20,marginTop: 10,flex: 1,width: '100%'}}>{`Keliling : ${this.state.keliling}`}</Text>
                    </View>
                    <View style={{alignSelf:'center',marginTop: 20}}>
                    <TextInput onChangeText={this.menanganiInput}  placeholder="masukan sisi" style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius: 25,height:50,fontSize: 14,paddingLeft: 45,paddingRight: 25,backgroundColor: 'white',width: 330,marginRight: 10,shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}/>
                    <TextInput onChangeText={this.menanganiInput2}  placeholder="Masukan sisi" style={{marginTop:20, borderWidth:1,borderColor:'#E8E8E8',borderRadius: 25,height:50,fontSize: 14,paddingLeft: 45,paddingRight: 25,backgroundColor: 'white',width: 330,marginRight: 10,shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}/>
                    </View>
                    <View style={{marginRight: 15,  width: '78%',backgroundColor: '#00acc1',height: 40,borderRadius: 10,alignSelf:'center',marginTop: 15,shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}>
                    <Text onPress={() => this.hitungLuas()} style={{fontSize:13,fontWeight:'bold',color:'white',textAlign:'center',marginTop: 10}}>HITUNG</Text>    
                    </View>
            </ScrollView>
        )
    }
}
export default Persegi;