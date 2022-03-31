import * as React from 'react';
import { View, Text, Image } from 'react-native';
import TimeAgo from 'react-native-timeago';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/Base';
import componentStyles from '../styles/VideosScreen';
import * as Colors from '../styles/Colors';
import * as DefaultIcons from '../styles/DefaultIcons';

class VideoItemVertical extends React.Component {
  render() {
    return (
      <View style={componentStyles.cardUnitView}>
        <Text style={componentStyles.cardUnitColoredStrip}>.</Text>
        <Image
          style={componentStyles.cardUnitImage}
          source={{ uri: this.props.coverImage }}
        />
        <View style={styles.rowAlignedView}>
          <View style={styles.flexible}>
            <Text numberOfLines={3} style={componentStyles.boldTitle}>{this.props.title}</Text>
            <View style={styles.rowAlignedView}>
              <Text style={componentStyles.source}>{this.props.source}</Text>
              <Text style={componentStyles.ts}><TimeAgo time={this.props.ts} /></Text>
            </View>
          </View>
          <Icon
            name={DefaultIcons.defaultDotsIcon}
            size={20}
            color={Colors.basePrimaryColor}
            style={componentStyles.cardUnitDotsIcon}
          />
        </View>
      </View>
    );
  }
}

export default VideoItemVertical;