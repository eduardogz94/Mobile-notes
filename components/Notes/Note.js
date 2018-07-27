import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { Card, CardItem, Body, Left, Button, Right } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { notesStyle } from '../../assets/css/note'

export default class Note extends Component {

    render() {
        const { id } = this.props.note;
        return (
            <View style={notesStyle.container}>
                <Card>
                    <CardItem>
                        <Left>
                            <Body>
                                <Text style={notesStyle.text}>{this.props.note.title}</Text>
                                <Text style={notesStyle.text}>{this.props.note.date}</Text>
                            </Body>     
                        </Left>
                    </CardItem>

                    <CardItem>
                        <Text style={notesStyle.description}>Description</Text>
                    </CardItem>
                    <Text>{this.props.description}</Text>
                    
                    <CardItem >    
                        <Left>
                            <Button transparent>
                                <Ionicons
                                    size={25}  
                                    color={'purple'}
                                    name={'ios-build-outline'}
                                    onPress={() => this.props.edit(id)}
                                    />
                            </Button>
                        </Left>
                        <Right>
                            <Button transparent>
                                <Ionicons
                                    size={35}  
                                    color={'purple'}
                                    name={'ios-close-outline'}
                                    onPress={() => this.props.delete(id)}
                                    />
                            </Button>
                        </Right>    
                    </CardItem>
                </Card>
            </View>
        )
    }
}

