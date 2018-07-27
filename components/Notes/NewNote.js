import React, { Component } from 'react'
import { Text, ScrollView, AsyncStorage, Keyboard } from 'react-native'
import { Container, Form, Textarea, Button, Item, Icon, Label, Input } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { addStyle } from '../../assets/css/newNote'

export default class NewNote extends Component {

    state = {
        title: '',
        description: '',
    }

    addNote = () => {
        console.log(this.state)
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
                    console.log('saved')
                    this.props.navigation.navigate('Home')
                    Keyboard.dismiss()
                }).catch(err => {
                    console.log(err)
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
                        console.log('saved')
                        this.props.navigation.navigate('Home')
                    }).catch(err => {
                        console.log(err)
                    })
                })
            }
        })
    }

    render() {
        const { navigation } = this.props;

        const id = navigation.getParam('id', 'null')

        return (
            <ScrollView style={addStyle.container}>
                <Container>
                    <Form>  
                        {/* <Text> { JSON.stringify(id) }</Text> */}

                        <Item floatingLabel>
                            <Icon active name='ios-person'/>
                            <Label>Title!</Label>
                            <Input 
                            onChangeText={title => this.setState({title:title})}
                            autoCapitalize={'none'} />
                        </Item>

                        <Item style={addStyle.description} floatingLabel>
                            <Icon active name='ios-person'/>
                            <Label>Description!</Label>
                            <Input  
                                rowSpan={10}
                                onChangeText={description => this.setState({description})} />
                        </Item>
                        
                        <Button style={addStyle.button} bordered block onPress={() => this.addNote()}>
                            <Text> Add Note!</Text>
                        </Button>

                    </Form>
                </Container>
            </ScrollView>    
        )
  }
}