import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

class Persegi extends Component {
    constructor(props){
        super(props);
        this.state={
            hasil: 0,
            sisi:0,
            sisi2: 0
        }
    }
   
    menanganiInput = (inputsatu) =>{
        // console.log(inputsatu.target.value)
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
        // alert(this.state.sisi)
        let input1 = parseInt(this.state.sisi2)
        let input2 = parseInt(this.state.sisi)
        let luas = input1 * input2;
        // console.log(hasil)
        if(input1 !== input2){
            alert('Nilai Kedua Sisi Harus Sama');
        }else if(input1 <= 0 || input2 <= 0){
            alert('Tidak ada sisi yang dibawah atau sama dengan 0!');

        }else{
            this.setState({
                hasil: luas
            })
        }
    }
    render(){
        return(
            <ScrollView>
                <Text style={{textAlign: 'center',fontSize: 20}}>Rumus Persegi</Text>
                <View style={{flexDirection:'row',alignSelf:'center',marginLeft: 20}}>
                <View style={{width: 200,height: 200,flexDirection:'row',alignSelf:'center'}}>
                    <Image style={{width: '100%',height: '100%'}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Regular_quadrilateral.svg/250px-Regular_quadrilateral.svg.png'}} />
                </View>
                <Text style={{margin: 0,marginTop: 80,fontSize: 20}}>{this.state.sisi}</Text>
                </View>
                <Text style={{textAlign: 'center',fontSize: 20,marginLeft: 0}}>{this.state.sisi2}</Text>
                    <View style={{flexDirection:'row',backgroundColor: 'white',width: '80%',marginBottom: 5,borderRadius: 4,shadowColor: 'black',alignSelf:'center',height:90,marginTop: 50}}>
                        <Text style={{fontSize: 20,marginLeft: 20,marginTop: 10}}>{`Luas : ${this.state.hasil} cm2`}</Text>
                    </View>
                    <View style={{alignSelf:'center',marginTop: 20}}>
                    <TextInput onChangeText={this.menanganiInput}  placeholder="masukan sisi" style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius: 25,height:50,fontSize: 14,paddingLeft: 45,paddingRight: 25,backgroundColor: 'white',width: 330,marginRight: 10}}/>
                    <TextInput onChangeText={this.menanganiInput2}  placeholder="Masukan sisi" style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius: 25,height:50,fontSize: 14,paddingLeft: 45,paddingRight: 25,backgroundColor: 'white',width: 330,marginRight: 10}}/>
                    </View>
                    <View style={{width: 80,backgroundColor: 'blue',height: 'auto',borderRadius: 10,alignSelf:'center',marginTop: 15}}>
                    <Text onPress={() => this.hitungLuas()} style={{fontSize:13,fontWeight:'bold',color:'white',textAlign:'center',marginTop: 6}}>HITUNG LUAS</Text>    
                    </View>
            </ScrollView>
        )
    }
}
export default Persegi;