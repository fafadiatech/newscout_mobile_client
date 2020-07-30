import React from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import TrendingScreen from './TrendingScreen';
import ForYouScreen from './ForYouScreen';
import CategoriesScreen from './CategoriesScreen';
import SearchScreen from './SearchScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Colors from '../styles/Colors';
import styles from '../styles/Base';

const TrendingStack = createStackNavigator();
const ForYouStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const SearchStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <SafeAreaView style={styles.flexible}>
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
  </SafeAreaView>
);
export default MainTabScreen;
const TrendingStackScreen = ({navigation}) => (
  <TrendingStack.Navigator
    screenOptions={{
      title: 'NewScout',
      headerStyle: {
        backgroundColor: Colors.basePrimaryColor,
      },
      headerLeft: () => {
        return (
          <Icon
            name={'bars'}
            size={25}
            color={'white'}
            style={{marginLeft: 13}}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        );
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.iconColor,
      },
    }}>
    <TrendingStack.Screen name="Trending" component={TrendingScreen} />
  </TrendingStack.Navigator>
);

const ForYouStackScreen = ({navigation}) => (
  <ForYouStack.Navigator
    screenOptions={{
      title: 'NewScout',
      headerStyle: {
        backgroundColor: Colors.basePrimaryColor,
      },
      headerLeft: () => {
        return (
          <Icon
            name={'bars'}
            size={25}
            color={'white'}
            style={{marginLeft: 13}}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        );
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.iconColor,
      },
    }}>
    <ForYouStack.Screen name="ForYou" component={ForYouScreen} />
  </ForYouStack.Navigator>
);

const CategoriesStackScreen = ({navigation}) => (
  <CategoriesStack.Navigator
    screenOptions={{
      title: 'NewScout',
      headerStyle: {
        backgroundColor: Colors.basePrimaryColor,
      },
      headerLeft: () => {
        return (
          <Icon
            name={'bars'}
            size={25}
            color={'white'}
            style={{marginLeft: 13}}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        );
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.iconColor,
      },
    }}>
    <CategoriesStack.Screen name="Categories" component={CategoriesScreen} />
  </CategoriesStack.Navigator>
);

const SearchStackScreen = ({navigation}) => (
  <SearchStack.Navigator
    screenOptions={{
      title: 'NewScout',
      headerStyle: {
        backgroundColor: Colors.basePrimaryColor,
      },
      headerLeft: () => {
        return (
          <Icon
            name={'bars'}
            size={25}
            color={'white'}
            style={{marginLeft: 13}}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        );
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.iconColor,
      },
    }}>
    <SearchStack.Screen name="Search" component={SearchScreen} />
  </SearchStack.Navigator>
);

const screenHeaderOptions = () => ({
  title: 'NewScout',
  headerStyle: {
    backgroundColor: Colors.basePrimaryColor,
  },
  headerLeft: () => {
    return (
      <Icon
        name={'bars'}
        size={25}
        color={'white'}
        style={{marginLeft: 13}}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    );
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.iconColor,
  },
});
