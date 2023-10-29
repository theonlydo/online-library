import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {useDispatch} from '~libraries';
import {BookState, getAllBooks} from '~redux';
import styles from './styles';
import {useSelector} from 'react-redux';
import {HorizontalBookList} from '~components';

const DashboardScreen = () => {
  const dispatch: any = useDispatch();
  const [refreshing] = useState(false);
  const books: BookState = useSelector((state: any) => state.books);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = () => {
    dispatch(getAllBooks());
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={getData} />
      }>
      <HorizontalBookList
        dataList={books.groupList}
        isLoading={books.isLoading}
      />
    </ScrollView>
  );
};

export default DashboardScreen;
