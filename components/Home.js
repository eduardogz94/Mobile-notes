import React from 'react';
import { ScrollView } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Button, Right, Icon} from 'native-base'

import Error from './Extra/ErrorBoundary'
import Note from './Notes/Note'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      notes: [
        {
          id:1,
          title:'My Note',
          description: 'Lorem ipsum flowesrs asdasdasasasd'
        },
        {
          id:2,
          title:'My Note Destroyer',
          description: 'Lorem flowers ipsum loasdloasdloasdasd'
        }
      ]
    }
  }
  
  componentDidMount() {
    console.log(this.state.notes)
  }
  
  render() {
    return (
    <Error>  
      <ScrollView>
        {this.state.notes.map(note => {
          return(
              <Card key={note.id}>
                <Note note={note} description={note.description} username={'eg'}/>
              </Card>
            )})}
      </ScrollView>
    </Error>
    );
  }
}


