import React from 'react';
import { create } from 'react-test-renderer';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

const Header = () => {

  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/icons/logoMyCar.png')}
          style={[styles.logo]}
        />
      </View>
    </View>
  );
};
const windowsHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: windowsHeight * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 10,
    marginTop: 30,
  },
  logo: {
    width: 250,
    height: 70,
    marginRight: 10,
  },
});

export default Header;
