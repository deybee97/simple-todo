import React from 'react'
import {TextInput, Button, View} from 'react-native'


export default class TodoForm extends React.Component{


    state = {
        todo: ""
    }
    handleChange = (text) => {
        this.setState({todo:text})
    }
    render(){
        return(
            <View>
                <TextInput value={this.state.todo} onChangeText={this.handleChange}/>
                <Button title='Add new todo' onPress={()=> this.props.navigation.navigate('Home',{
                    todo: this.state.todo
                })}/>
            </View>
        )
    }
}