import { StatusBar } from 'expo-status-bar';
import  { StyleSheet, Text, View, Button } from 'react-native';

import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack'
import {Provider} from 'react-redux'
import store from './reduxStore/store';
import HomeScreen from './components/HomeScreen';
import TodoForm from './components/TodoForm';
import LoginScreen from './components/LoginScreen';




const Main = createNativeStackNavigator()
const Auth =  createNativeStackNavigator()

export default class App extends React.Component{

  state = {
    token: null
  }

  login = (token) => {
    this.setState({token})
  }
  render(){
    return (

      <Provider store={store}>
      <View style={styles.container}>
        
        <NavigationContainer>
        { this.state.token ? (
          <Main.Navigator initialRouteName='Home'>
            <Main.Screen name='Home' component={HomeScreen} />
            <Main.Screen name='Add Todo' component={TodoForm}/>
          </Main.Navigator>
        
        ): (
          <Auth.Navigator>
            <Auth.Screen name='Login' component={LoginScreen} initialParams={{login:this.login}} />
          </Auth.Navigator>
        )
        }
        </NavigationContainer>
        
      </View>
      </Provider>
    );

  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
   
  },
});
