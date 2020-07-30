import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as Colors from './styles/Colors';
import ArticleDetailsScreen from './screens/ArticleDetailsScreen';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContents} from './screens/DrawerContents';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

function NewsHome() {
  return (
    <Drawer.Navigator
      initialRouteName="Trending"
      drawerContent={(props) => <DrawerContents {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator headerMode="none">
        <HomeStack.Screen name="Home" component={NewsHome} />
        <HomeStack.Screen
          name="Article Details"
          headerMode="Screen"
          options={{
            drawerIcon: () => (
              <Icon name="circle" size={20} color={Colors.basePrimaryColor} />
            ),
          }}
          component={ArticleDetailsScreen}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
