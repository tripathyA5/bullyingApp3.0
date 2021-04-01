import React,{Component} from 'react';

import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import db from '../Config'
import firebase from "firebase";
export default class RequestScreen extends Component{
constructor(){
    super();
    this.state={
        nameAndTopic:'',
        writeRequest:'',
    }
}
addRequest = async (nameAndTopic, writeRequest) => {
   

    db.collection("requested_books").add({
     // user_id: userId,
      name_and_topic: nameAndTopic,
      write_request:writeRequest
    
    });
    alert("Request Added")
}

    render(){
        return(
            <View>
            <Text>
                Request Screen
            </Text>
            <TextInput
            multiline={true}
            placeholder="Name and Topic"
            onChangeText= {(text)=>{
                this.setState({
                    nameAndTopic:text
                })
            }}
            /> 
              <TextInput
            multiline={true}
            placeholder="Write Text Here"
            onChangeText={(text)=>{
                this.setState({
                    writeRequest:text
                })
            }}
            />
            <TouchableOpacity
                 onPress={() => {
                    this.addRequest(
                      this.state.nameAndTopic,
                      this.state.writeRequest)}}
            >
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>
            </View>
        )
    }
}