import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements'

import Error from './Extra/ErrorBoundary'
import Note from './Notes/Note'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      notes: {
        id:1
      }
    }
  }
  
  componentDidMount() {
    console.log(this.state.notes)
  }
  
  render() {
    return (
    <Error>  
      <ScrollView>
        <Text>sasdasdasdadasd</Text>
        {/* {this.state.notes.map(note => {
          return(
              <Card key={note.id}  
                  title='HELLO WORLD'
                  image = {require('../assets/images/index.jpeg')}>
                <Note note={note}/>
              </Card>
            )})} */}
      </ScrollView>
    </Error>
    );
  }
}


