import * as React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import TimeAgo from 'react-native-timeago';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/Base';
import componentStyles from '../styles/TrendingScreen';

import * as Colors from '../styles/Colors';
import * as DefaultIcons from '../styles/DefaultIcons';

class FeaturedItem extends React.Component {
    render(){
        return(
            <View style={componentStyles.cardUnitView}>
            <TouchableOpacity>
              <Text style={componentStyles.cardUnitColoredStrip}>.</Text>
              <Image
                style={componentStyles.cardUnitImage}
                source={{uri: this.props.coverImage}}
              />
              <View style={styles.rowAlignedView}>
                <View style={styles.flexible}>
                  <Text numberOfLines={3} style={styles.boldTitle}>{this.props.title}</Text>
                  <Text style={styles.source}>{this.props.source}</Text>
                  <Text style={styles.ts}><TimeAgo time={this.props.ts} /></Text>
                </View>
                <Icon
                  name={DefaultIcons.defaultNextIcon}
                  size={30}
                  color={Colors.basePrimaryColor}
                  style={componentStyles.cardUnitNextIcon}
                />
              </View>
            </TouchableOpacity>
          </View>            
        );
    }
}

export default FeaturedItem;