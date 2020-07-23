import * as React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import TimeAgo from 'react-native-timeago';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/Base';

class FeaturedItem extends React.Component {
    render(){
        return(
            <View style={styles.cardUnitView}>
            <TouchableOpacity>
              <Text style={styles.cardUnitColoredStrip}>.</Text>
              <Image
                style={styles.cardUnitImage}
                source={{uri: this.props.coverImage}}
              />
              <View style={styles.rowAlignedView}>
                <View style={styles.flexible}>
                  <Text style={styles.boldTitle}>{this.props.title}</Text>
                  <Text style={styles.source}>{this.props.source}</Text>
                  <Text style={styles.ts}><TimeAgo time={this.props.ts} /></Text>
                </View>
                <Icon
                  name={'chevron-circle-right'}
                  size={30}
                  color={'#d62828'}
                  style={styles.cardUnitNextIcon}
                />
              </View>
            </TouchableOpacity>
          </View>            
        );
    }
}

export default FeaturedItem;