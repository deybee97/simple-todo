import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Todo from "./Todo";
import { todoList } from "../data/todolist";


export default class ToDoList extends React.Component{

    render(){
     return(
        <View>
            {todoList.map((todo, index)=><Todo key={index} todo={todo}/>)}
        </View> 
    )
    }
}


