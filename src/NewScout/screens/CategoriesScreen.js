import * as React from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
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
        {id: 0, icon: 'pie-chart', caption: 'By Sector', menuName: 'Sector Updates'},
        {id: 1, icon: 'globe', caption: 'By Region', menuName: 'Regional Updates'},
        {id: 2, icon: 'usd', caption: 'Finance', menuName: 'Finance'},
        {id: 3, icon: 'money', caption: 'Economics', menuName: 'Economics'},
        {id: 4, icon: 'th', caption: 'Misc', menuName: 'Misc'},
      ];
      this.setState({
        dataSource: items,
      });
    }
  
    navigateToArticlesList = (selection) => {
      console.log("Called");
      this.props.navigation.push('Articles List', {category: 'Tech', selectedOption: selection});
    }

    render() {
      return (
        <View style={styles.flexible}>
          <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.flexible}
          >
            <Text
              style={styles.screenHeading}>
              Categories
            </Text>
            <FlatList
              style={styles.flexible}
              data={this.state.dataSource}
              renderItem={({item}) => (
                <TouchableOpacity style={{flex: 1}} onPress={() => this.navigateToArticlesList(item.menuName)}>
                  <IconGridItem icon={item.icon} caption={item.caption} />
                </TouchableOpacity>
              )}
              //Setting the number of column
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </View>
      );
    }
  }

export default CategoriesScreen;