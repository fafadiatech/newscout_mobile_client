import * as React from 'react';
import {
  Text,
  Button,
  View,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

class TrendingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dataSource: {}};
  }

  componentDidMount() {

    let articles = [
      {
        id: 0,
        title: 'Singapore Flyer to reopen on July 23',
        ts: 'about an hour ago',
        source: 'businesstimes.com.sg',
        count: '2',
      },
      {
        id: 1,
        title: 'Indian rupee ends at two-week high against US dollar',
        ts: '2 hours ago',
        source: 'livemint.com',
        count: '2',
      },
      {
        id: 2,
        title: 'Got an old phone lying in the drawer? Just send it by post, in France',
        ts: '2 hours ago',
        source: 'straitstimes.com',
        count: '2',
      },
      {
        id: 3,
        title: 'Google Assistant for KaiOS gets Google Lens-like text translation feature',
        ts: '3 hours ago',
        source: 'business-standard.com',
        count: '2',
      },
      {
        id: 4,
        title: 'Gojek names former Amazon exec Severan Rault its Singapore-based chief technology officer',
        ts: '6 hours ago',
        source: 'straitstimes.com',
        count: '2',
      },
    ];

    this.setState({
      featuredArticles: articles,
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: '#bab5b5'}}>
          <FlatList
            style={{flex: 1}}
            data={this.state.featuredArticles}
            renderItem={({item}) => (
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'white',
                  alignItems: 'stretch',
                  borderRadius: 10,
                  marginRight: 5,
                  marginTop: 9,
                  marginBottom: 3,
                  marginLeft: 5,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}>
                <TouchableOpacity>
                  <Text style={{flex: 0.25, marginLeft: 12, marginRight: 12, backgroundColor: '#d62828', fontSize: 2, borderRadius: 20}}>.</Text>
                  <Image
                    style={{
                      flex: 1,
                      backgroundColor: 'yellow',
                      marginLeft: 5,
                      marginRight: 5,
                      marginTop: 15,
                      marginBottom: 10,
                      width: 355,
                      height: 180,
                      borderRadius: 10,
                    }}
                    source={{uri: 'https://picsum.photos/400/400'}}
                  />
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                      <Text
                        style={{
                          flex: 2,
                          fontWeight: 'bold',
                          fontSize: 20,
                          marginTop: 10,
                          marginLeft: 10,
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          flex: 1,
                          color: '#d62828',
                          fontSize: 16,
                          fontWeight: 'bold',
                          marginLeft: 10,
                        }}>
                        {item.source}
                      </Text>
                      <Text
                        style={{
                          flex: 1,
                          marginLeft: 10,
                          marginBottom: 15,
                        }}>
                        {item.ts}
                      </Text>
                    </View>
                    <Icon
                      name={'chevron-circle-right'}
                      size={30}
                      color={'#d62828'}
                      style={{
                        flex: 0.1,
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
        </ScrollView>
      </View>
    );
  }
}

class ForYouScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dataSource: {}};
  }

  componentDidMount() {

    let articles = [
      {
        id: 0,
        title: 'Singapore Flyer to reopen on July 23',
        ts: 'about an hour ago',
        source: 'businesstimes.com.sg',
        count: '2',
      },
      {
        id: 1,
        title: 'Indian rupee ends at two-week high against US dollar',
        ts: '2 hours ago',
        source: 'livemint.com',
        count: '2',
      },
      {
        id: 2,
        title: 'Got an old phone lying in the drawer? Just send it by post, in France',
        ts: '2 hours ago',
        source: 'straitstimes.com',
        count: '2',
      },
      {
        id: 3,
        title: 'Google Assistant for KaiOS gets Google Lens-like text translation feature',
        ts: '3 hours ago',
        source: 'business-standard.com',
        count: '2',
      },
      {
        id: 4,
        title: 'Gojek names former Amazon exec Severan Rault its Singapore-based chief technology officer',
        ts: '6 hours ago',
        source: 'straitstimes.com',
        count: '2',
      },
      {
        id: 5,
        title: 'Tripura CM apologises for statement comparing Bengalis with Jats and Punjabis',
        ts: '6 hours ago',
        source: 'livemint.com',
        count: '2',
      },
      {
        id: 6,
        title: 'Nomura launches drive to tempt retail customers from commission to fees',
        ts: '6 hours ago',
        source: 'japantimes.co.jp',
        count: '2',
      },
      {
        id: 7,
        title: 'Bar Refaeli: Israel convicts model of tax evasion',
        ts: '6 hours ago',
        source: 'bbc.com',
        count: '2',
      },

    ];

    this.setState({
      articles: articles,
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: '#bab5b5'}}>
          <FlatList
            style={{flex: 1}}
            data={this.state.articles}
            renderItem={({item, index}) => { 
                if(index % 2 == 0){
                  return (
                    <View
                    style={{
                      flex: 1,
                      backgroundColor: 'white',
                      alignItems: 'stretch',
                      borderRadius: 10,
                      marginRight: 5,
                      marginTop: 9,
                      marginBottom: 3,
                      marginLeft: 5,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}>
                    <TouchableOpacity>
                      <Text style={{flex: 0.25, marginLeft: 12, marginRight: 12, backgroundColor: '#d62828', fontSize: 2, borderRadius: 20}}>.</Text>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                      <Image
                        style={{
                          flex: 0.5,
                          backgroundColor: 'yellow',
                          marginLeft: 7,
                          marginTop: 7,
                          marginBottom: 10,
                          width: 120,
                          height: 120,
                          borderRadius: 10,
                        }}
                        source={{uri: 'https://picsum.photos/200/200'}}
                      />
                        <View style={{flex: 1}}>
                          <Text
                            style={{
                              flex: 2,
                              fontWeight: 'bold',
                              fontSize: 19,
                              marginTop: 10,
                              marginLeft: 5,
                              marginRight: 5,
                            }}>
                            {item.title}
                          </Text>
                          <Text
                            style={{
                              flex: 1,
                              color: '#d62828',
                              fontSize: 16,
                              fontWeight: 'bold',
                              marginLeft: 10,
                            }}>
                            {item.source}
                          </Text>
                          <Text
                            style={{
                              flex: 1,
                              marginLeft: 10,
                              marginBottom: 15,
                            }}>
                            {item.ts}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    </View>
                  )
                }else{
                  return (
                    <View
                    style={{
                      flex: 1,
                      backgroundColor: 'white',
                      alignItems: 'stretch',
                      borderRadius: 10,
                      marginRight: 5,
                      marginTop: 9,
                      marginBottom: 3,
                      marginLeft: 5,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}>
                    <TouchableOpacity>
                      <Text style={{flex: 0.25, marginLeft: 12, marginRight: 12, backgroundColor: '#d62828', fontSize: 2, borderRadius: 20}}>.</Text>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                          <Text
                            style={{
                              flex: 2,
                              fontWeight: 'bold',
                              fontSize: 19,
                              marginTop: 10,
                              marginLeft: 5,
                              marginRight: 5,
                            }}>
                            {item.title}
                          </Text>
                          <Text
                            style={{
                              flex: 1,
                              color: '#d62828',
                              fontSize: 16,
                              fontWeight: 'bold',
                              marginLeft: 10,
                            }}>
                            {item.source}
                          </Text>
                          <Text
                            style={{
                              flex: 1,
                              marginLeft: 10,
                              marginBottom: 15,
                            }}>
                            {item.ts}
                          </Text>
                        </View>
                        <Image
                        style={{
                          flex: 0.5,
                          backgroundColor: 'yellow',
                          marginRight: 7,
                          marginTop: 7,
                          marginBottom: 10,
                          width: 120,
                          height: 120,
                          borderRadius: 10,
                        }}
                        source={{uri: 'https://picsum.photos/200/200'}}
                      />
                      </View>
                    </TouchableOpacity>
                    </View>
                  )
                }
              }
            }
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}

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
      <View style={{flex: 1}}>
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
          style={{flex: 1}}
          data={this.state.dataSource}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                alignItems: 'stretch',
                backgroundColor: '#d62828',
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
      <View style={{flex: 1}}>
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
          style={{flex: 1}}
          data={this.state.options}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                alignItems: 'stretch',
                backgroundColor: '#d62828',
                borderRadius: 10,
                marginRight: 5,
                marginTop: 3,
                marginBottom: 3,
                marginLeft: 5,
              }}>
              <TouchableOpacity>
                <View style={{flex: 1, flexDirection: 'row'}}>
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
                  <View style={{flex: 1}}>
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

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
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
            activeTintColor: '#d62828',
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
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Trending"
          options={{
            drawerIcon: config => (
              <Icon name="compass" size={30} color="#d62828" />
            ),
          }}
          component={HomeScreen}
        />
        <Drawer.Screen
          name="For You"
          options={{
            drawerIcon: config => (
              <Icon name="group" size={20} color="#d62828" />
            ),
          }}
          component={ForYouScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  imageThumbnail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
