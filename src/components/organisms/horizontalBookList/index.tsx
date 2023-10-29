import React from 'react';
import {FlatList, View} from 'react-native';
import Text from '~components/atoms/text';
import styles from './styles';
import BookCard from '~components/molecules/bookCard';
import {appMetrics} from '~theme';
interface Props {
  list?: any;
  genre: string;
}

const HorizontalBookList = (props: Props) => {
  const {list = [], genre} = props;

  const _renderItem = ({item}: any) => {
    return (
      <BookCard
        title={item.title}
        author={item.author[0]?.name}
        cover={item.cover}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.genre}>{genre}</Text>
        <Text>Selengkapnya</Text>
      </View>
      <FlatList
        data={list}
        renderItem={_renderItem}
        horizontal
        style={{paddingLeft: appMetrics.gutter.m}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalBookList;
