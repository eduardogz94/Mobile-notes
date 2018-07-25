import React from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Button, Right, Icon} from 'native-base'

import Error from './Extra/ErrorBoundary'
import Note from './Notes/Note'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            notes: []
        }
    }
  
    componentDidMount() {
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
                stores.map((result, i, store) => {
                // get at each store's key/value so you can work with it
                let key = store[i][0]
                let value = JSON.parse(store[i][1])
                const note = {
                    id: key,
                    title: value.title,
                    description: value.description
                }
                this.setState({ notes: this.state.notes.concat ( note ) })
                })
            })    
        })
    }

    newNote(note) {
        this.setState({ notes: this.state.notes.concat(note)})
    }
  
    render() {
        return (
        <Error>  
            <ScrollView>
                {this.state.notes.map(note => {
                return(
                    <Card key={note.id}>
                        <Note note={note} description={note.description}/>
                    </Card>
                    )})}
            </ScrollView>
        </Error>
        );
    }
    }


