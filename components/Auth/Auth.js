import React , { Component } from 'react'
import { AsyncStorage, Text,TouchableOpacity, StyleSheet } from 'react-native'

export const UserContext = React.createContext();

export default class Auth extends Component {
  constructor() {
    super()
    this.state = {
      session: ''
    }
  }  

  componentWillMount = () => {
    this.getItem('session').then(data => {
        this.state = {
          session: data
        }
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
      const data = await AsyncStorage.setItem(key,item)
      this.state = `{${key}:${data}}`
      return data;
    } catch (error) {
      console.log(error)
    }
  }

  multiSet = async (keys,values) => {
    try {
      console.log(keys)
      console.log(values)
      // await AsyncStorage.multiSet(['session', session], ['id', id])
      // this.state = {session:session, id:id}
    } catch (error) {
      console.log(error)
    }
  }

  resetSession = async () => {
    try{
      await AsyncStorage.clear()
      this.state = {}
      console.log(this.state)

    } catch (error) {
      console.log(error)
    }
  }  

  checkSession() {
    this.getItem('session').then(data => {
      if (data !== null) {
        alert(data)
          return data;
      } else {
        throw new Error('No session found');
      }
    }).done()
  }

    render() {
    return (
      <UserContext.Provider value={this.state.session}>
{/*           
          <TouchableOpacity onPress={() => this.checkSession()}>
            <Text style={styles.text} >check session</Text>
          </TouchableOpacity> */}
          
          <TouchableOpacity onPress={() => this.resetSession()}>
            <Text style={styles.text}>reset session</Text>
          </TouchableOpacity>
          
          <Text style={styles.text}>{this.state.session}</Text>
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
