import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    View,
    TextInput,
    Keyboard,
    Text,
} from 'react-native';
function MainContainer(props) {
    return (
        <>
        <Text style={styles.labelTXT}>
                להתחברות לאפלקציית אמדוקס אנא הזינו את מספר הטלפון והמייל שלכם
            </Text>
            <View style={styles.IconWithInput}>
                <TextInput
                    style={styles.input}
                    placeholder="מספר טלפון"
                    placeholderTextColor="#000"
                    keyboardType="numeric"
                    onSubmitEditing={Keyboard.dismiss}
                />
                <Image source={require('../images/callSquare.png')} style={styles.call}/>
            </View>
            <View style={styles.IconWithInput}>
                <TextInput
                style={styles.input}
                placeholder="כתובת מייל"
                placeholderTextColor="#000"
                onSubmitEditing={Keyboard.dismiss}
                
                />
                <Image source={require('../images/messageSquare.png')} style={styles.call}/>
            </View> 
        </>
    );
}
const windowsHight = Dimensions.get('window').height;
const styles = StyleSheet.create({
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
      call: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
      },
});

export default MainContainer;