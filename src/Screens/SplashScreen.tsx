import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import Logo from '../../static/Logo';

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', justifyContent: 'center'},
});
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo width={200} height={200} />
    </View>
  );
};
export default SplashScreen;
