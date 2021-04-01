import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert, Modal } from 'react-native';

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
          emailId : '',
          password: '',
          firstname:'',
          lastname:'',
          address:'',
          contact:'',
          confirmPassword:'',
          isModalVisible:false
        }
      }
    login = async (email, password)=>{
        if(email&&password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response){
this.props.navigation.navigate("HomeScreen")
                }
            }
            catch(error){
                switch (error.code) {
                    case 'auth/user-not-found':
                      alert("user dosen't exists")
                      console.log("doesn't exist")
                      break
                    case 'auth/invalid-email':
                      alert('incorrect email or password')
                      console.log('invaild')
                      break
            }
        }
    }
        else{
            alert("Enter email & password")
        }
    }
    showModal = ()=>{
      return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}
        >
          <View>
            <ScrollView>
              <KeyboardAvoidingView>
                <Text>
                  Registration
                </Text>
                <TextInput
                placeholder="firstname"
                maxLength={12}
                onChangeText={(text)=>{
                  this.setState({
                    firstname:text
                  })
                }
              }
                />
                <TextInput
                placeholder="lastname"
                maxLength={20}
                onChangeText={(text)=>{
                  this.setState({
                    lastname:text
                  })
                }
              }
              style={styles.TextInput}
                />
                 <TextInput
                placeholder="address"
                multiline={true}
                onChangeText={(text)=>{
                  this.setState({
                    address:text
                  })
                }
              }
                />
                <TextInput
                placeholder="contact"
                maxLength={10}
                keyboardType={"numeric"}
                onChangeText={(text)=>{
                  this.setState({
                    contact:text
                  })
                }
              }
                />
                <TextInput
                placeholder="password"
                secureTextEntry={true}
                maxLength={12}
                onChangeText={(text)=>{
                  this.setState({
                    password:text
                  })
                }
              }
                />
                  <TextInput
                placeholder="testEmail@gmail.com"
                keyboardType={"email-address"}
                maxLength={12}
                onChangeText={(text)=>{
                  this.setState({
                    emailId:text
                  })
                }
              }
                />
                  <TextInput
                placeholder="confirm password"
                maxLength={12}
                secureTextEntry={true}
                onChangeText={(text)=>{
                  this.setState({
                    confirmPassword:text
                  })
                }
              }
                />
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </Modal>
  
  
      )
    }
    userLogin = (emailId, password)=>{
      firebase.auth().signInWithEmailAndPassword(emailId, password)
      .then(()=>{
        return Alert.alert("Successfully Login")
      })
      .catch((error)=> {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
      })
    }
  
    userSignUp = (emailId, password) =>{
      firebase.auth().createUserWithEmailAndPassword(emailId, password)
      .then((response)=>{
        return Alert.alert("User Added Successfully")
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
      });
    }
    render(){
        return(
            
          <KeyboardAvoidingView>
              <View>
                  <Image
                  source={require('../images/news-no-bullying.jpg')}
                  style={{width:600, height: 300}}
                  />
              
               <Text
               styles={styles.label}
               > Bullying Advisary App </Text>
              </View>
              <View>
                  <TextInput 
                  placeholder="testemail@gmail.com"
                  keyboardType="email-address"
                  onChangeText={(text)=>{
                    this.setState({
                      emailId: text
                    })
                  }}
                  style={styles.TextInput}
                  />
                <TextInput 
                placeholder="Enter Password"
                secureTextEntry={true}
                onChangeText={(text)=>{
                    this.setState({
                      password: text
                    })
                  }}
                  style={styles.TextInput}
                />

              </View>

              <View>
                  <TouchableOpacity
                  onPress ={()=>{
                      this.login(this.state.emailId,this.state.password)
                   
            
                this.props.navigation.navigate('HomeScreen')
           
           
                  }}
                  style={styles.loginButton}>
                    <Text
                    style={styles.loginButtonText}
                    >
                        Login
                    </Text>
                  </TouchableOpacity
                  
                  >
              </View>
          </KeyboardAvoidingView>
        
        )
    }
}
        
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#6fc0b8"
    },
    loginBox: {
      width: "80%",
      height: 50,
      borderWidth: 1.5,
      borderColor: "#ffffff",
      fontSize: 20,
      paddingLeft: 10
    },
    button: {
      width: "80%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
      backgroundColor: "#ffff",
      shadowColor: "#000",
      marginBottom: 10,
      shadowOffset: {
        width: 0,
        height: 8
      },
      shadowOpacity: 0.3,
      shadowRadius: 10.32,
      elevation: 16
    },
    buttonText: {
      color: "#32867d",
      fontWeight: "200",
      fontSize: 20
    },
    label: {
      fontSize: 13,
      color: "#717D7E",
      fontWeight: "bold",
      paddingLeft: 10,
      marginLeft: 20
    },
    
    loginButton: {
      width: "75%",
      height:50,
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
      borderRadius:3,
      backgroundColor: "#32867d",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop: 10
    },
    loginButtonText: {
      fontSize: 23,
      fontWeight: "bold",
      color: "black"
    },
   
    scrollview: {
      flex: 1,
      backgroundColor: "#fff"
    },
   
   
    bullyingImage: {
      width: "70%",
      height: "100%",
      resizeMode: "stretch"
    },
    TextInput: {
      flex: 0.5,
      alignItems: "center",
      justifyContent: "center"
    },
   
  });