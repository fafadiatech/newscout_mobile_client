import * as React from 'react'
import { Text, View, TextInput, ScrollView, FlatList, } from 'react-native'
import { SearchBar } from 'react-native-elements';

import LeftImageAlignedItem from '../components/LeftImageAlignedItem';
import RightImageAlignedItem from '../components/RightImageAlignedItem';

import SettingsScreen from './SettingsScreen';

import styles from '../styles/Base';

class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData: [],
        }
    }
    search(query) {
        fetch("http://www.newscout.in/api/v1/article/search/?domain=newscout&q=" + query)

            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    searchData: json.body.results,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.flexible}>
                <View style={{ margin: 10 }}>
                    <SearchBar
                        platform="android"
                        placeholder="Search Here..."
                        onChangeText={(text) => this.search(text)}
                    />
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.flexible}
                >
                    <FlatList
                        data={this.state.searchData}
                        renderItem={({ item, index }) => {
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
                    <SettingsScreen />
                </ScrollView>
            </View>
        )
    }
}

export default SearchScreen;