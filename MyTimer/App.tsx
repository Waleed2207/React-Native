/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#F6FAF6',
    flex: 1,
    borderWidth: 2,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.headerContainer}>
        <View style={styles.LogoContainer}>
          <Image source={require('./images/logo.png')} style={styles.Logo} />
        </View>
        <View style={styles.MyTimerContainer}>
          <Text style={styles.MyTimerText}>My Timer</Text>
        </View>
        <View style={{flex: 1}} />
      </View>
      <View style={styles.rootContainer}>
        <View style={styles.maincontainer}>
          <Text style={styles.labelTXT}>
            להתחברות לאפלקציית טיימר אנא הזינו את מספר הטלפון והמייל שלכם
          </Text>
          <TextInput
            style={styles.input}
            placeholder="הקלד אמייל"
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.input}
            placeholder="הקלד מספר"
            placeholderTextColor="#000"
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={[styles.footerContainer]}>
        <Image
          source={require('./images/login-button-arrow.png')}
          style={styles.footerImage}
        />
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>צריך עזרה?</Text>
          <Text style={styles.footerText2}>יצירת קשר עם התמיכה</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const windowsHight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#F6FAF6',
    justifyContent: 'center',
  },
  headerContainer: {
    width: '100%',
    height: windowsHight * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  logo: {
    width: 50,
    height: 50,
  },
  MyTimerTxt: {
    flex: 1,
    padding: 10,
    color: 'black',
    fontSize: 15,
  },
  LogoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  Logo: {
    width: 50,
    height: 50,
  },
  MyTimerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MyTimerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    width: '100%',
    paddingHorizontal: 30,
  },
  labelTXT: {
    width: 100,
    height: 50,
    minWidth: 250,
    fontFamily: 'Cochin',
    fontSize: 15,
    color: 'black',
  },
  input: {
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    minWidth: 250,
  },
  footerContainer: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6FAF6',
    marginBottom: 60,
  },
  footerImage: {
    width: 60,
    height: 60,
    backgroundColor: '#6b00b3',
    marginHorizontal: 20,
    borderRadius: 60 / 2,
  },
  footerTextContainer: {
    flex: 1,
  },
  footerText: {
    fontSize: 16,
    marginRight: 30,
    fontWeight: 'bold',
  },
  footerText2: {
    fontSize: 16,
    marginRight: 30,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default App;
