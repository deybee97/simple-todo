import React from "react";
import { Text,StyleSheet, View } from "react-native";


export default class Todo extends React.Component{

    componentDidMount(){
        console.log(this.props.todo)
    }

    render(){
        return <View style={style.todo}><Text style={style.todoText}>{this.props.todo}</Text></View>
    }
}

const style = StyleSheet.create({
    
    todo : {
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 9,
        backgroundColor: 'black',
        marginBottom: 3,
    },
    todoText : {
        color:"white",
        fontSize: "1.5rem"
    }
})