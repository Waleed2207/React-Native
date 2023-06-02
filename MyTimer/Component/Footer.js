import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    View,
    TextInput,
    Pressable,
    Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Footer(props) {
    return (
        <>
        <View style={[styles.footerContainer]}>
            <Pressable style={styles.button}> 
            <LinearGradient  colors={['#dd4f36', '#c13a23', '#c42248', '#81132d']}
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            style={styles.gradient}>
                <Image style={styles.arrow} source={require('../images/login-button-arrow.png')}></Image>
            </LinearGradient> 
            </Pressable>
            <View style={styles.footerTextContainer}>
                <Text style={styles.footerText}>צריך עזרה?</Text>
                <Text style={styles.footerText2}>יצירת קשר עם התמיכה</Text>
            </View>
        </View>
        </>
    );
}
const windowsHight = Dimensions.get('window').height;
const styles = StyleSheet.create({
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
export default Footer;