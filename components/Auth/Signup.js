import React, { Component }from 'react'
import { ScrollView } from 'react-native'
import { FormValidationMessage, Button } from 'react-native-elements'

import Error from '../Extra/ErrorBoundary'
import Title from '../Extra/HomeTitle'
import Input from '../Extra/Inputs'

import Auth from './Auth';

import { inputs , butons } from '../../assets/css/styles'

const auth = new Auth()

export default class SignupForm extends Component {
    constructor(){
		super()
		this.state = {
			passwords_error: '',
			username_error: '',
			username: '',
			password: '',
			password_confirmation: '',
			image: null,
			type: null
		}
	}
	
    
	signUp = (event) => {
		event.preventDefault()
		this.checkValues()
		if ( (this.state.username || this.state.password || this.password_confirmation) == '' ) {
			
			if (this.state.password === this.state.password_confirmation) {
				
				const options = {
					username: this.state.username,
					password: this.state.password
				}
				
			} else {
				this.setState({passwords_error: 'Passwords didnt match'})
			}
		} else {
			console.log('everything must be filled')
		}
	}

	checkValues = () => {
		const { username, password, password_confirmation } = this.state
		username == '' ? this.setState({username_error:'Cant be blank'}) 
			: this.setState({username_error: ''})

		password == '' ? this.setState({passwords_error:'Cant be blank and both must be equals'}) 
			: this.setState({passwords_error:''})

		password_confirmation == '' ? this.setState({passwords_error:'Cant be blank and both must be equals'}) 
			: this.setState({passwords_error:''})
	} 
	

  	render() {
		return (
		<Error>
			<ScrollView style={inputs.inputWrapper}>
				<Title tagline='Sigup Form'/>
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

				<Input
					label='Password Confirmation'
					onChangeText={password_confirmation => this.setState({password_confirmation:password_confirmation})}
					placeholder = 'Password Confirmation'
					secureTextEntry={true}
					autoCapitalize={'none'}
				/>
				<FormValidationMessage>{this.state.passwords_error}</FormValidationMessage>

				<Button 
					style={{marginTop: 50}}
					rightIcon={{name: 'code'}}
					onPress={this.signUp}
					title = 'Sign up'
				/>
			</ScrollView>
		</Error>
		)
  	}

}
