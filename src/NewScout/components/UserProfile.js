import { View, Text, TextInput, Button,} from 'react-native'
import React from 'react'
import styles from '../styles/Settings'

export default function UserProfile() {
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
