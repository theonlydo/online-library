import {StyleSheet} from 'react-native';
import {appMetrics, colors} from '~theme';

const styles = StyleSheet.create({
  container: {
    marginBottom: appMetrics.gutter.xl,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: appMetrics.gutter.m,
    paddingBottom: appMetrics.gutter.xs,
  },
  genre: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
