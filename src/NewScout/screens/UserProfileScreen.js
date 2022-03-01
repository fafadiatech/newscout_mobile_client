import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function UserProfileScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>UPDATE PROFILE</Text>
    <View style={styles.wrapper}>
        <Text>First Name </Text>
        <TextInput style={styles.input} placeholder='First name'/>
        <Text>Last Name </Text>
        <TextInput style={styles.input} placeholder='Last name'/>
        <Text>Email </Text>
        <TextInput style={styles.input} placeholder='Enter email'/>
        <Button title='Submit' color = "red"/>
    </View>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  wrapper: {
      width: '80%',
  },
  input: {
      marginBottom: 12,
      borderWidth: 1,
      borderColor: '#bbb',
      borderRadius: 5,
      paddingHorizontal: 14,
  },
  title: {
    fontSize: 25,
    marginBottom: 12,
    fontWeight: 'bold',
    color: 'red',
}
})
 