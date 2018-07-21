import React from 'react';
import { StyleSheet, View } from 'react-native';
import Auth, { UserContext } from './components/Auth/Auth';
import { UserStack, Signup } from './components/Routes'

export default class App extends React.Component {
  render() {
    const UserConsumer = UserContext.Consumer
    return (
      <View style={styles.container}>
        <Auth>
          <UserConsumer>
            {session => (
                ((session == '') ? <Signup> </Signup> : <UserStack session={session}></UserStack>)
            )}
          </UserConsumer>
        </Auth>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
