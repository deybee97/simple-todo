import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Todo from "./Todo";
import {connect} from 'react-redux'
// import store from "../reduxStore/store";

class ToDoList extends React.Component{

    render(){

        // const todo = store.getState().todos
     return(
        <View>
            {this.props.todos.map((todo, index)=><Todo key={index} todo={todo}/>)}
        </View> 
    )
    }
}

const mapStateToProps = (state) =>({
    todos: state.todos
})

export default connect(mapStateToProps)(ToDoList)


