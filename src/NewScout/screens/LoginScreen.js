import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import ForgotPassword from './ForgotPassword'

export default function LoginScreen({navigation}) {

//   const [email, setEmail] = useState(null);
//   const [password, setPassword] = useState(null);

  return (
    <View style={styles.container}>
    <Text style={styles.title}>LOGIN</Text>
      <View style={styles.wrapper}>
          <Text>Email </Text>
          <TextInput style={styles.input} placeholder='Enter email'
            //   onChangeText={text => setEmail(text)}
          />
          <Text>Password </Text>
          <TextInput style={styles.input}  placeholder='Enter password' 
        //    onChangeText={text => setPassword(text)}
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