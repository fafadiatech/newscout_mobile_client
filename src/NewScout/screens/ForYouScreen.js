import * as React from 'react';
import {View, Text, ScrollView, FlatList, NativeModules, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FloatingAction } from "react-native-floating-action";

import * as Colors from '../styles/Colors';
import styles from '../styles/Base';

import LeftImageAlignedItem from '../components/LeftImageAlignedItem';
import RightImageAlignedItem from '../components/RightImageAlignedItem';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {PlatformConstants} = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;

class ForYouScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dataSource: {},
      };
      this.scrollView = React.createRef()
    }
  
    callAPI = () => {
      return fetch('http://www.newscout.in/api/v1/article/search/?domain=newscout&category=Uncategorised&format=json&rows=100')
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
  
    scrollToTop = () => {
      this.scrollView.scrollTo({y: 0});
    }

    render() {
      var cardColumns = 0;
      if (Platform.isPad == true){
          cardColumns = 2;
      }else{
          cardColumns = 1;
      }

      const actions = [
        {
          text: "Top",
          color: Colors.basePrimaryColor,
          icon: <Icon name={'arrow-up'} color={Colors.iconColor}/>,
          name: "bt_accessibility",
          position: 0
        },
      ];

      return (
        <View style={styles.flexible} >
          <ScrollView 
              showsVerticalScrollIndicator={false} 
              style={styles.flexible}
              ref={ref => (this.scrollView = ref)}
          >
            <Text style={styles.screenHeading}>
              For You
            </Text>
            <FlatList
              numColumns={cardColumns}
              style={styles.flexible}
              data={this.state.articles}
              renderItem={({item, index}) => { 
                  if(index % 2 == 0){
                    return (
                        <TouchableOpacity onPress={() => {this.props.navigation.push('Article Details', {articleID: item.id, articleSlug: item.slug})}}>
                          <LeftImageAlignedItem
                              coverImage={item.cover_image}
                              title={item.title}
                              source={item.source}
                              ts={item.published_on}
                          />
                        </TouchableOpacity>
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
          <FloatingAction
              color={Colors.basePrimaryColor}
              floatingIcon={<Icon name={'arrow-up'} size={25} color={Colors.iconColor}/>}
              showBackground={false}
              onPressMain={this.scrollToTop}
          />
        </View>
      );
    }
  }

export default ForYouScreen;