import { View, Text, TextInput, Button, TouchableOpacity, } from 'react-native'
import React from 'react'
import styles from '../styles/Settings'

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>SIGNUP</Text>
    <View style={styles.wrapper}>
        <Text>First Name </Text>
        <TextInput style={styles.input} placeholder='First name'/>
        <Text>Last Name </Text>
        <TextInput style={styles.input} placeholder='Last name'/>
        <Text>Email </Text>
        <TextInput style={styles.input} placeholder='Enter email'/>
        <Text>Password </Text>
        <TextInput style={styles.input}  placeholder='Enter password' secureTextEntry/>
        <Button title='SIGNUP' color = "red"/>
    </View>
    <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
    </View>
  </View>
)
}
