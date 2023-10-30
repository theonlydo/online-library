import {StyleSheet} from 'react-native';
import {appMetrics, colors} from '~theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  coverContainer: {
    backgroundColor: colors.grey,
    alignItems: 'center',
    paddingVertical: appMetrics.gutter.m,
  },
  image: {
    width: '65%',
    aspectRatio: 2 / 3.3,
  },
  contentContainer: {
    paddingHorizontal: appMetrics.gutter.m,
    paddingVertical: appMetrics.gutter.s,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  author: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    marginVertical: appMetrics.gutter.xxs,
  },
  year: {
    fontSize: 14,
  },
  note: {
    marginBottom: appMetrics.gutter.s,
  },
  formContainer: {
    marginTop: appMetrics.gutter.xl,
  },
  input: {
    backgroundColor: colors.softGrey,
    flex: 1,
    paddingHorizontal: appMetrics.gutter.s,
    borderRadius: 10,
    marginBottom: appMetrics.gutter.s,
  },
  btnContainer: {
    padding: appMetrics.gutter.s,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: appMetrics.gutter.xl,
  },
  activeBtn: {
    backgroundColor: colors.primary,
  },
  inActiveBtn: {
    backgroundColor: colors.grey,
  },
  btnText: {
    fontWeight: 'bold',
    color: colors.white,
  },
  textLabel: {
    fontSize: 12,
    marginBottom: appMetrics.gutter.xxs,
  },
  dateContainer: {
    backgroundColor: colors.softGrey,
    padding: appMetrics.gutter.s,
    borderRadius: 10,
  },
});

export default styles;
