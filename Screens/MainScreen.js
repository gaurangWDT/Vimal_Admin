import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

const ExhibitionScreen = () => {
  const exhibitions = [
    {image: require('../assets/mainscreen1.png'), text: 'Chem Expo, 2023'},
    {image: require('../assets/mainscreen2.png'), text: 'PU Tech, 2023'},
    {image: require('../assets/mainscreen3.png'), text: 'Asia Coat INK, 2023'},
    {image: require('../assets/mainscreen3.png'), text: 'Asia Coat INK, 2023'},
    {image: require('../assets/mainscreen3.png'), text: 'Asia Coat INK, 2023'},
  ];

  const windowWidth = useWindowDimensions().width;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select Exhibition</Text>
        <Text style={styles.subtitle}>
          To change the current exhibition, select another from the top-right
          menu.
        </Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}>
        {/* Spacer View */}
        <View style={{width: (windowWidth - 400) / 2}} />

        {/* Exhibitions */}
        {exhibitions.map((item, index) => (
          <View key={index} style={styles.slide}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.overlay}>
                <Text style={styles.overlayText}>{item.text}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 80,
    color: '#000000',
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    maxHeight: 170,
    marginRight: 40,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'lightgrey',
    padding: 20, // Add spacing here
  },
  image: {
    width: '100%',
    height: '90%',
    resizeMode: 'contain',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    padding: 10,
  },
  overlayText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
  },
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
});

export default ExhibitionScreen;
