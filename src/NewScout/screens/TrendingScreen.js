import * as React from 'react';
import {View, ScrollView, FlatList, TouchableOpacity, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TimeAgo from 'react-native-timeago';
import styles from '../styles/TrendingScreen';

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
  
      this.callAPI();
      // this.setState({
      //   featuredArticles: articles,
      // });
    }
  
    render() {
      return (
        <View style={styles.flexible}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}>
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
