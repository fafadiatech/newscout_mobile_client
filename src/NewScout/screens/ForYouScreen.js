import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  NativeModules,
  Platform,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FloatingAction} from 'react-native-floating-action';

import * as Colors from '../styles/Colors';
import styles from '../styles/Base';

import LeftImageAlignedItem from '../components/LeftImageAlignedItem';
import RightImageAlignedItem from '../components/RightImageAlignedItem';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {PlatformConstants} = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;

class ForYouScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      refreshing: false,
      loading: false,
    };
    this.scrollView = React.createRef();
  }

  callAPI = (page = 1) => {
    return fetch(
      `http://www.newscout.in/api/v1/article/search/?domain=newscout&category=Uncategorised&page=${page}&format=json&rows=10`,
    )
      .then((response) => response.json())
      .then((json) => {
        var newDataset = this.state.articles;
        newDataset.push(...json.body.results);
        this.setState({
          articles: newDataset,
          refreshing: false,
          loading: false,
          page: page,
        });
      })
      .catch((error) => {
        console.error(`API ERROR: ${error}`);
        this.setState({
          refreshing: false,
          loading: false,
        });
      });
  };

  componentDidMount() {
    this.callAPI();
  }

  scrollToTop = () => {
    this.scrollView.scrollTo({y: 0});
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true,
        page: 1,
      },
      () => {
        this.callAPI();
      },
    );
  };

  renderFooter = () => {
    return (
      <View style={[styles.indicatorcontainer, styles.indicatorhorizontal]}>
        <ActivityIndicator
          animating
          size="large"
          color={Colors.basePrimaryColor}
        />
      </View>
    );
  };

  render() {
    var cardColumns = 0;
    if (Platform.isPad == true) {
      cardColumns = 2;
    } else {
      cardColumns = 1;
    }

    const actions = [
      {
        text: 'Top',
        color: Colors.basePrimaryColor,
        icon: <Icon name={'arrow-up'} color={Colors.iconColor} />,
        name: 'bt_accessibility',
        position: 0,
      },
    ];

    return (
      <View style={styles.flexible}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.flexible}
          ref={(ref) => (this.scrollView = ref)}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh}
            />
          }>
          <Text style={styles.screenHeading}>For You</Text>
          <FlatList
            numColumns={cardColumns}
            style={styles.flexible}
            data={this.state.articles}
            onEndReachedThreshold={0.5}
            refreshing={this.state.refreshing}
            ListFooterComponent={this.renderFooter}
            onEndReached={() => {
              const currentPage = this.state.page + 1;
              this.callAPI(currentPage);
            }}
            renderItem={({item, index}) => {
              if (index % 2 == 0) {
                return (
                  <LeftImageAlignedItem
                    coverImage={item.cover_image}
                    title={item.title}
                    source={item.source}
                    ts={item.published_on}
                  />
                );
              } else {
                return (
                  <RightImageAlignedItem
                    coverImage={item.cover_image}
                    title={item.title}
                    source={item.source}
                    ts={item.published_on}
                  />
                );
              }
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
        <FloatingAction
          color={Colors.basePrimaryColor}
          floatingIcon={
            <Icon name={'arrow-up'} size={25} color={Colors.iconColor} />
          }
          showBackground={false}
          onPressMain={this.scrollToTop}
        />
      </View>
    );
  }
}

export default ForYouScreen;
