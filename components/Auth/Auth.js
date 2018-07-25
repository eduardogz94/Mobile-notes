import React , { Component } from 'react'
import { AsyncStorage, Text,TouchableOpacity, StyleSheet } from 'react-native'

export const UserContext = React.createContext();

export default class Auth extends Component {
  constructor() {
    super()
    this.state = {
      username: {
        notes:[]
      }
    }
  }  

  componentWillMount = () => {
    this.getItem('username').then(data => {
        // this.setState({
        //   username: data
        // })
        console.log(data)
    }).done();
  }
  
  getItem = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key)
      return data;    
    } catch (error) {
      console.log(error)
    }
  }
  
  setItem = async (key,item) => {
    try {
      await AsyncStorage.setItem(key,item)
      this.state = `{${key}:${item}}`
      console.log(this.state)
    } catch (error) {
      console.log(error)
    }
  }

  multiSet = async (keys,values) => {
    try {
      storage = []
      for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        const value = values[index];
        storage.push([key,value])
      }
      // const data = await AsyncStorage.multiSet(storage)
      // return data
      // this.state = {username:username, id:id}
    } catch (error) {
      console.log(error)
    }
  }

  resetSession = async () => {
    try{
      await AsyncStorage.clear()
      this.setState({username:''})
    } catch (error) {
      console.log(error)
    }
  }  

  checkSession() {
    this.getItem('username').then(data => {
      if (data !== null) {
        alert(data)
        return data;
      } else {
        throw new Error('No username found');
      }
    }).done()
  }

    render() {
    return (
      <UserContext.Provider value={this.state.username}>
          
          <TouchableOpacity onPress={() => this.checkSession()}>
            <Text style={styles.text} >check username</Text>
          </TouchableOpacity>
          
          {this.props.children}
      
      </UserContext.Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 150,
    marginTop: 30,
  }
});
