import { View, Text, TextInput, Button, TouchableOpacity, } from 'react-native'
import React from 'react'
import styles from '../styles/Settings'

export default function ForgotPassword({navigation}) {
  return (
        <View style={styles.container}>
        <Text style={styles.title}>Forgot Password?</Text>
        <View style={styles.wrapper}>
            <Text>Email </Text>
            <TextInput style={styles.input} placeholder='Enter Email'/>
           <Button title='Submit' color = "red"/>
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
