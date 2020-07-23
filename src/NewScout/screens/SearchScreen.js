import * as React from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

import styles from '../styles/Base';
import IconListViewItem from '../components/IconListViewItem';


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
            style={styles.screenHeading}>
            Settings
          </Text>
          <FlatList
            style={styles.flexible}
            data={this.state.options}
            renderItem={({item}) => (
              <IconListViewItem 
                icon={item.icon}
                caption={item.caption}
                supporting={item.supporting}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }
  }

export default SearchScreen;