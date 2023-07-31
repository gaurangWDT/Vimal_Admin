import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const CategoryScreen = ({navigation}) => {
  const handelNavigation = () => {
    navigation.navigate('MainScreen');
  };

  return (
    <View>
      <TouchableOpacity onPress={handelNavigation}>
        <Text>CategoryScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
