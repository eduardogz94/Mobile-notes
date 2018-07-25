import React, { Component } from 'react'
import { Text, ScrollView, AsyncStorage, Keyboard } from 'react-native'
import { Container, Form, Textarea, Button } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class NewNote extends Component {

    state = {
        title: '',
        description: '',
    }
    
    addNote = () => {
        AsyncStorage.getItem('1').then(first => {
            if (first == null) {
                AsyncStorage.setItem('1', JSON.stringify({
                    title: this.state.title,
                    description: this.state.description
                })).then(async data => {
                    await AsyncStorage.setItem('counter', '1')
                    alert('saved')
                    this.props.navigation.navigate('Home',)
                    Keyboard.dismiss()
                }).catch(err => {
                    alert(err)
                })
            } else {
                AsyncStorage.getItem('counter').then(counter => {
                    const new_counter = +counter+1
                    AsyncStorage.setItem(new_counter.toString(), JSON.stringify({
                        title: this.state.title,
                        description: this.state.description
                    })).then(async data => {
                        await AsyncStorage.setItem('counter', new_counter.toString())
                        alert('saved')
                        this.props.navigation.navigate('Home', 'test')
                        Keyboard.dismiss()
                    }).catch(err => {
                        alert(err)
                    })
                })
            }
        })
    }

    render() {
        return (
            <ScrollView>
                <Container>
                    <Form>  
                        <Button bordered onPress={() => this.addNote()}>
                            <Text> Add Note!</Text>
                        </Button>
                        <Textarea placeholder='Title for note..' rowSpan={3}
                                  onChangeText={title => this.setState({title})}
                        />
                        <Textarea placeholder='Description for note..' rowSpan={15}
                                  onChangeText={description => this.setState({description})}
                        />
                    </Form>
                </Container>
            </ScrollView>    
        )
  }
}