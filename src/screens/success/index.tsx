import React from 'react';
import {Image, Pressable, View} from 'react-native';
import styles from './styles';
import {LOCAL_IMG} from '~constants';
import {Text} from '~components';
import {useNavigation} from '@react-navigation/native';
import NAVIGATIONS from '~constants/navigation';

const SuccesBooking = () => {
  const navigation: any = useNavigation();

  const navigateToDashboard = () => {
    navigation.navigate(NAVIGATIONS.DASHBOARD);
  };

  return (
    <View style={styles.container}>
      <Image source={LOCAL_IMG.SUCCESS} style={styles.img} />
      <Text style={styles.title}>Success to schedule pickup</Text>
      <Text style={styles.desc}>
        please pick up the book according to the schedule you've chosen
      </Text>

      <Pressable style={styles.btnContainer} onPress={navigateToDashboard}>
        <Text style={styles.btnTxt}>Back to Dashboard</Text>
      </Pressable>
    </View>
  );
};

export default SuccesBooking;
