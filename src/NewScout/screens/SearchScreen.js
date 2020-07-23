import * as React from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from '../styles/Base';
import * as Colors from '../styles/Colors';


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

export default SearchScreen;