import * as React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
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
      this.callAPI();
    }
  
    render() {
      return (
        <View style={styles.flexible}>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.flexible}>
            <Text style={styles.screenHeading}>
              For You
            </Text>
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