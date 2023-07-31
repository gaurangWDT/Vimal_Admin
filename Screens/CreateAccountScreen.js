import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

const CreateAccountScreen = ({navigation, route}) => {
  const [newAccountName, setNewAccountName] = useState('');
  const [newAccountEmail, setNewAccountEmail] = useState('');

  const handleCreate = () => {
    const {handleCreateAccount} = route.params;
    handleCreateAccount(newAccountName, newAccountEmail, null); // Pass null as the password for now
    navigation.navigate('CreatePasswordScreen', {
      selectedAccount: {name: newAccountName, email: newAccountEmail}, // Pass the newly created account object
      handleCreateAccount: handleCreateAccount,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login To Your Account</Text>
        <Text style={styles.subTitle}>Login with your Email Id & Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={newAccountName}
          onChangeText={setNewAccountName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={newAccountEmail}
          onChangeText={setNewAccountEmail}
        />

        <TouchableOpacity style={styles.button} onPress={handleCreate}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require('../assets/sideImage.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <Image
        source={require('../assets/Asset2.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    maxWidth: '45%',
  },
  image: {
    flex: 1,
    width: '55%',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    width: 130,
    height: 130,
    right: '18%',
    top: '10%',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 60,
    color: '#000000',
  },
  input: {
    width: '70%',
    height: 40,
    borderBottomWidth: 2,
    borderColor: '#000000',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: '70%',
    height: 60,
    backgroundColor: '#000000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CreateAccountScreen;
