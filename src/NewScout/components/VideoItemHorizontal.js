import * as React from 'react';
import { View, Text, Image } from 'react-native';
import TimeAgo from 'react-native-timeago';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/Base';
import componentStyles from '../styles/VideosScreen';
import * as Colors from '../styles/Colors';
import * as DefaultIcons from '../styles/DefaultIcons';

class VideoItemHorizontal extends React.Component {
  render() {
    return (
      <View style={componentStyles.cardUnitViewHorz}>
        <Text style={componentStyles.cardUnitColoredStripHorz}>.</Text>
        <Image
          style={componentStyles.cardUnitImageHorz}
          source={{ uri: this.props.coverImage }}
        />
        <View style={styles.rowAlignedView}>
          <View style={styles.flexible}>
            <Text numberOfLines={3} style={componentStyles.boldTitle}>{this.props.title}</Text>
            <Text style={componentStyles.ts}><TimeAgo time={this.props.ts} /></Text>
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

export default VideoItemHorizontal;