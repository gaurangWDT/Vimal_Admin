import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './Screens/SplashScreen';

import CategoryScreen from './Screens/CategoryScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './Screens/Login';
import CreateAccountScreen from './Screens/CreateAccountScreen';
import VerifyPasswordScreen from './Screens/VerifyPasswordScreen';
import CreatePasswordScreen from './Screens/CreatePasswordScreen';
import SideNavigation from './Screens/SideNavigation';
import RequirementScreen from './Screens/RequirementScreen';
import HomeScreen from './Screens/HomeScreen';

const Drawer = createDrawerNavigator();
function StackScreen() {
  return (
    // <Drawer.Navigator
    //   screenOptions={{
    //     activeTintColor: '#e91e63',
    //     itemStyle: {marginVertical: 10},
    //   }}>
    //   <Drawer.Screen
    //     name="Main"
    //     component={MainScreen}
    //     options={{drawerLabel: 'Home'}}
    //   />
    //   <Drawer.Screen
    //     name="Category"
    //     component={CategoryScreen}
    //     options={{drawerLabel: 'Profile'}}
    //   />
    // </Drawer.Navigator>
    <Stack.Navigator initialRouteName="SideNavigation">
      {/* SplashScreen which will come once for 5 Seconds */}
      <Stack.Screen
        name="SideNavigation"
        component={SideNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RequirementScreen"
        component={RequirementScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreatePasswordScreen"
          component={CreatePasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifyPasswordScreen"
          component={VerifyPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Stack"
          component={StackScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

// import React from 'react';
// import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createStackNavigator} from '@react-navigation/stack';

// import SplashScreen from './Screens/SplashScreen';
// import MainScreen from './Screens/MainScreen';
// import CategoryScreen from './Screens/CategoryScreen';
// import Login from './Screens/Login';
// import CreateAccountScreen from './Screens/CreateAccountScreen';
// import VerifyPasswordScreen from './Screens/VerifyPasswordScreen';
// import CreatePasswordScreen from './Screens/CreatePasswordScreen';
// import SideNavigation from './Screens/SideNavigation';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const MainStackNavigator = () => (
//   <Stack.Navigator initialRouteName="MainScreen" headerMode="none">
//     <Stack.Screen name="MainScreen" component={MainScreen} />
//     <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
//   </Stack.Navigator>
// );

// const Navigation = () => {
//   const isLoggedIn = true; // Set this to true if the user is logged in, otherwise false

//   return (
//     <NavigationContainer>
//       {isLoggedIn ? (
//         <Drawer.Navigator
//           drawerContent={props => <SideNavigation {...props} />}>
//           <Drawer.Screen name="Stack" component={MainStackNavigator} />
//         </Drawer.Navigator>
//       ) : (
//         <Stack.Navigator initialRouteName="Login" headerMode="none">
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen
//             name="CreateAccountScreen"
//             component={CreateAccountScreen}
//           />
//           <Stack.Screen
//             name="VerifyPasswordScreen"
//             component={VerifyPasswordScreen}
//           />
//           <Stack.Screen
//             name="CreatePasswordScreen"
//             component={CreatePasswordScreen}
//           />
//         </Stack.Navigator>
//       )}
//     </NavigationContainer>
//   );
// };

// export default Navigation;
