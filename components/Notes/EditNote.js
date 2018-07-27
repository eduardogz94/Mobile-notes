import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Button } from 'react-native-elements'

import Error from '../Extra/ErrorBoundary'


export default class EditProfile extends Component {
    constructor() {
    super()
        this.state = {
            username: '',
            password: ''
        }
    }

    editProfile = () => {
        if((this.state.password || this.state.username) !== '') {
            const options = {
                username: this.state.username,
                password: this.state.password
            }

             this.setState({username:response.user.username})
        }
    }
    

    render() {
    return (
        <Error>
            <ScrollView >
            </ScrollView>
        </Error>
    )}
}