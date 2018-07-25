import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardItem, Body, Left, Button, Right } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class User extends Component {
    
  deleteNote = (id) => {
    alert(`edit note with id ${id}`)
  }

  editNote = (id) => {
    alert(`edit note with id ${id}`)
  }

  render() {
    const { id } = this.props.note;
      return (
        <View>
          <Card>
              <CardItem>
                  <Left>
                    <Body>
                        <Text note>{this.props.username}</Text>
                        <Text note>Jan 15, 2018</Text>
                    </Body>     
                  </Left>
              </CardItem>

              <CardItem >
                  <Left>
                      <Button transparent>
                          <Ionicons
                              size={25}  
                              color={'blue'}
                              name={'ios-heart-outline'}/>
                      </Button>
                      <Button transparent>
                          <Ionicons
                              size={25}  
                              color={'blue'}
                              name={'ios-build-outline'}
                              onPress={() => this.editNote(id)}
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

              <CardItem>
                  <Text>
                    {this.props.description}
                  </Text>
              </CardItem>

          </Card>
        </View>
      )
  }
}

