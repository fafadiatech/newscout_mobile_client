import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';


import styles from '../styles/Base';
import DataSourceGridItem from '../components/DataSourceGridItem';
import VideoItemHorizontal from '../components/VideoItemHorizontal';
import VideoItemVertical from '../components/VideoItemVertical';

class VideosScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          coverImage: 'https://picsum.photos/200/200',
          title:
            'Occaecat occaecat ullamco velit velit id dolor cupidatat pariatur deserunt fugiat.',
          source: 'financialexpress.com',
        },
        {
          coverImage: 'https://picsum.photos/200/200',
          title:
            'Occaecat occaecat ullamco velit velit id dolor cupidatat pariatur deserunt fugiat.',
          source: 'financialexpress.com',
        },

        {
          coverImage: 'https://picsum.photos/200/200',
          title:
            'Occaecat occaecat ullamco velit velit id dolor cupidatat pariatur deserunt fugiat.',
          source: 'financialexpress.com',
        },
        {
          coverImage: 'https://picsum.photos/200/200',
          title:
            'Occaecat occaecat ullamco velit velit id dolor cupidatat pariatur deserunt fugiat.',
          source: 'financialexpress.com',
        },
        {
          coverImage: 'https://picsum.photos/200/200',
          title:
            'Occaecat occaecat ullamco velit velit id dolor cupidatat pariatur deserunt fugiat.',
          source: 'financialexpress.com',
        },
        {
          coverImage: 'https://picsum.photos/200/200',
          title:
            'Occaecat occaecat ullamco velit velit id dolor cupidatat pariatur deserunt fugiat.',
          source: 'financialexpress.com',
        },
        {
          coverImage: 'https://picsum.photos/200/200',
          title:
            'Occaecat occaecat ullamco velit velit id dolor cupidatat pariatur deserunt fugiat.',
          source: 'financialexpress.com',
        },
        {
          coverImage: 'https://picsum.photos/200/200',
          title:
            'Occaecat occaecat ullamco velit velit id dolor cupidatat pariatur deserunt fugiat.',
          source: 'financialexpress.com',
        },
      ],
      dataSource: [
        {
          icon: 'firefox',
          caption: 'Trending'
        },
        {
          icon: 'pie-chart',
          caption: 'Sector Updates'
        },
        {
          icon: 'globe',
          caption: 'Regional Updates'
        },
        {
          icon: 'usd',
          caption: 'Finance'
        },
        {
          icon: 'money',
          caption: 'Economics'
        },
        {
          icon: 'th',
          caption: 'Misc'
        }
      ],
    };

  }
  render() {

    //Layout 1

    return (
        <View style={styles.flexible}>
          <ScrollView
            style={styles.flexible}>
            <Text style={styles.screenHeading}>Videos</Text>
            <FlatList
              style={styles.flexible}
              data={this.state.data}
              renderItem={({item}) => (
                <VideoItemVertical
                  coverImage={item.coverImage}
                  title={item.title}
                  source={item.source}
                />
              )}
              keyExtractor={(item, index) =>
                index.toString() 
              }
            />
          </ScrollView>
        </View>
      );


    //Layout 2

    // return (
    //   <View style={styles.flexible}>
    //     <ScrollView
    //       showsVerticalScrollIndicator={false}
    //       style={styles.flexible}>
    //       <FlatList
    //         style={styles.flexible}
    //         data={this.state.dataSource}
    //         renderItem={({ item }) => (
    //           <DataSourceGridItem icon={item.icon} caption={item.caption} />
    //         )}
    //         numColumns={2}
    //         keyExtractor={(item, index) => index.toString()}
    //       />
    //       <Text style={styles.screenHeading}>Videos</Text>
    //       <FlatList
    //         showsHorizontalScrollIndicator={false}
    //         style={styles.flexible}
    //         data={this.state.data}
    //         horizontal={true}
    //         renderItem={({ item }) => (
    //           <VideoItemHorizontal
    //             coverImage={item.coverImage}
    //             title={item.title}
    //             source={item.source}
    //           />
    //         )}
    //         keyExtractor={(item, index) => index.toString()}
    //       />

    //       <Text style={styles.screenHeading}>Trending Videos</Text>
    //       <FlatList
    //         style={styles.flexible}
    //         data={this.state.data}
    //         renderItem={({ item }) => (
    //           <VideoItemVertical
    //             coverImage={item.coverImage}
    //             title={item.title}
    //             source={item.source}
    //           />
    //         )}
    //         keyExtractor={(item, index) => index.toString()}
    //       />
    //     </ScrollView>
    //   </View>
    // );

  }

}

export default VideosScreen;