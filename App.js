import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'

export default class Inputs extends Component {
  constructor(){
    super();
    this.state = {
      height: '',
      mass: '',
      BMI: '',
      Result: '',
    }
  }
  calculate = () => {
    var result = (parseFloat(this.state.mass)*10000)/(parseFloat(this.state.height)*parseFloat(this.state.height));
    result = result.toFixed(2);
    this.setState({ BMI: result })
    if(result<18.5){
      this.setState({Result:'Underweight'})
    }
    else if(result>=18.5&&result<25){
      this.setState({Result:'Normal weight'})
    }
    else if(result>=25&&result<30){
      this.setState({Result:'Overweight'})
    }
    else if(result>=30){
      this.setState({Result:'Obese'})
    }
    else{
       alert('Incorrect Input!');
       this.setState({Result:''})
    }
  }
  render() {
    return (
      <View style={stylo.Container}>
        <Text style={stylo.heading}>BMI Calculator{'\n'}</Text>
        <Text style={{fontSize:15}}>Enter the following.{'\n'}</Text>
        <TextInput style={stylo.input}
          placeholder = "Height (in cm)"
          onChangeText = {(text)=>{this.setState({height:text})}}/>

        <TextInput style={stylo.input}
          placeholder = "Weight (in kg)"
          onChangeText = {(value)=>{this.setState({mass:value})}}/>

        <Button title="Calculate" onPress={this.calculate}/>
          
        <Text style={stylo.answer}>{'\n'+this.state.BMI}</Text>
        <Text style={stylo.answer}>{this.state.Result}</Text>
      </View>
    )
  }
}

const stylo = StyleSheet.create({
  Container:{
    flex:1,
    padding:20,
  },
  heading:{
    justifyContent:'center',
    alignSelf:'center',
    fontSize:25,
    color:'navy',
    fontWeight:'bold',
    textDecorationLine:'underline',
  },
  input:{
    marginVertical:10,
    borderWidth:1,
    borderRadius:6
  },
  answer:{
    justifyContent:'center',
    alignSelf:'center',
    fontSize:15,
  }
})