import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import loginApi from "../api/login";
import { connect } from "react-redux";
import { loginUser } from "../reduxStore/actions";



class LoginScreen extends React.Component {

    state ={
        email: "",
        password: "",
    }

    handleLogin = async () => {
      //   const {login} = this.props.route.params

      //  const token = await loginApi(this.state.email, this.state.password)

      //  login(token)
      this.props.loginUser(this.state.email, this.state.password)
        
    }

    handleEmail = (email) => {

        this.setState({email})
    }

    handlePassword = (password) => {

        this.setState({password})
    }


    render(){
        return(
            <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={this.state.email}
          onChangeText={this.handleEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={this.state.password}
          onChangeText={this.handlePassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
        )
     
    }
}


export default connect(null,{loginUser:loginUser})(LoginScreen)


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 40,
      backgroundColor: '#f8f8f8',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#007bff',
      borderRadius: 8,
      paddingVertical: 12,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    });