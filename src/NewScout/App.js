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
import {TouchableOpacity} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

import styles from './styles/Base';
import * as Colors from './styles/Colors';

import TrendingScreen from './screens/TrendingScreen';
import ForYouScreen from './screens/ForYouScreen';

const Tab = createBottomTabNavigator();


class CategoriesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dataSource: {}};
  }

  componentDidMount() {
    let items = [
      {id: 0, icon: 'globe', caption: 'By Region'},
      {id: 1, icon: 'pie-chart', caption: 'By Sector'},
      {id: 2, icon: 'usd', caption: 'Finance'},
      {id: 3, icon: 'money', caption: 'Economics'},
      {id: 4, icon: 'th', caption: 'Misc'},
    ];
    this.setState({
      dataSource: items,
    });
  }

  render() {
    return (
      <View style={styles.flexible}>
        <Text
          style={{
            flex: 0.05,
            marginTop: 10,
            marginLeft: 5,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Categories
        </Text>
        <FlatList
          style={styles.flexible}
          data={this.state.dataSource}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                alignItems: 'stretch',
                backgroundColor: Colors.basePrimaryColor,
                borderRadius: 10,
                marginRight: 5,
                marginTop: 10,
                marginLeft: 5,
              }}>
              <TouchableOpacity>
                <Icon
                  name={item.icon}
                  size={80}
                  color={'white'}
                  style={{
                    flex: 1,
                    alignSelf: 'center',
                    marginTop: 10,
                    marginLeft: 5,
                    marginRight: 5,
                    paddingTop: 10,
                  }}
                />
                <Text
                  style={{
                    flex: 1,
                    color: 'white',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginTop: 5,
                    marginBottom: 25,
                  }}>
                  {item.caption}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dataSource: {}};
  }

  componentDidMount() {
    let options = [
      {
        id: 0,
        icon: 'users',
        caption: 'My Profile',
        supporting: 'Update Profile | Change Passwords',
      },
      {
        id: 1,
        icon: 'file',
        caption: 'My Records',
        supporting: 'Update Records | Delete Records',
      },
    ];

    this.setState({
      options: options,
    });
  }
  render() {
    return (
      <View style={styles.flexible}>
        <Text
          style={{
            flex: 0.05,
            marginTop: 10,
            marginLeft: 5,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Settings
        </Text>
        <FlatList
          style={styles.flexible}
          data={this.state.options}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                alignItems: 'stretch',
                backgroundColor: Colors.basePrimaryColor,
                borderRadius: 10,
                marginRight: 5,
                marginTop: 3,
                marginBottom: 3,
                marginLeft: 5,
              }}>
              <TouchableOpacity>
                <View style={styles.rowAlignedView}>
                  <Icon
                    name={item.icon}
                    size={50}
                    style={{
                      flex: 0.25,
                      color: 'white',
                      marginLeft: 15,
                      marginRight: 5,
                      marginTop: 15,
                      marginBottom: 10,
                      width: 70,
                      height: 70,
                      borderRadius: 70,
                    }}
                  />
                  <View style={styles.flexible}>
                    <Text
                      style={{
                        flex: 2,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 20,
                        marginLeft: 10,
                      }}>
                      {item.caption}
                    </Text>
                    <Text
                      style={{
                        flex: 1,
                        color: 'white',
                        fontSize: 18,
                        marginLeft: 10,
                        marginBottom: 25,
                      }}>
                      {item.supporting}
                    </Text>
                  </View>
                  <Icon
                    name={'chevron-circle-right'}
                    size={30}
                    color={'white'}
                    style={{
                      flex: 0.15,
                      alignSelf: 'center',
                      marginLeft: 5,
                      marginRight: 10,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

class ArticleDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['Test 1', 'Test 2', 'Test 3'],
    };
  }

  loadItems() {
    this.setState({
      data: [
        'Test 1',
        'Test 2',
        'Test 3',
        'Test 4',
        'Test 5',
        'Test 6',
        'Test 7',
      ],
    });
  }
  render() {
    return (
      <Swiper
        loop={false}
        style={styles.wrapper}
        horizontal={false}
        showsPagination={false}
        onIndexChanged={index => {
          if (index === 1) {
            console.log('paginating');
            this.loadItems();
          }
        }}>
        {this.state.data.map &&
          this.state.data.map((item, i) => {
            return (
              <SafeAreaView style={styles.flexible}>
              <View style={styles.slide1}>
                <Image
                      style={{
                        flex: 1,
                        backgroundColor: 'yellow',
                        marginLeft: 10,
                        marginRight: 5,
                        marginTop: 15,
                        marginBottom: 10,
                        width: 355,
                        height: 180,
                        borderRadius: 10,
                      }}
                      source={{uri: 'https://picsum.photos/400/400'}}
                />
                <View style={{flex: 1.5}}>
                  <Text style={{flex: 0.60, marginLeft: 10, fontSize: 20, fontWeight: 'bold'}}>
                    Occaecat occaecat ullamco velit velit id dolor cupidatat pariatur deserunt fugiat.
                  </Text>
                  <View style={{flex: 0.25, flexDirection: 'row'}}>
                    <Text style={{flex: 1, marginLeft: 10, fontSize: 13}}>
                      within 5 hours
                    </Text>
                    <Text
                        style={{
                          flex: 1,
                          color: Colors.basePrimaryColor,
                          fontSize: 13,
                          fontWeight: 'bold',
                        }}>
                      financialexpress.com
                    </Text>
                  </View>
                  <Text
                    style={{
                      flex: 3,
                      marginLeft: 10,
                      marginRight: 10,
                      fontSize: 17,
                    }}>
                    Anim incididunt esse eiusmod duis ullamco. Exercitation exercitation amet exercitation duis Lorem velit eu. Culpa consequat anim minim est elit. Tempor dolore magna consequat consequat sunt consectetur amet aliquip consectetur aliqua adipisicing culpa. Exercitation in velit dolore quis irure irure in aute dolore est velit quis ullamco fugiat. Labore ut elit adipisicing ea. Ut ex ex anim nulla do duis eiusmod anim ex.
                    Exercitation in velit dolore quis irure irure in aute dolore est velit quis ullamco fugiat. Labore ut elit adipisicing ea. Ut ex ex anim nulla do duis eiusmod anim ex.
                </Text>
                <TouchableOpacity>
                  <View
                    style={{
                      zIndex: 1,
                      backgroundColor: Colors.basePrimaryColor,
                      alignItems: 'center',
                      borderRadius: 10,
                      height: 45,
                      marginTop: 5,
                      marginLeft: 5,
                      marginRight: 5,
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginTop: 12,
                        marginBottom: 5,
                      }}>
                      Read More
                    </Text>
                  </View>
                </TouchableOpacity>
                </View>
                <View style={{flex: 0.20, flexDirection: 'row', backgroundColor: Colors.basePrimaryColor, justifyContent: 'space-around'}}>
                    <Icon
                      name={'random'}
                      size={21}
                      color={'white'}
                      style={{
                        flex: 0.1,
                        alignSelf: 'center',
                        marginLeft: 5,
                        marginRight: 10,
                      }}
                    />
                    <Icon
                      name={'comment'}
                      size={21}
                      color={'white'}
                      style={{
                        flex: 0.1,
                        alignSelf: 'center',
                        marginLeft: 5,
                        marginRight: 10,
                      }}
                    />
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 10}}>
                        More Stories
                    </Text>
                    <Icon
                      name={'arrow-up'}
                      size={21}
                      color={'white'}
                      style={{
                        flex: 0.1,
                        alignSelf: 'center',
                        marginLeft: 5,
                        marginRight: 10,
                      }}
                    />
                    <Icon
                      name={'share-alt'}
                      size={21}
                      color={'white'}
                      style={{
                        flex: 0.1,
                        alignSelf: 'center',
                        marginLeft: 5,
                        marginRight: 10,
                      }}
                    />
                </View>
              </View>
              </SafeAreaView>
            );
          })}
      </Swiper>
    );
  }
}
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

