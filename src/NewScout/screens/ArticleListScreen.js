import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  NativeModules,
  Platform,
  RefreshControl,
  ActivityIndicator,
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

class ArticleListScreen extends React.Component {
  constructor(props) {
    super(props);
    const selectedOption = this.props.route.params.selectedOption;
    this.state = {
      articles: [],
      pillMenuFlex: 0.09,
      pillMenu: [],
      page: 1,
      category: '',
      selectedOption: selectedOption,
      refreshing: false,
      loading: false,
    };
    this.fetchMenu(selectedOption);
    this.scrollView = React.createRef();
  }

  callAPI = (category, page = 1) => {
    if (!this.state.refreshing) {
      this.setState({
        loading: true,
      });
    }
    return fetch(
      `http://www.newscout.in/api/v1/article/search/?domain=newscout&category=${category}&page=${page}&format=json&rows=10`,
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
        console.error(error);
        this.setState({
          refreshing: false,
          loading: false,
        });
      });
  };

  fetchMenu = (selectedOption) => {
    return fetch(
      'http://www.newscout.in/api/v1/menus/?domain=newscout&format=json',
    )
      .then((response) => response.json())
      .then((json) => {
        var menuCategories = [];
        json.body.results.forEach(function (item) {
          if (item.heading.name == selectedOption) {
            item.heading.submenu.forEach(function (menuItem) {
              menuCategories.push({text: menuItem.name});
            });
          }
        });
        this.setState({
          pillMenu: menuCategories,
          category: menuCategories[0].text,
        });
        this.callAPI(menuCategories[0].text);
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          refreshing: false,
          loading: false,
        });
      });
  };

  scrollToTop = () => {
    this.scrollView.scrollTo({y: 0});
  };

  adaptToOrientationChange = (event) => {
    if (Platform.isPad == true) {
      if (event.nativeEvent.layout.width > event.nativeEvent.layout.height) {
        // landscape mode
        this.setState({pillMenuFlex: 0.07});
      } else {
        // portrait mode
        this.setState({pillMenuFlex: 0.05});
      }
    } else {
      this.setState({pillMenuFlex: 0.09});
    }
  };

  categoryChanged = (newCategory) => {
    this.setState({articles: [], category: newCategory});
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true,
        page: 1,
      },
      () => {
        this.callAPI(this.state.category);
      },
    );
  };

  renderFooter = () => {
    return (
      <View style={[styles.progressbarcontainer, styles.progressbarhorizontal]}>
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
      <View
        style={styles.flexible}
        onLayout={(event) => this.adaptToOrientationChange(event)}>
        <View style={{flex: this.state.pillMenuFlex, marginBottom: 5}}>
          <FlatList
            style={{flex: 1, marginTop: 7}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.pillMenu}
            renderItem={({item}) => {
              var pillColor = 'black';
              if (item.text === this.state.category) {
                pillColor = Colors.basePrimaryColor;
              }
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.categoryChanged(item.text);
                    this.callAPI(item.text);
                  }}>
                  <View
                    style={{
                      borderWidth: 1.5,
                      marginLeft: 5,
                      marginRight: 5,
                      borderRadius: 15,
                    }}>
                    <Text
                      style={[
                        {
                          fontWeight: 'bold',
                          fontSize: 21,
                          marginLeft: 10,
                          marginRight: 10,
                          marginTop: 5,
                          marginBottom: 5,
                        },
                        {
                          color: pillColor,
                        },
                      ]}>
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.flexible}
          ref={(ref) => (this.scrollView = ref)}
          refreshControl={
            <RefreshControl
              colors={[Colors.basePrimaryColor]}
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh}
            />
          }>
          <Text style={styles.screenHeading}>{this.state.category}</Text>
          <FlatList
            numColumns={cardColumns}
            style={styles.flexible}
            data={this.state.articles}
            onEndReachedThreshold={0.5}
            refreshing={this.state.refreshing}
            ListFooterComponent={this.renderFooter}
            onEndReached={() => {
              const currentPage = this.state.page + 1;
              const currentCategory = this.state.category;
              this.callAPI(currentCategory, currentPage);
            }}
            renderItem={({item, index}) => {
              if (index % 2 == 0) {
                return (
                  <LeftImageAlignedItem
                    coverImage={item.cover_image}
                    title={item.title}
                    source={item.source}
                    ts={item.published_on}
                    onPressHandler={() => {
                      this.props.navigation.push('Article Details', {
                        articleID: item.id,
                        articleSlug: item.slug,
                      });
                    }}
                  />
                );
              } else {
                return (
                  <RightImageAlignedItem
                    coverImage={item.cover_image}
                    title={item.title}
                    source={item.source}
                    ts={item.published_on}
                    onPressHandler={() => {
                      this.props.navigation.push('Article Details', {
                        articleID: item.id,
                        articleSlug: item.slug,
                      });
                    }}
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

export default ArticleListScreen;
