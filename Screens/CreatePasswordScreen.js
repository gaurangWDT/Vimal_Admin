// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
// } from 'react-native';
// const CreatePasswordScreen = ({navigation, route}) => {
//   const [newAccountPassword, setNewAccountPassword] = useState('');

//   const handleCreate = () => {
//     const {handleCreateAccount, selectedAccount} = route.params;
//     const {name, email} = selectedAccount;

//     handleCreateAccount(name, email, newAccountPassword);
//     navigation.navigate('Login');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Create New Password</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={newAccountPassword}
//         onChangeText={setNewAccountPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.button} onPress={handleCreate}>
//         <Text style={styles.buttonText}>Create Password</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#CCCCCC',
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   button: {
//     width: '100%',
//     height: 40,
//     backgroundColor: '#007AFF',
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },
// });

// export default CreatePasswordScreen;

import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const CreatePasswordScreen = ({navigation, route}) => {
  const [otp, setOTP] = useState(['', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleCreate = () => {
    const {handleCreateAccount, selectedAccount} = route.params;
    const {name, email} = selectedAccount;

    const password = otp.join('');
    handleCreateAccount(name, email, password);
    navigation.navigate('Login');
  };

  const handleOTPEnter = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOTPKeyPress = (index, event) => {
    if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const renderOTPInputs = () => {
    return otp.map((digit, index) => (
      <TextInput
        key={index}
        style={styles.otpInput}
        maxLength={1}
        keyboardType="numeric"
        value={digit}
        onChangeText={value => handleOTPEnter(index, value)}
        onKeyPress={event => handleOTPKeyPress(index, event)}
        ref={ref => (inputRefs.current[index] = ref)}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome </Text>
      <Text style={styles.subtitle}>
        Please set a passcode for quick access{' '}
      </Text>
      <View style={styles.otpContainer}>{renderOTPInputs()}</View>
      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
    marginVertical: 20,
  },
  otpInput: {
    width: '3%',
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
    marginRight: 10, // Added spacing between OTP boxes
    backgroundColor: '#f2f2f2',
  },
  button: {
    width: '30%',
    height: 40,
    backgroundColor: '#000000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default CreatePasswordScreen;
