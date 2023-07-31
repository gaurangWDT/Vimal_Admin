// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

// const Login = ({navigation}) => {
//   const [accounts, setAccounts] = useState([
//     {id: 1, name: 'Rajan Shah', email: 'rajan@vimalagency.com', password: null},
//     {id: 2, name: 'Rajan Shah', email: 'rajan@vimalagency.com', password: null},
//     {id: 3, name: 'Rajan Shah', email: 'rajan@vimalagency.com', password: null},
//   ]);
//   const [selectedAccount, setSelectedAccount] = useState(null);

//   const handleAccountSelection = account => {
//     setSelectedAccount(account);
//     navigation.navigate('VerifyPasswordScreen', {
//       selectedAccount: account,
//       handleLogin: handleLogin,
//     });
//   };

//   const handleAddAccount = () => {
//     navigation.navigate('CreateAccountScreen', {
//       handleCreateAccount: handleCreateAccount,
//     });
//   };

//   const handleCreateAccount = (name, email, password) => {
//     const newAccount = {
//       id: accounts.length + 1,
//       name,
//       email,
//       password,
//     };

//     setAccounts([...accounts, newAccount]);
//     setSelectedAccount(newAccount);
//     navigation.navigate('VerifyPasswordScreen', {
//       selectedAccount: newAccount,
//       handleLogin: handleLogin,
//     });
//   };

//   const handleLogin = (account, password) => {
//     if (account.password === password) {
//       console.log('Login successful');
//       navigation.navigate('Stack');
//       // Perform further actions for successful login
//     } else {
//       console.log('Invalid password');
//       // Handle invalid password case
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select Account to Login</Text>
//       {accounts.map(account => (
//         <TouchableOpacity
//           key={account.id}
//           style={[
//             styles.card,
//             selectedAccount?.id === account.id && styles.selectedCard,
//           ]}
//           onPress={() => handleAccountSelection(account)}>
//           <Text style={styles.cardTitle}>{account.name}</Text>
//           <Text style={styles.cardTitle}>{account.email}</Text>
//         </TouchableOpacity>
//       ))}
//       <TouchableOpacity
//         style={styles.addAccountButton}
//         onPress={handleAddAccount}>
//         <Text style={styles.addAccountButtonText}>Add New Account</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     // alignItems: 'center',
//     justifyContent: 'center',
//     paddingLeft: '8%',
//     width: '45%',
//     backgroundColor: '#ffffff',
//   },
//   title: {
//     fontSize: 35,
//     fontWeight: 'bold',
//     marginBottom: 35,
//     color: '#000000',
//   },
//   card: {
//     width: '80%',
//     // minHeight: 80,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     padding: 13,
//     paddingLeft: 20,
//     marginBottom: 20,
//     borderWidth: 2,
//     borderColor: 'grey',
//   },
//   cardTitle: {
//     color: '#000000',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   selectedCard: {
//     backgroundColor: '#E8E8E8',
//   },
//   addAccountButton: {
//     width: '80%',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     padding: 10,
//     paddingLeft: 20,
//     marginBottom: 20,
//     borderWidth: 2,
//     borderColor: 'grey',
//     minHeight: 80,
//   },
//   addAccountButtonText: {
//     color: '#000000',
//     fontSize: 18,
//     fontWeight: 'bold',
//     height: 40,
//     textAlignVertical: 'center',
//   },
// });

// export default Login;
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const Login = ({navigation}) => {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: 'Rajan Shah',
      email: 'rajan@vimalagency.com',
      password: '12345',
    },
    {
      id: 2,
      name: 'Rajan Shah',
      email: 'rajan@vimalagency.com',
      password: '12345',
    },
    {
      id: 3,
      name: 'Rajan Shah',
      email: 'rajan@vimalagency.com',
      password: '12345',
    },
  ]);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleAccountSelection = account => {
    setSelectedAccount(account);
    navigation.navigate('VerifyPasswordScreen', {
      selectedAccount: account,
      handleLogin: handleLogin,
    });
  };

  const handleAddAccount = () => {
    navigation.navigate('CreateAccountScreen', {
      handleCreateAccount: handleCreateAccount,
    });
  };

  const handleCreateAccount = (name, email, password) => {
    const newAccount = {
      id: accounts.length + 1,
      name,
      email,
      password,
    };

    setAccounts([...accounts, newAccount]);
    setSelectedAccount(newAccount);
    navigation.navigate('VerifyPasswordScreen', {
      selectedAccount: newAccount,
      handleLogin: handleLogin,
    });
  };

  const handleLogin = (account, password) => {
    if (account.password === password) {
      console.log('Login successful');
      navigation.navigate('Stack');
      // Perform further actions for successful login
    } else {
      console.log('Invalid password');
      console.log(password);
      // Handle invalid password case
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Select Account to Login</Text>
        {accounts.map(account => (
          <TouchableOpacity
            key={account.id}
            style={[
              styles.card,
              selectedAccount?.id === account.id && styles.selectedCard,
            ]}
            onPress={() => handleAccountSelection(account)}>
            <Text style={styles.cardTitle}>{account.name}</Text>
            <Text style={styles.cardTitle}>{account.email}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.addAccountButton}
          onPress={handleAddAccount}>
          <Text style={styles.addAccountButtonText}>Add New Account</Text>
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
    justifyContent: 'center',
    paddingLeft: '8%',
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
    marginBottom: 35,
    color: '#000000',
  },
  card: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 13,
    paddingLeft: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'grey',
  },
  cardTitle: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
  },
  selectedCard: {
    backgroundColor: '#E8E8E8',
  },
  addAccountButton: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'grey',
    minHeight: 80,
  },
  addAccountButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    height: 40,
    textAlignVertical: 'center',
  },
});

export default Login;
