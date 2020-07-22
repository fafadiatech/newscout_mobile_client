import * as React from 'react';
import {View, ScrollView, FlatList, TouchableOpacity, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/TrendingScreen';

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
        <View style={styles.flexible}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}>
            <FlatList
              style={styles.flexible}
              data={this.state.featuredArticles}
              renderItem={({item}) => (
                <View style={styles.cardUnitView}>
                  <TouchableOpacity>
                    <Text style={styles.cardUnitColoredStrip}>.</Text>
                    <Image
                      style={styles.cardUnitImage}
                      source={{uri: 'https://picsum.photos/400/400'}}
                    />
                    <View style={styles.rowAlignedView}>
                      <View style={styles.flexible}>
                        <Text style={styles.boldTitle}>{item.title}</Text>
                        <Text style={styles.source}>{item.source}</Text>
                        <Text style={styles.ts}>{item.ts}</Text>
                      </View>
                      <Icon
                        name={'chevron-circle-right'}
                        size={30}
                        color={'#d62828'}
                        style={styles.cardUnitNextIcon}
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

export default TrendingScreen;
