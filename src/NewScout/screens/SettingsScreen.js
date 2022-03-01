import * as React from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView
} from 'react-native';

import styles from '../styles/Base';
import IconListViewItem from '../components/IconListViewItem';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import SearchScreen from './SearchScreen';
import ForgotPassword from './ForgotPassword';
import UserProfileScreen from './UserProfileScreen';

const SettingsStack = createStackNavigator();
    
const SettingsStackScreen=({navigation}) =>{
    return (
      <SettingsStack.Navigator >
        <SettingsStack.Screen name="Settings" component={SettingsScreen}  />
        <SettingsStack.Screen name="Login" component={LoginScreen}  />
        <SettingsStack.Screen name="Forgot Password" component={ForgotPassword}  />
        <SettingsStack.Screen name="Register" component={RegisterScreen}  />
        <SettingsStack.Screen name="User Profile" component={UserProfileScreen}  />
      </SettingsStack.Navigator>
    );
  }
     
const SettingsScreen= ({navigation}) => {
    return(
    <View style={styles.flexible}>
        <Text  onPress={() => navigation.navigate('Login')} >Login</Text>
        <Text  onPress={() => navigation.navigate('Register')} >Register</Text>
        <Text  onPress={() => navigation.navigate('User Profile')} >User Profile</Text>

    </View>
    //<SearchScreen/>
    )
}


export default SettingsStackScreen;