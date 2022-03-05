import * as React from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView
} from 'react-native';

import styles from '../styles/Base';
import IconListViewItem from '../components/IconListViewItem';
import Search from '../components/Search';


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
          <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.flexible}
          >
          <Search/>
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
          </ScrollView>
        </View>
      );
    }
  }

export default SearchScreen;