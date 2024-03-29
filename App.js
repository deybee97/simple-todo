import { StatusBar } from 'expo-status-bar';
import  { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import React from 'react';
import Nav from './Nav';
import {store, persistor} from './reduxStore/store';
import { PersistGate } from 'redux-persist/integration/react';


export default class App extends React.Component{

  // state = {
  //   token: null
  // }

  // login = (token) => {
  //   this.setState({token})
  // }
  render(){
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Nav/>
        </PersistGate>
        </Provider>
    );

  }
  
}

// const mapStateToProps = (state)=>({
   
//    user: state.user
// })

// export default connect(mapStateToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
   
  },
});
