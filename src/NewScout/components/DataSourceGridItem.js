import * as React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import * as Colors from '../styles/Colors';
import componentStyles from '../styles/DataSourceGridItem';

class DataSourceGridItem extends React.Component {
  render() {
    return (
      <View
        style={componentStyles.iconGridItemView}>
        <Icon
          name={this.props.icon}
          size={25}
          color={Colors.iconColor}
          style={componentStyles.iconGridItemIconStyle}
        />
        <Text
          style={componentStyles.captionStyle}>
          {this.props.caption}
        </Text>
      </View>
    );
  }
}

export default DataSourceGridItem;