import React, { Component } from 'react'
import { Text, ScrollView, Keyboard, AsyncStorage } from 'react-native'
import { Container, Form, Textarea, Button, Item, Icon, Label, Input } from 'native-base'

import Error from '../Extra/ErrorBoundary'

import { addStyle } from '../../assets/css/newNote'


export default class EditProfile extends Component {
    state = {
        title: '',
        description: '',
    }

    editNote = () => {
        const id = this.props.navigation.state.params;
        const d = new Date()
        const date = `${d.getDate()}-${(d.getMonth()+1)}-${d.getFullYear()}`
        
        AsyncStorage.getItem(`${id}`).then(first => {
            AsyncStorage.mergeItem(`${id}`, JSON.stringify({
                title:this.state.title,
                description:this.state.description,
                date}), result => {
                    this.props.navigation.navigate('Home', {edited:true})
                });
        })
    }
    

    render() {
    const id = this.props.navigation.state.params;
    return (
        <Error>
            <ScrollView style={addStyle.container}>
                <Container>
                    <Form>  
                        <Text>ID NOTE { JSON.stringify(id) }</Text>

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
                        
                        <Button style={addStyle.button} bordered block onPress={() => this.editNote()}>
                            <Text> Edit your note!</Text>
                        </Button>

                    </Form>
                </Container>
            </ScrollView>
        </Error>
    )}
}