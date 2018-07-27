import React from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Button, Right, Icon} from 'native-base'

import Error from './Extra/ErrorBoundary'
import Note from './Notes/Note'

import { homeStyle } from '../assets/css/home'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            notes: []
        }
    }
  
    componentDidMount() {
        this.getNotes()
    }

    getNotes = () => {
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
                stores.map((result, i, store) => {
                    // get at each store's key/value so you can work with it
                    let key = store[i][0]
                    let value = JSON.parse(store[i][1])
                    console.log(value)
                    const note = {
                        id: key,
                        title: value.title,
                        description: value.description,
                        date: value.date
                    }
                    this.setState({
                        notes: this.state.notes.concat(note)
                    })
                })
            })
        })
    }

    editNote = id => {
        this.props.navigation.navigate('Edit',  id )
    }

    deleteNote = id => {
        AsyncStorage.removeItem(id).then(success => {
            this.state = {notes:[]}
        })
        this.getNotes()
    }
  
    render() {
        return (
        <Error>  
            <ScrollView style={homeStyle.container}>
                {this.state.notes.map(note => {
                return(
                    <Card key={note.id} style={homeStyle.notes}>
                        <Note note={note} description={note.description} edit={this.editNote} delete={this.deleteNote} />
                    </Card>
                    )})}
            </ScrollView>
        </Error>
        );
    }
}


