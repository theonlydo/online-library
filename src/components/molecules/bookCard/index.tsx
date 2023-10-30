import React, {memo} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import {Text} from '~components';

interface Props {
  title: string;
  author: string;
  cover?: string;
  year?: string;
  isHorizontal?: boolean;
}

const BookCard = (props: Props) => {
  const {title, author, cover, isHorizontal, year} = props;

  if (isHorizontal) {
    return (
      <View style={styles.containerVertical}>
        <Image style={styles.book} source={{uri: cover}} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text>
            by <Text style={styles.name}>{author || '-'}</Text>
          </Text>
          <Text>year: {year}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.book} source={{uri: cover}} />
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text numberOfLines={1}>
        by <Text style={styles.name}>{author || '-'}</Text>
      </Text>
    </View>
  );
};

export default memo(BookCard);
