import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Logo from '../../static/Logo';
import {AuthContext} from '../App';
import Screen from '../components/Screen';

const styles: StyleProp<{
  button: ViewStyle;
  container: ViewStyle;
  image: ViewStyle;
  textInput: ViewStyle;
}> = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', justifyContent: 'center'},
  textInput: {
    margin: 10,
  },
  button: {
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    width: 150,
  },
  image: {
    alignSelf: 'center',
    bottom: 100,
    width: 200,
    resizeMode: 'contain',
  },
});

const AuthScreen = () => {
  const {signIn} = React.useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{justifyContent: 'center', flexGrow: 1}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Logo width={200} height={200} />
          </View>
          <TextInput
            autoCapitalize="none"
            autoCompleteType="username"
            autoCorrect={false}
            label="Unid"
            mode="outlined"
            onChangeText={setUsername}
            value={username}
            style={styles.textInput}></TextInput>
          <TextInput
            label="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            autoCompleteType="password"
            mode="outlined"
            style={styles.textInput}></TextInput>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => signIn({username, password})}>
            Sign In
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default AuthScreen;
