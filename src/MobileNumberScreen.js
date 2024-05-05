import React, { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View, StyleSheet, Button } from 'react-native';
import Mobile from '../assets/images/Mobile.png';
import VerifyMobileNumber from '../src/VerifyMobileNumber';

const MobileNumberScreen = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleOnpress = () => {
        if (!phoneNumber) {
            console.log(phoneNumber, 'phoneNumber')
            Alert.alert('Enter Phone number')
        }
        else if (phoneNumber.length != 10){
            Alert.alert('Enter 10 number mobile digit')
        }
        else {
            navigation.navigate('VerifyMobileNumber')
        }
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#E1EBEE',
        }}>
            <View style={{
                paddingHorizontal: 15,
                paddingTop: 30,
                marginBottom: 30,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ fontSize: 20, color: '#000000', fontWeight: 'bold' }}>Continue with Phone</Text>
                <Image source={Mobile} style={{ width: 100, height: 100, marginRight: 25, marginTop: 30 }} />
            </View>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 12,
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={styles.title}>Enter Your Phone Number</Text>
                    <View style={{ flexDirection: 'row', borderRadius: 10 }}>
                        <TextInput
                            style={styles.input}
                            placeholder="+63 283 835 29999"
                            keyboardType="phone-pad"
                            value={phoneNumber}
                            maxLength={10}
                            onChangeText={setPhoneNumber}
                            placeholderTextColor={'#000000'}
                        />
                        <View style={{}}>
                            <TouchableOpacity
                                onPress={() => {  handleOnpress() }}
                                style={{ borderRadius: 10, backgroundColor: 'blue', height: 40, width: 100 }}>
                                <Text style={{ color: 'white', fontSize: 12, textAlign: 'center', top: 10 }}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
    title: {
        fontSize: 12,
        marginBottom: 20,
        color: 'grey'
    },
    input: {
        width: '60%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        color: '#000000',
        paddingHorizontal: 10,
        fontWeight: 'bold'
    },
});
export default MobileNumberScreen;
