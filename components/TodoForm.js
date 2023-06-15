import React from 'react'
import {TextInput, Button, View} from 'react-native'
import store from '../reduxStore/store'
import { todoAction } from '../reduxStore/actions'
import {connect} from 'react-redux'

class TodoForm extends React.Component{


    state = {
         todo: ""
    }

    handleChange = (text) => {
        this.setState({todo:text})
    }

    handleSubmit = () =>{
        this.props.todoAction(this.state.todo)
        this.props.navigation.navigate('Home')
    }

    render(){
        return(
            <View>
                <TextInput value={this.state.todo} onChangeText={this.handleChange}/>
                <Button title='Add new todo' onPress={this.handleSubmit}/>
            </View>
        )
    }
}


export default connect(null,{todoAction:todoAction})(TodoForm)