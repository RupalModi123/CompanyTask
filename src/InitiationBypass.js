import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Group from '../assets/images/Group.png';

const InitiationBypass = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
          
                <View style={styles.container}>
                    <Image source={Group} style={{ marginBottom: 20, height: 200, width: 200 }} />
                    <View style={{ paddingHorizontal: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text}>Create your own study plan</Text>
                        <Text style={styles.description}>Study according to the study plan, make study more motivated</Text>
                    </View>
                </View>
          
                <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={{ marginVertical: 10, borderRadius: 12,alignItems:'center',justifyContent:'center', borderColor: 'white',   borderWidth: 1, backgroundColor: 'blue',width:140 ,height:50}}>
            <Text style={{color:'white'}}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={{ marginVertical: 10,alignItems:'center', borderRadius: 12,justifyContent:'center', borderColor: 'white', borderWidth: 1, backgroundColor: 'white',width:140 ,height:50 }}>
            <Text style={{color:'blue'}}>Log in</Text>
          </TouchableOpacity>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 15,
        textAlign: 'center',
        color: 'grey',
    },
});

export default InitiationBypass;
