import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';

import Swiper from 'react-native-swiper';

import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Modal, { SlideAnimation, ModalContent, ModalTitle } from 'react-native-modals';

import styles from '../styles/Base';
import * as Colors from '../styles/Colors';

import componentStyles from '../styles/ArticleDetailsScreen';

function SourceScreen({ route, navigation }) {
  const { url } = route.params;
  return <WebView source={{ uri: url }} />;
}

class ArticleDetailsView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: ['Test 1', 'Test 2', 'Test 3'],
        showSuggestions: false,
      };
    }
  
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

    toggleSuggestions = () => {
      console.log('toggling');
      const currentState = this.state.showSuggestions;
      if(currentState == true){
        this.setState({ showSuggestions: false });
      }else{
        this.setState({ showSuggestions: true });
      }
    }

    render() {
      return (
        <Swiper
          loop={false}
          style={styles.wrapper}
          horizontal={false}
          showsPagination={false}
          onIndexChanged={index => {
            if (index === 1) {
              console.log('paginating');
              this.loadItems();
            }
          }}>
          {this.state.data.map &&
            this.state.data.map((item, i) => {
              return (
                <SafeAreaView style={styles.flexible}>
                <View style={styles.slide1}>
                  <Image
                        style={componentStyles.imageStyle}
                        source={{uri: 'https://picsum.photos/400/400'}}
                  />
                  <View style={{flex: 1.5}}>
                    <Text style={componentStyles.titleStyle}>
                      Occaecat occaecat ullamco velit velit id dolor cupidatat pariatur deserunt fugiat.
                    </Text>
                    <View style={{flex: 0.25, flexDirection: 'row'}}>
                      <Text style={{flex: 1, marginLeft: 10, fontSize: 13}}>
                        within 5 hours
                      </Text>
                      <Text
                          style={styles.source}>
                        financialexpress.com
                      </Text>
                    </View>
                    <Text
                      style={componentStyles.blurbStyle}>
                      Anim incididunt esse eiusmod duis ullamco. Exercitation exercitation amet exercitation duis Lorem velit eu. Culpa consequat anim minim est elit. Tempor dolore magna consequat consequat sunt consectetur amet aliquip consectetur aliqua adipisicing culpa. Exercitation in velit dolore quis irure irure in aute dolore est velit quis ullamco fugiat. Labore ut elit adipisicing ea. Ut ex ex anim nulla do duis eiusmod anim ex.
                      Exercitation in velit dolore quis irure irure in aute dolore est velit quis ullamco fugiat. Labore ut elit adipisicing ea. Ut ex ex anim nulla do duis eiusmod anim ex.
                  </Text>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Source', {url: 'https://www.livemint.com/companies/news/intel-stunning-failure-heralds-end-of-era-for-us-chip-sector-11595647983933.html'})}>
                    <View
                      style={componentStyles.readMoreViewStyle}>
                      <Text
                        style={componentStyles.readMoreButtonStyle}>
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
                      <TouchableOpacity onPress={this.toggleSuggestions}>
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
                      />
                  </View>
                  <Modal.BottomModal
                    height={0.5}
                    width={1}
                    visible={this.state.showSuggestions}
                    modalAnimation={new SlideAnimation({
                      slideFrom: 'bottom',
                    })}
                    modalTitle={
                      <ModalTitle
                        title="More Suggestions"
                        hasTitleBar
                      />
                    }
                    onTouchOutside={() => {
                      this.setState({ showSuggestions: false });
                    }}
                  >
                    <ModalContent
                      style={{
                        flex: 1,
                      }}
                    >
                        <Text>This is nice!</Text>
                    </ModalContent>
                  </Modal.BottomModal>
                </View>
                </SafeAreaView>
              );
            })}
        </Swiper>
      );
    }
  }

const Stack = createStackNavigator();

function ArticleDetailsScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="ArticleDetailsView" >
        <Stack.Screen name="ArticleDetailsView" component={ArticleDetailsView} options={{headerShown: false}} />
        <Stack.Screen name="Source" component={SourceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ArticleDetailsScreen;