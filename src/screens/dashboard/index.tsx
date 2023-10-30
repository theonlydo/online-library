import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {useDispatch, useNavigation} from '~libraries';
import {
  BookState,
  GroupList,
  ItemBook,
  getAllBooks,
  setBookList,
  setSelectedBook,
} from '~redux';
import styles from './styles';
import {useSelector} from 'react-redux';
import {HorizontalBookList} from '~components';
import NAVIGATIONS from '~constants/navigation';

const DashboardScreen = () => {
  const dispatch: any = useDispatch();
  const navigation: any = useNavigation();
  const [refreshing] = useState(false);
  const books: BookState = useSelector((state: any) => state.books);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateToList = (item: GroupList) => {
    dispatch(setBookList(item.list));
    navigation.navigate(NAVIGATIONS.BOOK_LIST, {
      data: item.list,
      genre: item.genre,
      pageTitle: `Genre: ${item.genre}`,
    });
  };

  const onPressBook = (item: ItemBook) => {
    dispatch(setSelectedBook(item));
    navigation.navigate(NAVIGATIONS.BORROW_BOOK, {
      pageTitle: `Borrow: ${item.title}`,
    });
  };

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
        handleNavigateToDetail={navigateToList}
        onPressBook={onPressBook}
      />
    </ScrollView>
  );
};

export default DashboardScreen;
