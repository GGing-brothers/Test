import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Login from './components/Login';


const App = () => {
  return (
    <View style={styles.container}>
      <Login />
      <StatusBar />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default App;
