import { StatusBar } from 'expo-status-bar';
import  { StyleSheet, Text, View, Button } from 'react-native';

import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack'


import HomeScreen from './components/HomeScreen';
import TodoForm from './components/TodoForm';
import LoginScreen from './components/LoginScreen';
import { connect } from 'react-redux';



const Main = createNativeStackNavigator()
const Auth =  createNativeStackNavigator()

class Nav extends React.Component{

  // state = {
  //   token: null
  // }

  // login = (token) => {
  //   this.setState({token})
  // }
  render(){
    return (

 
      <View style={styles.container}>
        
        <NavigationContainer>
        { this.props.user.token ? (
          <Main.Navigator initialRouteName='Home'>
            <Main.Screen name='Home' component={HomeScreen} />
            <Main.Screen name='Add Todo' component={TodoForm}/>
          </Main.Navigator>
        
        ): (
          <Auth.Navigator>
            <Auth.Screen name='Login' component={LoginScreen} />
          </Auth.Navigator>
        )
        }
        </NavigationContainer>
        
      </View>

    );

  }
  
}

const mapStateToProps = (state)=>({
   
   user: state.user
})

export default connect(mapStateToProps)(Nav)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
   
  },
});
