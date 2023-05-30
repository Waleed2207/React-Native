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
  Pressable,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
    padding: 10,
    borderColor: 'black',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.headerContainer}>
        <View style={styles.LogoContainer}>
          <Image source={require('./images/logoMyCar.png')} style={styles.Logo} />
        </View>
      </View>
      <View style={styles.rootContainer}>
          <View style={styles.maincontainer}>
                <Text style={styles.labelTXT}>
                  להתחברות לאפלקציית אמדוקס אנא הזינו את מספר הטלפון והמייל שלכם
                </Text>
                <View style={styles.IconWithInput}>
                    <TextInput
                      style={styles.input}
                      placeholder="מספר טלפון"
                      placeholderTextColor="#000"
                      keyboardType="numeric"
                    />
                    <Image source={require('./images/callSquare.png')} style={styles.call}/>
                </View>
                <View style={styles.IconWithInput}>
                  <TextInput
                    style={styles.input}
                    placeholder="כתובת מייל"
                    placeholderTextColor="#000"
                    
                  />
                  <Image source={require('./images/messageSquare.png')} style={styles.call}/>
                </View>
                <View style={[styles.footerContainer]}>
                  <Pressable style={styles.button}> 
                    <LinearGradient  colors={['#dd4f36', '#c13a23', '#c42248', '#81132d']}
                                    start={{ x: 0.0, y: 0.0 }}
                                    end={{ x: 1.0, y: 1.0 }}
                                    style={styles.gradient}>
                      <Image style={styles.arrow} source={require('./images/login-button-arrow.png')}></Image>
                    </LinearGradient> 
                  </Pressable>
                    <View style={styles.footerTextContainer}>
                      <Text style={styles.footerText}>צריך עזרה?</Text>
                      <Text style={styles.footerText2}>יצירת קשר עם התמיכה</Text>
                    </View>
                </View>
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
  headerContainer: {
    width: '100%',
    height: windowsHight * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    justifyContent: 'flex-end',

  },
  MyTimerTxt: {
    flex: 1,
    padding: 10,
    color: 'black',
    fontSize: 15,
  },
  LogoContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 10,
    marginTop: 30,
  },
  Logo: {
    width: 250,
    height: 70,
    marginRight: 10,
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
  labelTXT: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    height: 50,
    minWidth: 300,
    fontFamily: 'Cochin',
    fontSize: 17,
    marginRight:10,
    color: 'black',
  },
  input: {
    height: 50,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    minWidth: 300,
    fontSize: 17,
  },
  IconWithInput:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:60,
    margin: 15,
    width: '100%',
    borderRadius: 8,
    paddingRight: 10,
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: '#F6FAF6',
    shadowRadius: 2,
  },
  footerContainer: {
    marginTop: 10,
    width: '100%',
    justifyContent:"space-around",
    flexDirection: 'row',
    backgroundColor: 'white',
  
  },
  footerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  footerText2: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'blue',
  },
  call: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  button: {
    width:80,
    height: 80,
    borderRadius: 30 / 2,
    shadowColor:'#000',
    shadowOffset: {width: 1, height:2},
    shadowOpacity:0.1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  gradient: {
     height:'100%',
      width:'100%',
      borderRadius:100,
      justifyContent:'center',
      alignItems:'center',
  },
  arrow: {
    width: 30,
    height: 30,
    backgroundColor: 'transparent',
    color: '#ffffff',
    
  },
});

export default App;
