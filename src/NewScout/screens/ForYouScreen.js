import * as React from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import styles from '../styles/Base';
import LeftImageAlignedItem from '../components/LeftImageAlignedItem';
import RightImageAlignedItem from '../components/RightImageAlignedItem';

class ForYouScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {dataSource: {}};
    }
  
    callAPI = () => {
      return fetch('http://www.newscout.in/api/v1/article/search/?domain=newscout&category=Tech&format=json&rows=100')
        .then(response => response.json())
        .then(json => {
          this.setState({
            articles: json.body.results,
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
        {
          id: 5,
          title: 'Tripura CM apologises for statement comparing Bengalis with Jats and Punjabis',
          ts: '6 hours ago',
          source: 'livemint.com',
          count: '2',
        },
        {
          id: 6,
          title: 'Nomura launches drive to tempt retail customers from commission to fees',
          ts: '6 hours ago',
          source: 'japantimes.co.jp',
          count: '2',
        },
        {
          id: 7,
          title: 'Bar Refaeli: Israel convicts model of tax evasion',
          ts: '6 hours ago',
          source: 'bbc.com',
          count: '2',
        },
  
      ];
  
    //   this.setState({
    //     articles: articles,
    //   });
      this.callAPI();
    }
  
    render() {
      return (
        <View style={styles.flexible}>
          <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: '#bab5b5'}}>
            <FlatList
              style={styles.flexible}
              data={this.state.articles}
              renderItem={({item, index}) => { 
                  if(index % 2 == 0){
                    return (
                        <LeftImageAlignedItem 
                            coverImage={item.cover_image}
                            title={item.title}
                            source={item.source}
                            ts={item.published_on}
                        />
                    )
                  }else{
                    return (
                        <RightImageAlignedItem 
                            coverImage={item.cover_image}
                            title={item.title}
                            source={item.source}
                            ts={item.published_on}
                        />
                    )
                  }
                }
              }
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </View>
      );
    }
  }

export default ForYouScreen;