import * as React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import TimeAgo from 'react-native-timeago';
import styles from '../styles/Base';
import componentStyles from '../styles/ImageAlignedItem';

class RightImageAlignedItem extends React.Component {
    render(){
        return(
            <View
            style={componentStyles.cardUnitView}>
            <TouchableOpacity onPress={this.props.onPressHandler}>
              <Text style={componentStyles.coloredStripe}>.</Text>
              <View style={styles.rowAlignedView}>
                <View style={styles.flexible}>
                  <Text
                    numberOfLines={3}
                    style={componentStyles.boldTitle}>
                    {this.props.title}
                  </Text>
                  <Text
                    style={styles.source}>
                    {this.props.source}
                  </Text>
                  <Text
                    style={styles.ts}>
                    <TimeAgo time={this.props.ts} />
                  </Text>
                </View>
                <Image
                style={componentStyles.roundedImageRight}
                source={{uri: this.props.coverImage}}
              />
              </View>
            </TouchableOpacity>
            </View>
        );
    }
}

export default RightImageAlignedItem;