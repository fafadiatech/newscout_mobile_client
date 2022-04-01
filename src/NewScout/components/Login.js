import { View, Text, TextInput, Button, TouchableOpacity, } from 'react-native'
import React from 'react'
import styles from '../styles/Settings'

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>LOGIN</Text>
      <View style={styles.wrapper}>
          <Text>Email </Text>
          <TextInput style={styles.input} placeholder='Enter email'
          />
          <Text>Password </Text>
          <TextInput style={styles.input}  placeholder='Enter password' 
           secureTextEntry/>
          <Button title='Login' color = "red"/>
          <TouchableOpacity onPress={()=> navigation.navigate('Forgot Password')}>
              <Text style={styles.link}>Forgot Password</Text>
          </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
              <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}
