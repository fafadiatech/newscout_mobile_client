import { Text, View, TextInput, ScrollView, FlatList, } from 'react-native'
import React from 'react'

import { SearchBar } from 'react-native-elements';

import LeftImageAlignedItem from '../components/LeftImageAlignedItem';
import RightImageAlignedItem from '../components/RightImageAlignedItem';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData: [],
            // noData: false,
        }
    }
    search(key) {
        console.warn(key);
        fetch("http://www.newscout.in/api/v1/article/search/?domain=newscout&q=" + key)

            .then((data) => {
                data.json()
                    .then((resp) => {
                        console.warn("response", resp)
                        this.setState({
                            searchData: resp.body.results,
                            // noData: false,
                        })
                        console.warn("resp", this.state.searchData);

                    })
                    .catch((error) => {
                        console.error(error);
                        // this.setState({
                        //     noData:true,
                        //     searchData: null,
                        // });
                    });
            })

    }

    render() {
        return (
            <View>
                <View style={{ margin: 10 }}>
                    <SearchBar
                        platform="android"
                        placeholder="Search Here..."
                        onChangeText={(text) => this.search(text)}
                    />
                </View>

                <ScrollView >
                    {/* {
                 this.state.searchData && 
                         this.state.searchData.map((item,index) => {
                             return (
                         <View> </View>  )} )}  */}

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
                                            //console.log(this.props)
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
                                            // console.log(this.props)
                                        }}
                                    />
                                );
                            }
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />

                    {/* {
                        //this.state.searchData.length == 0 &&
                         this.state.noData &&
                        (
                            <View style={{margin: 10, alignSelf: 'center'}}>
                                <Text>No Data Found</Text>
                            </View>
                        )
                    } */}
                </ScrollView>

            </View>
        )

    }
}


export default Search