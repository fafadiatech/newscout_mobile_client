import * as React from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

import styles from '../styles/Base';

import IconGridItem from '../components/IconGridItem';

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
            style={styles.screenHeading}>
            Categories
          </Text>
          <FlatList
            style={styles.flexible}
            data={this.state.dataSource}
            renderItem={({item}) => (
              <IconGridItem icon={item.icon} caption={item.caption} />
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