import * as React from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles/Base';
import * as Colors from './styles/Colors';

import TrendingScreen from './screens/TrendingScreen';
import ForYouScreen from './screens/ForYouScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import SearchScreen from './screens/SearchScreen';
import ArticleDetailsScreen from './screens/ArticleDetailsScreen';


const Tab = createBottomTabNavigator();

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.flexible}>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Trending') {
                iconName = focused ? 'compass' : 'compass';
              } else if (route.name === 'For You') {
                iconName = focused ? 'group' : 'group';
              } else if (route.name === 'Categories') {
                iconName = focused ? 'newspaper-o' : 'newspaper-o';
              } else if (route.name === 'Search') {
                iconName = focused ? 'search' : 'search';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: Colors.basePrimaryColor,
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Trending" component={TrendingScreen} />
          <Tab.Screen name="For You" component={ForYouScreen} />
          <Tab.Screen name="Categories" component={CategoriesScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: Colors.burgerMenuTintColor,
          labelStyle: {
            fontWeight: 'bold',
            fontSize: 19,
            color: Colors.basePrimaryColor
          },
        }}
      >
        <Drawer.Screen
          name="Trending"
          options={{
            drawerIcon: config => (
              <Icon name="compass" size={30} color={Colors.basePrimaryColor} />
            ),
          }}
          component={HomeScreen}
        />
        <Drawer.Screen
          name="For You"
          options={{
            drawerIcon: config => (
              <Icon name="group" size={20} color={Colors.basePrimaryColor} />
            ),
          }}
          component={ForYouScreen}
        />
        <Drawer.Screen
          name="Article Details"
          options={{
            drawerIcon: config => (
              <Icon name="circle" size={20} color={Colors.basePrimaryColor} />
            ),
          }}
          component={ArticleDetailsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

