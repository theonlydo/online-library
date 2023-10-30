import React, {useState} from 'react';
import {Image, Pressable, ScrollView, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import {BookState} from '~redux';
import styles from './styles';
import {Text} from '~components';
import {DateTimePicker} from '~libraries';

const BorrowBookScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const books: BookState = useSelector((state: any) => state.books);
  const {selectedBook} = books;

  const isValid = name !== '' && phone !== '';

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setShowDatePicker(false);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const _renderBookSection = () => {
    return (
      <View style={styles.coverContainer}>
        <Image source={{uri: selectedBook?.cover}} style={styles.image} />
      </View>
    );
  };

  const _renderBookInfo = () => {
    return (
      <>
        <Text style={styles.title}>{selectedBook?.title}</Text>
        <Text style={styles.author}>{selectedBook?.author[0].name}</Text>
        <Text style={styles.year}>Tahun terbit {selectedBook?.year}</Text>
      </>
    );
  };

  const _renderForm = () => {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.note}>
          Please fill all the fields below to schedule a book pickup{' '}
        </Text>
        <Text style={styles.textLabel}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Input your name"
          onChangeText={setName}
        />
        <Text style={styles.textLabel}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          placeholder="Input your phone number"
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <Text style={styles.textLabel}>Pickup Date</Text>

        <Pressable style={styles.dateContainer} onPress={showDatepicker}>
          <Text>{date.toDateString()}</Text>
        </Pressable>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            minimumDate={new Date()}
            onChange={onChangeDate}
          />
        )}
        <Pressable
          style={[
            styles.btnContainer,
            isValid ? styles.activeBtn : styles.inActiveBtn,
          ]}>
          <Text style={styles.btnText}>Submit</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {_renderBookSection()}
      <View style={styles.contentContainer}>
        {_renderBookInfo()}
        {_renderForm()}
      </View>
    </ScrollView>
  );
};

export default BorrowBookScreen;
