import * as React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';

import styles from '../styles/Base';

import FeaturedItem from '../components/FeaturedItem';

class TrendingScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {dataSource: {}};
    }
    callAPI = () => {
      return fetch('http://www.newscout.in/api/v1/trending/?domain=newscout&format=json')
        .then(response => response.json())
        .then(json => {
          this.setState({
            featuredArticles: json.body.results,
          });
        })
        .catch(error => {
          console.error(error);
        });
    };
  
    componentDidMount() {
      this.callAPI();
    }
  
    render() {
      return (
        <View style={styles.flexible}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.flexible}>
            <Text style={styles.screenHeading}>
              Trending
            </Text>
            <FlatList
              style={styles.flexible}
              data={this.state.featuredArticles}
              renderItem={({item}) => (
                <FeaturedItem 
                  coverImage={item.articles[0].cover_image}
                  title={item.articles[0].title}
                  source={item.articles[0].source}
                  ts={item.articles[0].published_on}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </View>
      );
    }
  }

export default TrendingScreen;
