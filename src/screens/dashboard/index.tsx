import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from '~libraries';
import {GroupList, getAllBooks} from '~redux';
import styles from './styles';
import HorizontalBookList from '~components/organisms/horizontalBookList';
import {useSelector} from 'react-redux';

const DashboardScreen = () => {
  const dispatch: any = useDispatch();
  const books: any = useSelector((state: any) => state.books);

  useEffect(() => {
    inititalData();
  }, []);

  const inititalData = () => {
    dispatch(getAllBooks());
  };

  const _renderBookList = () => {
    if (books?.groupList) {
      return books.groupList.map((item: GroupList) => {
        return <HorizontalBookList genre={item.genre} list={item?.list} />;
      });
    }
  };

  return <ScrollView style={styles.container}>{_renderBookList()}</ScrollView>;
};

export default DashboardScreen;
