// import CategoryScreen from './CategoryScreen';
// import MainScreen from './MainScreen';
// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

// const ProfileScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// };

// const SettingsScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// };

// const SideNavigation = () => {
//   const navigation = useNavigation();
//   const [activeScreen, setActiveScreen] = useState('Home');

//   const handleScreenChange = screenName => {
//     setActiveScreen(screenName);
//   };

//   const handleNavigation = screenName => {
//     setActiveScreen(screenName);
//     // navigation.navigate(screenName);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.sideMenu}>
//         <TouchableOpacity
//           style={[
//             styles.menuItem,
//             activeScreen === 'Home' && styles.activeMenuItem,
//           ]}
//           onPress={() => handleNavigation('Home')}>
//           <Text>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.menuItem,
//             activeScreen === 'Profile' && styles.activeMenuItem,
//           ]}
//           onPress={() => handleNavigation('Profile')}>
//           <Text>Profile</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.menuItem,
//             activeScreen === 'CategoryScreen' && styles.activeMenuItem,
//           ]}
//           onPress={() => handleNavigation('CategoryScreen')}>
//           <Text>Settings</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.content}>
//         {/* Render the active screen */}
//         {activeScreen === 'Home' && <HomeScreen />}
//         {activeScreen === 'Profile' && <ProfileScreen />}
//         {activeScreen === 'CategoryScreen' && <CategoryScreen />}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   sideMenu: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//     padding: 16,
//   },
//   menuItem: {
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     marginVertical: 8,
//     borderRadius: 4,
//   },
//   activeMenuItem: {
//     backgroundColor: 'lightblue',
//   },
//   content: {
//     flex: 3,
//     backgroundColor: '#ffffff',
//     padding: 16,
//   },
// });

// export default SideNavigation;

// import CategoryScreen from './CategoryScreen';
// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

// import HomeScreen from './HomeScreen';
// import RequirementScreen from './RequirementScreen';
// import MainScreen from './MainScreen';

// const SideNavigation = () => {
//   const navigation = useNavigation();
//   const [activeScreen, setActiveScreen] = useState('Home');

//   const handleScreenChange = screenName => {
//     setActiveScreen(screenName);
//   };

//   const handleNavigation = screenName => {
//     setActiveScreen(screenName);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.sideMenu}>
//         <TouchableOpacity
//           style={[
//             styles.menuItem,
//             activeScreen === 'Home' && styles.activeMenuItem,
//           ]}
//           onPress={() => handleNavigation('Home')}>
//           <Text>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.menuItem,
//             activeScreen === 'Profile' && styles.activeMenuItem,
//           ]}
//           onPress={() => handleNavigation('Profile')}>
//           <Text>Profile</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.menuItem,
//             activeScreen === 'CategoryScreen' && styles.activeMenuItem,
//           ]}
//           onPress={() => handleNavigation('CategoryScreen')}>
//           <Text>Settings</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.content}>
//         {/* Render the active screen */}
//         {activeScreen === 'Home' && <MainScreen navigation={navigation} />}
//         {activeScreen === 'Profile' && <RequirementScreen />}
//         {activeScreen === 'CategoryScreen' && <CategoryScreen />}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   sideMenu: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//     padding: 16,
//   },
//   menuItem: {
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     marginVertical: 8,
//     borderRadius: 4,
//   },
//   activeMenuItem: {
//     backgroundColor: 'lightblue',
//   },
//   content: {
//     flex: 3,
//     backgroundColor: '#ffffff',
//     padding: 16,
//   },
// });

// export default SideNavigation;

import CategoryScreen from './CategoryScreen';
import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HomeScreen from './HomeScreen';
import RequirementScreen from './RequirementScreen';
import MainScreen from './MainScreen';

const SideNavigation = () => {
  const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = useState('Main');

  const handleScreenChange = screenName => {
    setActiveScreen(screenName);
  };

  const handleNavigation = screenName => {
    setActiveScreen(screenName);
  };

  const getIconSource = screenName => {
    if (screenName === 'Main') {
      return activeScreen === 'Main'
        ? require('../assets/Asset2.png')
        : require('../assets/Asset2.png');
    } else if (screenName === 'Home') {
      return activeScreen === 'Home'
        ? require('../assets/navigatioiconselected1.png')
        : require('../assets/navigationicon1.png');
    } else if (screenName === 'Profile') {
      return activeScreen === 'Profile'
        ? require('../assets/navigationiconsSelected2.png')
        : require('../assets/navigationicon2.png');
    } else if (screenName === 'CategoryScreen') {
      return activeScreen === 'CategoryScreen'
        ? require('../assets/navigationicon3.png')
        : require('../assets/navigationicon3.png');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sideMenu}>
        <TouchableOpacity
          style={[
            styles.menuItem,
            activeScreen === 'Main' && styles.activeMenuItem,
          ]}
          onPress={() => handleNavigation('Main')}>
          <Image
            source={getIconSource('Main')}
            style={{width: 40, height: 40, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuItem,
            activeScreen === 'Home' && styles.activeMenuItem,
          ]}
          onPress={() => handleNavigation('Home')}>
          <Image source={getIconSource('Home')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuItem,
            activeScreen === 'Profile' && styles.activeMenuItem,
          ]}
          onPress={() => handleNavigation('Profile')}>
          <Image source={getIconSource('Profile')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuItem,
            activeScreen === 'CategoryScreen' && styles.activeMenuItem,
          ]}
          onPress={() => handleNavigation('CategoryScreen')}>
          <Image
            source={getIconSource('CategoryScreen')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {/* Render the active screen */}
        {activeScreen === 'Main' && <MainScreen navigation={navigation} />}
        {activeScreen === 'Home' && <HomeScreen navigation={navigation} />}
        {activeScreen === 'Profile' && (
          <RequirementScreen navigation={navigation} />
        )}
        {activeScreen === 'CategoryScreen' && (
          <CategoryScreen navigation={navigation} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sideMenu: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
    maxWidth: 80,
  },
  menuItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 15,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeMenuItem: {
    // backgroundColor: 'lightblue',
  },
  content: {
    flex: 3,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  menuIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default SideNavigation;
