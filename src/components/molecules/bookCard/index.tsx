import React, {memo} from 'react';
import {Image, Pressable, View} from 'react-native';
import styles from './styles';
import {Text} from '~components';
import {ItemBook} from '~redux';

interface Props {
  isHorizontal?: boolean;
  onPressBook?: any;
  bookData: ItemBook;
}

const BookCard = (props: Props) => {
  const {isHorizontal, onPressBook, bookData} = props;

  if (isHorizontal) {
    return (
      <Pressable
        style={styles.containerVertical}
        onPress={() => {
          onPressBook(bookData);
        }}>
        <Image style={styles.book} source={{uri: bookData?.cover}} />
        <View style={styles.rightContainer}>
          <Text style={styles.titleHorizontal}>{bookData?.title}</Text>
          <Text>
            by{' '}
            <Text style={styles.name}>{bookData?.author[0]?.name || '-'}</Text>
          </Text>
          <Text>year: {bookData?.year}</Text>
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        onPressBook(bookData);
      }}>
      <Image style={styles.book} source={{uri: bookData?.cover}} />
      <Text style={styles.title} numberOfLines={1}>
        {bookData?.title}
      </Text>
      <Text numberOfLines={1}>
        by <Text style={styles.name}>{bookData.author[0]?.name || '-'}</Text>
      </Text>
    </Pressable>
  );
};

export default memo(BookCard);
