// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
// } from 'react-native';

// const VerifyPasswordScreen = ({navigation, route}) => {
//   const [password, setPassword] = useState('');

//   const handleVerify = () => {
//     const {selectedAccount, handleLogin} = route.params;
//     handleLogin(selectedAccount, password);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Verify Password</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.button} onPress={handleVerify}>
//         <Text style={styles.buttonText}>Verify Password</Text>
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

// export default VerifyPasswordScreen;

// import React, {useState, useRef} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
// } from 'react-native';

// const VerifyPasswordScreen = ({navigation, route}) => {
//   const [otp, setOTP] = useState(['', '', '', '', '']);
//   const inputRefs = useRef([]);

//   const handleVerify = () => {
//     const {selectedAccount, handleLogin} = route.params;
//     const password = otp.join('');
//     handleLogin(selectedAccount, password);
//   };

//   const handleOTPEnter = (index, value) => {
//     const newOTP = [...otp];
//     newOTP[index] = value;
//     setOTP(newOTP);

//     if (value && index < inputRefs.current.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleOTPKeyPress = (index, event) => {
//     if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   const renderOTPInputs = () => {
//     return otp.map((digit, index) => (
//       <TextInput
//         key={index}
//         style={styles.otpInput}
//         maxLength={1}
//         keyboardType="numeric"
//         value={digit}
//         onChangeText={value => handleOTPEnter(index, value)}
//         onKeyPress={event => handleOTPKeyPress(index, event)}
//         ref={ref => (inputRefs.current[index] = ref)}
//       />
//     ));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome Back, Rajan</Text>
//       <Text style={styles.subtitle}>
//         Please set a passcode for quick access
//       </Text>
//       <View style={styles.otpContainer}>{renderOTPInputs()}</View>
//       <TouchableOpacity style={styles.button} onPress={handleVerify}>
//         <Text style={styles.buttonText}>Verify</Text>
//       </TouchableOpacity>
//       <Text style={styles.subtitle}>Or</Text>
//       <Text style={styles.subtitle}>Sign in with another User</Text>
//       <TouchableOpacity style={styles.button} onPress={handleVerify}>
//         <Text style={styles.buttonText}>Switch User</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#ffffff',
//     width: '45%',
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#000000',
//   },
//   subtitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 20,
//     color: '#000000',
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 50,
//     marginVertical: 20,
//   },
//   otpInput: {
//     width: 40,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#CCCCCC',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     textAlign: 'center',
//     marginRight: 10, // Added spacing between OTP boxes
//     backgroundColor: '#f2f2f2',
//   },
//   button: {
//     width: '60%',
//     height: 50,
//     backgroundColor: '#000000',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },
// });

// export default VerifyPasswordScreen;

import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';

const VerifyPasswordScreen = ({navigation, route}) => {
  const [otp, setOTP] = useState(['', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleVerify = () => {
    const {selectedAccount, handleLogin} = route.params;
    const password = otp.join('');
    handleLogin(selectedAccount, password);
  };
  const handleSwitch = () => {
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
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back, Rajan</Text>
        <Text style={styles.subtitle}>
          Please set a passcode for quick access
        </Text>
        <View style={styles.otpContainer}>{renderOTPInputs()}</View>
        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>Or</Text>
        <Text style={styles.subtitle}>Sign in with another User</Text>
        <TouchableOpacity style={styles.button} onPress={handleSwitch}>
          <Text style={styles.buttonText}>Switch User</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
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
    width: 40,
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
    width: '60%',
    height: 50,
    backgroundColor: '#000000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default VerifyPasswordScreen;
