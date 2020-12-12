import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

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
                <Text style={{textAlign: 'center',fontSize: 20}}>Rumus layang - layang</Text>
                <View style={{flexDirection:'row',alignSelf:'center',marginLeft: 20}}>
                <View style={{width: 200,height: 200,flexDirection:'row',alignSelf:'center'}}>
                    <Image style={{width: '70%',height: '85%'}} source={{uri:'https://rumuspintar.com/wp-content/uploads/2019/07/Layang-layang.jpg'}} />
                </View>
                <Text style={{margin: 0,marginTop: 80,fontSize: 20}}>{this.state.diagonal}</Text>
                </View>
                <Text style={{textAlign: 'center',fontSize: 20,marginLeft: 0}}>{this.state.diagonal2}</Text>
                    <View style={{flexDirection:'row',backgroundColor: 'white',width: '80%',marginBottom: 5,borderRadius: 4,shadowColor: 'black',alignSelf:'center',height:90,marginTop: 50}}>
                        <Text style={{fontSize: 20,marginLeft: 20,marginTop: 10}}>{`Luas : ${this.state.hasil} cm2`}</Text>
                    </View>
                    <View style={{alignSelf:'center',marginTop: 20}}>
                    <TextInput onChangeText={this.menanganiInput}  placeholder="masukan diagonal 1" style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius: 25,height:50,fontSize: 14,paddingLeft: 45,paddingRight: 25,backgroundColor: 'white',width: 330,marginRight: 10}}/>
                    <TextInput onChangeText={this.menanganiInput2}  placeholder="Masukan diagonal 2" style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius: 25,height:50,fontSize: 14,paddingLeft: 45,paddingRight: 25,backgroundColor: 'white',width: 330,marginRight: 10}}/>
                    </View>
                    <View style={{width: 80,backgroundColor: 'blue',height: 'auto',borderRadius: 10,alignSelf:'center',marginTop: 15}}>
                    <Text onPress={() => this.hitungLuas()} style={{fontSize:13,fontWeight:'bold',color:'white',textAlign:'center',marginTop: 6}}>HITUNG LUAS</Text>    
                    </View>
            </ScrollView>
        )
    }
}
export default Layang;