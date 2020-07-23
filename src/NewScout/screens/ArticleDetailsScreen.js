import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image
} from 'react-native';

import Swiper from 'react-native-swiper';

import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from '../styles/Base';
import * as Colors from '../styles/Colors';

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

export default ArticleDetailsScreen;