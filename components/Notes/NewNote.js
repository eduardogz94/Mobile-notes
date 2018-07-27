import React, { Component } from 'react'
import { Text, ScrollView, AsyncStorage, Keyboard } from 'react-native'
import { Container, Form, Textarea, Button } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class NewNote extends Component {

    state = {
        title: '',
        description: '',
    }

    componentWillUpdate() {
        alert(JSON.stringify(this.props))
    }
    
    addNote = () => {
        const d = new Date()
        const date = `${d.getDate()}-${(d.getMonth()+1)}-${d.getFullYear()}`
        AsyncStorage.getItem('0').then(first => {
            if (first == null) {
                AsyncStorage.setItem('0', JSON.stringify({
                    title: this.state.title,
                    description: this.state.description,
                    date
                })).then(async data => {
                    await AsyncStorage.setItem('counter', '0')
                    alert('saved')
                    this.props.navigation.navigate('Home')
                    Keyboard.dismiss()
                }).catch(err => {
                    alert(err)
                })
            } else {
                AsyncStorage.getItem('counter').then(counter => {
                    const new_counter = +counter+1
                    AsyncStorage.setItem(new_counter.toString(), JSON.stringify({
                        title: this.state.title,
                        description: this.state.description,
                        date
                    })).then(async data => {
                        await AsyncStorage.setItem('counter', new_counter.toString())
                        alert('saved')
                        this.props.navigation.navigate('Home', 'test')
                    }).catch(err => {
                        alert(err)
                    })
                })
            }
        })
    }

    render() {
        const { navigation } = this.props;

        const id = navigation.getParam('id', 'null')

        return (
            <ScrollView>
                <Container>
                    <Form>  
                        <Button bordered onPress={() => this.addNote()}>
                            <Text> Add Note!</Text>
                        </Button>
                        <Text> { JSON.stringify(id) }</Text>
                        <Textarea 
                            value='Title for note..' 
                            rowSpan={1}
                            onChangeText={title => this.setState({title})}
                        />
                        <Textarea 
                            value='Description for note..' 
                            rowSpan={5}
                            onChangeText={description => this.setState({description})} 
                        />
                    </Form>
                </Container>
            </ScrollView>    
        )
  }
}