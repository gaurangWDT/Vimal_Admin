import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.mainText}>Chem Expo, 2023</Text>
      <View style={styles.rowContainer}>
        <View style={styles.requirementsContainer}>
          <Text style={styles.requirementsText}>
            Total Requirements Added: 34
          </Text>
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ New Requirements</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../assets/mainscreen5.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../assets/mainscreen4.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
    backgroundColor: 'transparent',
    padding: 10,
  },
  iconImage: {
    width: 30,
    height: 29,
    resizeMode: 'contain',
  },
  buttonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
  },
  mainText: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 20,
  },
  requirementsContainer: {
    padding: 15,
    marginRight: 10,
    top: 40,
    minWidth: 500,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 5,
  },
  requirementsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  addButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#000000',
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
