import React, {memo} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import Text from '~components/atoms/text';

interface Props {
  title: string;
  author: string;
  cover?: string;
}

const BookCard = (props: Props) => {
  const {title, author, cover} = props;

  return (
    <View style={styles.container}>
      <Image style={styles.book} source={{uri: cover}} />
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text>
        by <Text style={styles.name}>{author || '-'}</Text>
      </Text>
    </View>
  );
};

export default memo(BookCard);
