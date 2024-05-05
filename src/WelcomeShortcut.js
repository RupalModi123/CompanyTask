import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import illustration from '../assets/images/illustration.png';

const InitialScreen = ({ navigation }) => {

    const handleSkipPress = () => {
      navigation.navigate('IntroductorySkip')
    };

    return (
        <View style={{ flex: 1 }}>
             <View style={{top:100,alignItems:'flex-end',marginEnd:30}}>
                <TouchableOpacity onPress={() => handleSkipPress()} >
                    <Text style={{ color: '#000000', fontWeight:'700'}}>Skip</Text>
                </TouchableOpacity>
            </View>
                <View style={styles.container}>
                    <Image source={illustration} style={{ marginBottom: 20, height: 200, width: 200 }} />
                    <View style={{ paddingHorizontal: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text}>Numerous free trial courses</Text>
                        <Text style={styles.description}>Free courses for you to find your way to learning</Text>
                    </View>
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

export default InitialScreen;
