import React from 'react';
import {FlatList, View} from 'react-native';
import Text from '~components/atoms/text';
import styles from './styles';
import BookCard from '~components/molecules/bookCard';
import {appMetrics} from '~theme';
import {GroupList} from '~redux';
import {SkeletonPlaceholder} from '~libraries';
interface Props {
  dataList: Array<GroupList>;
  isLoading?: boolean;
}

const HorizontalBookList = (props: Props) => {
  const {dataList = [], isLoading = true} = props;

  const _renderItem = ({item}: any) => {
    return (
      <BookCard
        title={item.title}
        author={item.author[0]?.name}
        cover={item.cover}
      />
    );
  };

  const _renderGenre = (item: GroupList) => {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.genre}>{item.genre}</Text>
          <Text>Selengkapnya</Text>
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
    return ['', '', ''].map(e => {
      return (
        <View style={{margin: appMetrics.gutter.m}}>
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

  return dataList.map((item: GroupList) => {
    return _renderGenre(item);
  });
};

export default HorizontalBookList;
