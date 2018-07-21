import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { FormValidationMessage, Button } from 'react-native-elements'

import Error from '../Extra/ErrorBoundary'
import Title from '../Extra/HomeTitle'
import Input from '../Extra/Inputs'

import Auth from './Auth';

import { butons, inputs } from '../../assets/css/styles'

const auth = new Auth()

export default class LoginForm extends Component {
    constructor(){
        super()  

        this.state = {
            passwords_error: '',
            username_error: '',
            username: '',
            password: ''
        }
    }

    logIn = (event) => {
        event.preventDefault()
        this.checkValues()

        if ( (this.state.password || this.state.username) !== '') {

            auth.setItem('session',this.state.username),
            auth.setItem('id', JSON.stringify(response.user.id)),
            this.props.navigation.navigate('Home')
            
            // ERROR MESSAGE this.setState({username_error: 'Username doesnt exist'}) ;
        } else {
        alert('cant send request')
        }
    }

    checkValues = () => {
        const { username, password } = this.state
        username == '' ? this.setState({username_error:'Cant be blank'}) 
            : this.setState({username_error: ''})

        password == '' ? this.setState({passwords_error:'Cant be blank'}) 
        : this.setState({passwords_error:''})
    } 

    render() {
        return (
        <Error>
            <ScrollView style={inputs.inputWrapper}>
                <Title tagline='Login Form'/>
                <Input 
                    label='Username'
                    onChangeText={username => this.setState({username:username})}
                    placeholder = 'Username'
                    autoCapitalize={'none'}
                />
                <FormValidationMessage>{this.state.username_error}</FormValidationMessage>

                <Input 
                    label='Password'
                    onChangeText={password => this.setState({password:password})}
                    placeholder = 'Password'
                    secureTextEntry={true}
                    autoCapitalize={'none'} 
                />
                <FormValidationMessage>{this.state.passwords_error}</FormValidationMessage>

                <Button style={{marginTop: 50}}
                    onPress={this.logIn}
                    title = 'Log in'
                />
            </ScrollView>
        </Error>
        )
    }
}

