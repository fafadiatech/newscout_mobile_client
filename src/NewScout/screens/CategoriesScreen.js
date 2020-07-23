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

export default CategoriesScreen;