import React from "react";
import ToDoList from "./TodoList";
import {View, Button,Text} from 'react-native'



export default class HomeScreen extends React.Component{
   
    state = {
        showTodo: false
    }
    
    componentDidUpdate(){
        console.log(this.props.route.params)
    }


    render(){
        return(
            <View>
              
              <Button title='Show TODOLIST' onPress={()=>this.setState({showTodo:!this.state.showTodo})}/>
              <Button onPress={()=> this.props.navigation.navigate('Add Todo')} title='Add Todo'/>
              {this.state.showTodo && <ToDoList/>}
            </View>
        )
    }
}



