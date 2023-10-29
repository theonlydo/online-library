import * as React from 'react';
import {Text as ReactNativeText, TextStyle} from 'react-native';
import {I18n} from 'i18n-js';
import id from '~i18n/id.json';
import en from '~i18n/en.json';

interface TextProps {
  text?: string;
  children?: React.ReactNode;
  tx?: string;
  txOptions?: object;
  style?: TextStyle | TextStyle[];
  numberOfLines?: number;
}

const Text = (props: TextProps) => {
  const {tx, txOptions = {}, text, children, style, ...rest} = props;

  const i18n = new I18n({
    id: id,
    en: en,
  });
  i18n.locale = 'id';

  // figure out which content to use
  const i18nText = tx && i18n.t(tx, txOptions);
  const content = i18nText || text || children;

  return (
    <ReactNativeText {...rest} style={style}>
      {content}
    </ReactNativeText>
  );
};

export default Text;
