import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  ActivityIndicator,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {WebView} from 'react-native-webview';
import TimeAgo from 'react-native-timeago';
import Swiper from 'react-native-swiper';
import Share from 'react-native-share';

import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Modal, {
  SlideAnimation,
  ModalContent,
  ModalTitle,
} from 'react-native-modals';

import styles from '../styles/Base';
import * as Colors from '../styles/Colors';

import componentStyles from '../styles/ArticleDetailsScreen';
import MobileSuggestionsList from '../components/MobileSuggestionsList';
import TabletSuggestionsList from '../components/TabletSuggestionsList';

function SourceScreen({route, navigation}) {
  const {url} = route.params;
  return <WebView source={{uri: url}} />;
}

class SuggestionsScreen extends React.Component {
  checkiPad = () => {
    if (Platform.isPad == true) {
      this.setState({numOfRows: 8});
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      numOfRows: 4,
      visible: true,
      items: ['Test 1', 'Test 2', 'Test 3'],
      data: [],
      loading: false,
    };
    this.checkiPad();
    this.recommendation(this.props.route.params.articleID);
  }


  recommendation = (articleID) => {
    this.setState({
      loading: true,
    });
    return fetch(
      `http://www.newscout.in/api/v1/articles/${articleID}/recommendations/?domain=newscout&format=json`,
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json.body.results,
          loading: false,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          loading: false,
        });
      });
  };

  adaptToOrientationChange = () => {
    this.checkiPad();
  };

  render() {
    if (this.state.numOfRows === 4) {
      return (
        <View onLayout={(event) => this.adaptToOrientationChange(event)}>
          <Modal.BottomModal
            height={0.8}
            width={1}
            visible={this.state.visible}
            modalAnimation={
              new SlideAnimation({
                slideFrom: 'bottom',
              })
            }
            modalTitle={<ModalTitle title="More Suggestions" hasTitleBar />}
            onTouchOutside={() => {
              this.setState({visible: false});
              this.props.navigation.goBack();
            }}>
            <ModalContent
              style={{
                flex: 1,
              }}>
              <MobileSuggestionsList data={this.state.data} navigation={this.props.navigation}/>
            </ModalContent>
          </Modal.BottomModal>
        </View>
      );
    } else {
      return (
        <View onLayout={(event) => this.adaptToOrientationChange(event)}>
          <Modal.BottomModal
            height={0.8}
            width={1}
            visible={this.state.visible}
            modalAnimation={
              new SlideAnimation({
                slideFrom: 'bottom',
              })
            }
            modalTitle={<ModalTitle title="More Suggestions" hasTitleBar />}
            onTouchOutside={() => {
              this.setState({visible: false});
              this.props.navigation.goBack();
            }}>
            <ModalContent
              style={{
                flex: 1,
              }}>
              <TabletSuggestionsList data={this.state.data} />
            </ModalContent>
          </Modal.BottomModal>
        </View>
      );
    }
  }
}

class ArticleDetailsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], //'Test 1', 'Test 2', 'Test 3'
      showSuggestions: false,
      loading: false,
    };
    this.callAPI(this.props.route.params.articleSlug);
    // this.customShare(this.props.route.params.articleSlug);
  }

  callAPI = (articleSlug) => {
    this.setState({
      loading: true,
    });
    return fetch(
      `http://www.newscout.in/api/v1/articles/${articleSlug}/?domain=newscout&format=json`,
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: [json.body.article],
          loading: false,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          loading: false,
        });
      });
  };

  loadItems() {
    this.setState({
      data: [
        'Test 1',
        'Test 2',
        'Test 3',
        'Test 4',
        'Test 5',
        'Test 6',
        'Test 7',
      ],
    });
  }

  customShare = async () => {
    const shareOptions = {
      message : "Please check this out: ",
      url: `http://www.newscout.in/news/article/${this.props.route.params.articleSlug}/?domain=newscout&&format=json`,
    }
    try {
      const ShareResponse = await Share.open(shareOptions);
    } 
    catch (error) {
      console.log('Error => ', error);
    }
  };

  render() {
    return (
      <Swiper
        loop={false}
        style={styles.wrapper}
        horizontal={false}
        showsPagination={false}
        onIndexChanged={(index) => {
          if (index === 1) {
            this.loadItems();
          }
        }}>
        {this.state.data.length == 0 && (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator
              animating
              size="large"
              color={Colors.basePrimaryColor}
            />
          </View>
        )}
        {this.state.data.map &&
          this.state.data.map((item, i) => {
            return (
              <SafeAreaView style={styles.flexible} key={i}>
                <View style={styles.slide1}>
                  <Image
                    style={componentStyles.imageStyle}
                    source={{uri: item.cover_image}}
                  />
                  <View style={{flex: 1.5}}>
                    <Text numberOfLines={2} style={componentStyles.titleStyle}>
                      {item.title}
                    </Text>
                    <View style={{flex: 0.25, flexDirection: 'row'}}>
                      <Text style={{flex: 1, marginLeft: 10, fontSize: 13}}>
                        <TimeAgo time={item.published_on} />
                      </Text>
                      <Text style={styles.source}>{item.source}</Text>
                    </View>
                    <Text
                      numberOfLines={10}
                      ellipsizeMode={'tail'}
                      style={componentStyles.blurbStyle}>
                      {item.blurb}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Source', {
                          url: item.source_url,
                        })
                      }>
                      <View style={componentStyles.readMoreViewStyle}>
                        <Text style={componentStyles.readMoreButtonStyle}>
                          Read More
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={componentStyles.bottomBarStyle}>
                    <Icon
                      name={'random'}
                      size={21}
                      color={Colors.iconColor}
                      style={componentStyles.bottomBarIconStyle}
                    />
                    <Icon
                      name={'comment'}
                      size={21}
                      color={Colors.iconColor}
                      style={componentStyles.bottomBarIconStyle}
                    />
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Suggestions', {
                          url: item.source_url,
                        })
                      }>
                      <Text style={componentStyles.moreStoriesStyle}>
                        More Stories
                      </Text>
                    </TouchableOpacity>
                    <Icon
                      name={'arrow-up'}
                      size={21}
                      color={Colors.iconColor}
                      style={componentStyles.bottomBarIconStyle}
                    />
                    <Icon
                      name={'share-alt'}
                      size={21}
                      color={Colors.iconColor}
                      style={componentStyles.bottomBarIconStyle}
                      onPress={this.customShare}
                    />
                  </View>
                </View>
              </SafeAreaView>
            );
          })}
      </Swiper>
    );
  }
}

const Stack = createStackNavigator();

function ArticleDetailsScreen({route, navigation}) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="ArticleDetailsView">
        <Stack.Screen
          name="ArticleDetailsView"
          component={ArticleDetailsView}
          options={{headerShown: false}}
          initialParams={{
            articleID: route.params.articleID,
            articleSlug: route.params.articleSlug,
          }}
        />
        <Stack.Screen name="Source" component={SourceScreen} />
        <Stack.Screen
          name="Suggestions"
          component={SuggestionsScreen}
          options={{headerShown: false}}
          initialParams={{
            articleID: route.params.articleID,
            articleSlug: route.params.articleSlug,
          }}
        />
         <Stack.Screen name="Article Details" 
         component={ArticleDetailsScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ArticleDetailsScreen;
