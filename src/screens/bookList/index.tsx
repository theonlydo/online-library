import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {BookCard} from '~components';
import styles from './styles';
import {appMetrics} from '~theme';
import {useSelector} from 'react-redux';
import {BookState, getBookListByGenre} from '~redux';
import {SkeletonPlaceholder, useDispatch} from '~libraries';

const BookListScreen = ({route}: any) => {
  const dispatch: any = useDispatch();
  const {genre} = route.params;

  const books: BookState = useSelector((state: any) => state.books);

  const [currentOffset, setCurrentOffset] = useState(1);
  const limitPerPage: number = 4;

  const loadMoreData = async () => {
    if (books.isLoading) {
      return;
    }
    setCurrentOffset(prev => prev + 1);

    const bookGenre = genre.toLowerCase();
    const payload = {
      params: {
        offset: currentOffset * limitPerPage,
        limit: limitPerPage,
      },
      lastData: books.list,
      genre: bookGenre,
      path: `/${bookGenre}.json`,
    };

    dispatch(getBookListByGenre(payload));
  };

  const _renderItem = ({item}: any) => {
    return (
      <BookCard
        isHorizontal
        title={item.title}
        author={item.author[0]?.name}
        cover={item.cover}
        year={item.year}
      />
    );
  };

  const _renderLoading = () => {
    return ['', ''].map((e, index) => {
      return (
        <View style={{marginTop: appMetrics.gutter.m}} key={index}>
          <SkeletonPlaceholder>
            <View>
              <SkeletonPlaceholder.Item flexDirection="row">
                <SkeletonPlaceholder.Item
                  width={150}
                  height={200}
                  borderRadius={10}
                />
                <View style={{marginLeft: appMetrics.gutter.m}}>
                  <SkeletonPlaceholder.Item
                    width={200}
                    height={10}
                    borderRadius={5}
                    marginBottom={10}
                  />
                  <SkeletonPlaceholder.Item
                    width={200}
                    height={10}
                    borderRadius={5}
                    marginBottom={10}
                  />
                </View>
              </SkeletonPlaceholder.Item>
            </View>
          </SkeletonPlaceholder>
        </View>
      );
    });
  };

  const _renderFooter = () => {
    if (books.isLoading) {
      return _renderLoading();
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={books.list}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={_renderFooter}
        onEndReachedThreshold={0.2}
        onEndReached={loadMoreData}
      />
    </View>
  );
};

export default BookListScreen;
