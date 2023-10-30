import {StyleSheet} from 'react-native';
import {appMetrics, colors} from '~theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    textAlign: 'center',
    marginHorizontal: appMetrics.gutter.m,
  },
  btnContainer: {
    paddingVertical: appMetrics.gutter.s,
    paddingHorizontal: appMetrics.gutter.xl,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: appMetrics.gutter.xl,
    backgroundColor: colors.primary,
  },
  btnTxt: {
    color: colors.white,
  },
});

export default styles;
