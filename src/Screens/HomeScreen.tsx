import React from 'react';
import {Text, Avatar} from 'react-native-paper';
import Screen from '../components/Screen';
import {View} from 'react-native';

const HomeScreen = () => {
  return (
    <Screen>
      <View>
        <Avatar.Icon color="white" size={34} icon="folder"></Avatar.Icon>
        <Text>Home</Text>
      </View>
    </Screen>
  );
};

export default HomeScreen;
