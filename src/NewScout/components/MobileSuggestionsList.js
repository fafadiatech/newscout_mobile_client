import * as React from 'react';
import {View, Image, Text} from 'react-native';

import * as Colors from '../styles/Colors';

import LeftImageAlignedSuggestionItem from './LeftImageAlignedSuggestionItem';
import RightImageAlignedSuggestionItem from './RightImageAlignedSuggestionItem';
import Separator from './Separator';

class MobileSuggestionsList extends React.Component {
    render(){
        return(
                <View style={{flex: 1}}>
                    <LeftImageAlignedSuggestionItem
                        coverImage={this.props.data[0].coverImage}
                        title={this.props.data[0].title}
                        source={this.props.data[0].source}
                    />
                    <Separator />
                    <RightImageAlignedSuggestionItem
                        coverImage={this.props.data[1].coverImage}
                        title={this.props.data[1].title}
                        source={this.props.data[1].source}
                    />
                    <Separator />
                    <LeftImageAlignedSuggestionItem
                        coverImage={this.props.data[2].coverImage}
                        title={this.props.data[2].title}
                        source={this.props.data[2].source}
                    />
                    <Separator />
                    <RightImageAlignedSuggestionItem
                        coverImage={this.props.data[3].coverImage}
                        title={this.props.data[3].title}
                        source={this.props.data[3].source}
                    />
                    <Separator />
            </View>
        );
    }
}

export default MobileSuggestionsList;