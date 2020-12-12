import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

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
                <Text style={{textAlign: 'center',fontSize: 20}}>Rumus Persegi Panjang</Text>
                <View style={{flexDirection:'row',alignSelf:'center',marginLeft: 20,marginTop: 30}}>
                <View style={{width: 210,height: 127,flexDirection:'row',alignSelf:'center'}}>
                    <Image style={{width: '100%',height: '100%'}} source={require('../../../../assets/img/imgRumus/persegiPanjang.png')} />
                </View>
                <Text style={{marginLeft: 10, margin: 0,marginTop: 50,fontSize: 20}}>{this.state.lebar}</Text>
                </View>
                <Text style={{textAlign: 'center',fontSize: 20,marginLeft: 0,marginTop: 5}}>{this.state.panjang}</Text>
                    <View style={{flexDirection:'row',backgroundColor: 'white',width: '80%',marginBottom: 5,borderRadius: 4,shadowColor: 'black',alignSelf:'center',height:90,marginTop: 50,shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}>
                        <Text style={{flex: 1,width: '100%', fontSize: 20,marginLeft: 20,marginTop: 10}}>{`Luas : ${this.state.luas}`}</Text>
                        <Text style={{flex: 1,width: '100%', fontSize: 20,marginLeft: 20,marginTop: 10}}>{`Keliling : ${this.state.keliling}`}</Text>
                    </View>
                    <View style={{alignSelf:'center',marginTop: 20}}>
                    <TextInput onChangeText={this.menanganiInput}  placeholder="masukan panjang" style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius: 25,height:50,fontSize: 14,paddingLeft: 45,paddingRight: 25,backgroundColor: 'white',width: 330,marginRight: 10,shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}/>
                    <TextInput onChangeText={this.menanganiInput2}  placeholder="Masukan lebar" style={{marginTop:10, borderWidth:1,borderColor:'#E8E8E8',borderRadius: 25,height:50,fontSize: 14,paddingLeft: 45,paddingRight: 25,backgroundColor: 'white',width: 330,marginRight: 10,shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9}}/>
                    </View>
                    <View style={{width: '78%',backgroundColor: '#00acc1',height: 'auto',borderRadius: 10,alignSelf:'center',marginTop: 15,height: 40}}>
                    <Text onPress={() => this.hitungLuas()} style={{fontSize:13,fontWeight:'bold',color:'white',textAlign:'center',marginTop: 6,marginTop: 10}}>HITUNG LUAS</Text>    
                    </View>
            </ScrollView>
        )
    }
}
export default PersegiPanjang;