/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Header from './src/screens/MyCar/Header';
import MainContainer from './src/screens/MyCar/MainContainer';
import Footer from './src/screens/MyCar/Footer';

import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  Pressable,
  View,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  Colors,
  DebugInstructions,
 // Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#F6FAF6',
    flex: 1,
    padding: 10,
    borderColor: 'black',
  };
  return (
    <SafeAreaView style={backgroundStyle}>
        <Header/>
        <View style={styles.rootContainer}>
            <View style={styles.maincontainer}>
                    <MainContainer/>
                    <Footer/>
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
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  MyTimerTxt: {
    flex: 1,
    padding: 10,
    color: 'black',
    fontSize: 15,
  },

  MyTimerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default App;
