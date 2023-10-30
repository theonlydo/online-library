import {StyleSheet} from 'react-native';
import {appMetrics, colors} from '~theme';

const width = appMetrics.screen.width / 2.3;

const styles = StyleSheet.create({
  container: {
    width: width,
    marginRight: appMetrics.gutter.xl,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 2,
  },
  containerVertical: {
    flex: 1,
    flexDirection: 'row',
    marginTop: appMetrics.gutter.m,
  },
  book: {
    width: width,
    aspectRatio: 2 / 3,
    borderRadius: appMetrics.rounded.base,
    backgroundColor: colors.grey,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  titleHorizontal: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  name: {
    fontWeight: 'bold',
    color: colors.primary,
    fontSize: 14,
    marginTop: appMetrics.gutter.s,
  },
  genre: {
    color: colors.primary,
  },
  rightContainer: {
    marginLeft: appMetrics.gutter.m,
  },
});

export default styles;
