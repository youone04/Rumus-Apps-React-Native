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
                <View style={{flexDirection:'row',alignSelf:'center',marginLeft: 20}}>
                <View style={{width: 200,height: 200,flexDirection:'row',alignSelf:'center'}}>
                    <Image style={{width: '100%',height: '100%'}} source={{uri:'https://i1.wp.com/www.mahirmatematika.com/wp-content/uploads/2018/07/lingkaran.jpg?resize=467%2C429&ssl=1'}} />
                </View>
                <Text style={{marginLeft: -70,marginTop: 70,fontSize: 20}}>{this.state.jari}</Text>
                </View>
                    <View style={{flexDirection:'row',backgroundColor: 'white',width: '80%',marginBottom: 5,borderRadius: 4,shadowColor: 'black',alignSelf:'center',height:90,marginTop: 50}}>
                        <Text style={{fontSize: 20,marginLeft: 20,marginTop: 10}}>{`Luas : ${this.state.hasil} cm2`}</Text>
                    </View>
                    <View style={{alignSelf:'center',marginTop: 20}}>
                    <TextInput onChangeText={this.menanganiInput}  placeholder="masukan jari-jari" style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius: 25,height:50,fontSize: 14,paddingLeft: 45,paddingRight: 25,backgroundColor: 'white',width: 330,marginRight: 10}}/>
                    </View>
                    <View style={{width: 80,backgroundColor: 'blue',height: 'auto',borderRadius: 10,alignSelf:'center',marginTop: 15}}>
                    <Text onPress={() => this.hitungLuas()} style={{fontSize:13,fontWeight:'bold',color:'white',textAlign:'center',marginTop: 6}}>HITUNG LUAS</Text>    
                    </View>
            </ScrollView>
        )
    }
}
export default Lingkaran;