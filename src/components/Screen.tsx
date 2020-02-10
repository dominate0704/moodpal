import {StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fefefe',
    flex: 1,
  },
});

const Screen = ({children}: {children: any}) => {
  return React.Children.map(children, (child: any) => {
    return {
      ...child,
      props: {
        ...child.props,
        style: {
          ...child.style,
          ...styles.screen,
        },
      },
    };
  });
};

export default Screen;
