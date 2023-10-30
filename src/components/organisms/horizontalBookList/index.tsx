import React from 'react';
import {FlatList, Pressable, View} from 'react-native';
import styles from './styles';
import {appMetrics} from '~theme';
import {GroupList} from '~redux';
import {SkeletonPlaceholder} from '~libraries';
import {BookCard, Text} from '~components';
interface Props {
  dataList: Array<GroupList>;
  isLoading?: boolean;
  handleNavigateToDetail: any;
  onPressBook: any;
}

const HorizontalBookList = (props: Props) => {
  const {
    dataList = [],
    isLoading = true,
    handleNavigateToDetail = () => {},
    onPressBook = () => {},
  } = props;

  const _renderItem = ({item, index}: any) => {
    return (
      <View key={index}>
        <BookCard bookData={item} key={index} onPressBook={onPressBook} />
      </View>
    );
  };

  const _renderGenre = (item: GroupList, index: number) => {
    return (
      <View style={styles.container} key={index}>
        <View style={styles.topContainer}>
          <Text style={styles.genre}>{item.genre}</Text>
          <Pressable
            onPress={() => {
              handleNavigateToDetail(item);
            }}>
            <Text>More books</Text>
          </Pressable>
        </View>
        <FlatList
          horizontal
          data={item.list}
          renderItem={_renderItem}
          style={{paddingLeft: appMetrics.gutter.m}}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  if (isLoading) {
    return ['', '', ''].map((e: any, index: number) => {
      return (
        <View style={{margin: appMetrics.gutter.m}} key={index}>
          <SkeletonPlaceholder>
            <View>
              <SkeletonPlaceholder.Item
                width={100}
                height={10}
                borderRadius={5}
                marginBottom={10}
              />
              <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                <SkeletonPlaceholder.Item
                  width={150}
                  height={200}
                  borderRadius={10}
                />
                <SkeletonPlaceholder.Item marginLeft={20}>
                  <SkeletonPlaceholder.Item
                    width={150}
                    height={200}
                    borderRadius={10}
                  />
                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder.Item>
            </View>
          </SkeletonPlaceholder>
        </View>
      );
    });
  }

  if (dataList.length === 0) {
    return null;
  }

  return dataList.map((item: GroupList, index: number) => {
    return _renderGenre(item, index);
  });
};

export default HorizontalBookList;
