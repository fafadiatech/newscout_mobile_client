import * as React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import * as Colors from '../styles/Colors';
import styles from '../styles/Base';
import componentStyles from '../styles/IconListViewItem';

class IconListViewItem extends React.Component {
    render(){
        return(
            <View
            style={componentStyles.iconListViewItemView}>
            <TouchableOpacity>
              <View style={styles.rowAlignedView}>
                <Icon
                  name={this.props.icon}
                  size={50}
                  style={componentStyles.iconStyle}
                />
                <View style={styles.flexible}>
                  <Text
                    style={componentStyles.captionStyle}>
                    {this.props.caption}
                  </Text>
                  <Text
                    style={componentStyles.supportingStyle}>
                    {this.props.supporting}
                  </Text>
                </View>
                <Icon
                  name={'chevron-circle-right'}
                  size={30}
                  color={Colors.iconColor}
                  style={componentStyles.nextIconStyle}
                />
              </View>
            </TouchableOpacity>
          </View>
        );
    }
}

export default IconListViewItem;