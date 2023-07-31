import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import backgroundimage from '../assets/background.png';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const navigateToScreen = async () => {
      setTimeout(async () => {
        setAnimating(false);
        // try {
        //   const onboardingStatus = await AsyncStorage.getItem(
        //     'onboardingStatus',
        //   );
        //   if (onboardingStatus === null) {
        //     await AsyncStorage.setItem('onboardingStatus', 'shown');
        //     navigation.navigate('OnBoarding');
        //   } else {
        //     navigation.navigate('LoginScreen');
        //     // navigation.navigate('OnBoarding');
        //   }
        // } catch (error) {
        //   console.log('Error checking onboarding status:', error);
        // }
        navigation.navigate('Login');
        // navigation.navigate('Stack');
      }, 3000);
    };

    navigateToScreen();
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={backgroundimage} style={styles.backgroundImage}> */}
      <Image
        source={require('../assets/Asset2.png')}
        style={styles.logoImage}
      />
      {/* <ActivityIndicator
          animating={animating}
          color="#FFFFFF"
          size="large"
          style={styles.activityIndicator}
        /> */}
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  logoImage: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 'auto',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});

export default SplashScreen;
