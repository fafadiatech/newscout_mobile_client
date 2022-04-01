import * as React from 'react';
import {
  SafeAreaView,
  Text, Image,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
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
import ArticleListScreen from './screens/ArticleListScreen';
import ArticleDetailsScreen from './screens/ArticleDetailsScreen';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Header = createStackNavigator();
const MainStack = createStackNavigator();

function AllTabs({route, navigation}) {

  var initialRoute = 'Trending';
  if(route && route.params && route.params.selectedTabName){
    initialRoute = route.params.selectedTabName;
  }

  return (
    <SafeAreaView style={styles.flexible}>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName={initialRoute}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Trending') {
                iconName = focused ? 'compass' : 'compass';
              } else if (route.name === 'For You') {
                iconName = focused ? 'group' : 'group';
              } else if (route.name === 'Categories') {
                iconName = focused ? 'columns' : 'columns';
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

function AllScreens({route, navigation}) {

  var selectedTabName = '';
  if(route && route.params && route.params.selectedTabName){
    selectedTabName = route.params.selectedTabName;
  }

  return (
    <NavigationContainer independent={true}>
      <MainStack.Navigator>
        <MainStack.Screen name="AllTabs" component={AllTabs} initialParams={{ selectedTabName: selectedTabName }} />
        <MainStack.Screen name="Articles List" component={ArticleListScreen}   options={{ headerShown: true, title: 'Back' }} />
        <MainStack.Screen name="Article Details" component={ArticleDetailsScreen}   options={{ headerShown: true, title: 'Back' }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

function ScreensWithHeader({route, navigation}) {

  var selectedTabName = '';
  if(route && route.params && route.params.selectedTabName){
    selectedTabName = route.params.selectedTabName;
  }

  return (
    <Header.Navigator>
      <Header.Screen
        name="NewScout"
        component={AllScreens}
        initialParams={{ selectedTabName: selectedTabName }}
        options={{
          title: 'NewScout',
          headerStyle: {
            backgroundColor: Colors.baseBackgroundPrimaryColor,
          },
          headerLeft: () => {
            return(
              <Icon
                name={'bars'}
                size={25}
                color={'red'}
                style={{marginLeft: 13}}
                onPress={() => {navigation.openDrawer()}}
              />
            )
          },
          headerRight : () => {
            return (
              <Icon
                name={'gear'}
                size={25}
                color={'red'}
                style={{ marginRight: 13 }}
                onPress={() => navigation.navigate('Search')}
              />
            )
          },
          headerTitle: () => (
            <Image style={{ width: 130, height: 48 }} source={require("./assets/Images/logo.png")} />
          ),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            color: Colors.iconColor,
          },
        }}
      />
    </Header.Navigator>
  );
}

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
          component={ScreensWithHeader}
          initialParams={{ selectedTabName: 'Trending'}}
        />
        <Drawer.Screen
          name="For You"
          options={{
            drawerIcon: config => (
              <Icon name="group" size={20} color={Colors.basePrimaryColor} />
            ),
          }}
          component={ScreensWithHeader}
          initialParams={{ selectedTabName: 'For You'}}
        />
        <Drawer.Screen
          name="Categories"
          options={{
            drawerIcon: config => (
              <Icon name="columns" size={20} color={Colors.basePrimaryColor} />
            ),
          }}
          component={ScreensWithHeader}
          initialParams={{ selectedTabName: 'Categories'}}
        />
        <Drawer.Screen
          name="Search"
          options={{
            drawerIcon: config => (
              <Icon name="search" size={20} color={Colors.basePrimaryColor} />
            ),
          }}
          component={ScreensWithHeader}
          initialParams={{ selectedTabName: 'Search'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

