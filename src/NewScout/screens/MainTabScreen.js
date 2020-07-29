import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TrendingScreen from './TrendingScreen';
import ForYouScreen from './ForYouScreen';
import CategoriesScreen from './CategoriesScreen';
import SearchScreen from './SearchScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Colors from '../styles/Colors';

const TrendingStack = createStackNavigator();
const ForYouStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const SearchStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Trending"
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
    <Tab.Screen name="Trending" component={TrendingStackScreen} />

    <Tab.Screen name="For You" component={ForYouStackScreen} />

    <Tab.Screen name="Categories" component={CategoriesStackScreen} />

    <Tab.Screen name="Search" component={SearchStackScreen} />
  </Tab.Navigator>
);
export default MainTabScreen;
const TrendingStackScreen = ({navigation}) => (
  <TrendingStack.Navigator
    screenOptions={{
      haederStyle: {
        backgroundcolor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <TrendingStack.Screen
      name="Trending"
      component={TrendingScreen}
      options={{
        title: 'Trending',
        headerLeft: () => (
          <Icon.Button
            name="bars"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </TrendingStack.Navigator>
);

const ForYouStackScreen = ({navigation}) => (
  <ForYouStack.Navigator
    screenOptions={{
      haederStyle: {
        backgroundcolor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#000',
      },
      title: 'NewScout',
    }}>
    <ForYouStack.Screen
      name="ForYou"
      component={ForYouScreen}
      options={{
        title: 'NewScout',
        headerLeft: () => (
          <Icon.Button
            name="bars"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </ForYouStack.Navigator>
);

const CategoriesStackScreen = ({navigation}) => (
  <CategoriesStack.Navigator
    screenOptions={{
      haederStyle: {
        backgroundcolor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <CategoriesStack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        title: 'Categories',
        headerLeft: () => (
          <Icon.Button
            name="bars"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </CategoriesStack.Navigator>
);

const SearchStackScreen = ({navigation}) => (
  <SearchStack.Navigator
    screenOptions={{
      haederStyle: {
        backgroundcolor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <SearchStack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        title: 'Search',
        headerLeft: () => (
          <Icon.Button
            name="bars"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </SearchStack.Navigator>
);
