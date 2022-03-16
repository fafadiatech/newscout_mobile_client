import * as React from 'react';
import {View, FlatList} from 'react-native';

import LeftImageAlignedSuggestionItem from './LeftImageAlignedSuggestionItem';
import RightImageAlignedSuggestionItem from './RightImageAlignedSuggestionItem';
import Separator from './Separator';

class MobileSuggestionsList extends React.Component {
    render(){
        return(
            <View style={{ flex: 1 }} >
            <FlatList
                data={this.props.data.slice(0, 4)}
                renderItem={({ item, index }) => {
                    if (index % 2 == 0) {
                        return (
                            <View>
                                <LeftImageAlignedSuggestionItem
                                    coverImage={item.cover_image}
                                    title={item.title}
                                    source={item.source}
                                    ts={item.published_on}
                                    onPressHandler={() => {
                                        this.props.navigation.push('Article Details', 
                                        {
                                            articleID: item.id,
                                            articleSlug: item.slug,
                                        }
                                        );
                                    }}
                                />
                                <Separator />
                            </View>
                        );
                    } else {
                        return (
                            <View>
                                <RightImageAlignedSuggestionItem
                                    coverImage={item.cover_image}
                                    title={item.title}
                                    source={item.source}
                                    ts={item.published_on}
                                    onPressHandler={() => {
                                        this.props.navigation.push('Article Details', 
                                        {
                                            articleID: item.id,
                                            articleSlug: item.slug,
                                        }
                                        );
                                    }}
                                />
                                <Separator />
                            </View>
                        );
                    }
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
        );
    }
}

export default MobileSuggestionsList;