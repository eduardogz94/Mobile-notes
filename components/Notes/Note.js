import React, { Component } from 'react'
import { ListItem } from 'react-native-elements'


export default class User extends Component {
    
  deleteNote = (id) => {
    alert(id)

  }

  render() {
    // const { id, username, created_at, picture} = this.props.user;
      return (
        <ListItem
          key='1'
          title='test'
          subtitle='Hello World'
          onPress={() => this.deleteNote(id)}/>
      )
  }
}