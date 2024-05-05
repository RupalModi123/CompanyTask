import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Group from '../assets/images/Group.png';

const IntroductonSkip = ({ navigation }) => {

    const handleSkipPress = () => {
      navigation.navigate('InitiationBypass')
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{top:100,alignItems:'flex-end',marginEnd:30}}>
                <TouchableOpacity onPress={() => handleSkipPress()} >
                    
                    <Text style={{ color: '#000000', fontWeight:'700'}}>Skip</Text>
                 
                </TouchableOpacity>
            </View>
                <View style={styles.container}>
                    <Image source={Group} style={{ marginBottom: 20, height: 200, width: 200 }} />
                    <View style={{ paddingHorizontal: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text}>Quick and easy learning</Text>
                        <Text style={styles.description}>Easy and fast learning at any time to help you improve various skills</Text>
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
        fontSize: 14,
        fontWeight:'500',
        textAlign: 'center',
        color: 'grey',
    },
  
});

export default IntroductonSkip;
