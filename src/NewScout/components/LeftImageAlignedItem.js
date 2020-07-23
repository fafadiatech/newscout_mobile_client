import * as React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import TimeAgo from 'react-native-timeago';
import styles from '../styles/TrendingScreen';

class LeftImageAlignedItem extends React.Component {
    render(){
        return(
            <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              alignItems: 'stretch',
              borderRadius: 10,
              marginRight: 5,
              marginTop: 9,
              marginBottom: 3,
              marginLeft: 5,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <TouchableOpacity>
              <Text style={{flex: 0.25, marginLeft: 12, marginRight: 12, backgroundColor: '#d62828', fontSize: 2, borderRadius: 20}}>.</Text>
              <View style={styles.rowAlignedView}>
              <Image
                style={{
                  flex: 0.5,
                  backgroundColor: 'yellow',
                  marginLeft: 7,
                  marginTop: 7,
                  marginBottom: 10,
                  width: 120,
                  height: 120,
                  borderRadius: 10,
                }}
                source={{uri: this.props.coverImage}}
              />
                <View style={styles.flexible}>
                  <Text
                    style={{
                      flex: 2,
                      fontWeight: 'bold',
                      fontSize: 19,
                      marginTop: 10,
                      marginLeft: 5,
                      marginRight: 5,
                    }}>
                    {this.props.title}
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      color: '#d62828',
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginLeft: 10,
                    }}>
                    {this.props.source}
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      marginLeft: 10,
                      marginBottom: 15,
                    }}>
                    <TimeAgo time={this.props.ts} />
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            </View>
        );
    }
}

export default LeftImageAlignedItem;