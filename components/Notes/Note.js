import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { Card, CardItem, Body, Left, Button, Right } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class Note extends Component {
    
    deleteNote = (id) => {
        AsyncStorage.removeItem(id).then(success => {
            alert('Note deleted!')
            this.props.navigation.navigate('Home')
        })

    }


    render() {
        const { id } = this.props.note;
        return (
            <View>
            <Card>
                <CardItem>
                    <Left>
                        <Body>
                            <Text note>{this.props.note.title}</Text>
                            <Text note>{this.props.note.date}</Text>
                        </Body>     
                    </Left>
                </CardItem>

                <CardItem>
                    <Text>
                        {this.props.description}
                    </Text>
                </CardItem>
                
                <CardItem >    
                    <Left>
                        <Button transparent>
                            <Ionicons
                                size={25}  
                                color={'blue'}
                                name={'ios-build-outline'}
                                onPress={() => this.props.edit(id)}
                                />
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Ionicons
                                size={25}  
                                color={'blue'}
                                name={'ios-close-outline'}
                                onPress={() => this.deleteNote(id)}
                                />
                        </Button>
                    </Right>    
                </CardItem>
            </Card>
        </View>
        )
    }
}

