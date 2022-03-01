import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

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
      link: {
          color: 'blue',
      },
      title: {
        fontSize: 25,
        marginBottom: 12,
        fontWeight: 'bold',
        color: 'red',
    },
    })
    