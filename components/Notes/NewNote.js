import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import { Container, Form, Textarea, Button } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Auth from '../Auth/Auth'
const auth = new Auth()

export default class NewNote extends Component {

    state = {
        description: '',
    }
    
    addNote = () => {
        auth.multiSet(['username','note'],['eduardo','this'], response => {
            console.log(response)
        })
    }

    render() {
        return (
            <ScrollView>
                <Container>
                    <Form>  
                        <Textarea placeholder='Description for note..' rowSpan={15}
                                  onChangeText={description => this.setState({description})}
                        />
                        <Button bordered onPress={() => this.addNote()}>
                            <Text> Add Note!</Text>
                        </Button>
                    </Form>
                </Container>
            </ScrollView>    
        )
  }
}