import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Alert ,Image} from 'react-native';
import cross from  '../assets/images/cross.png';

const VerifyMobileNumber = ({ route, navigation }) => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const [modalVisible, setModalVisible] = useState(false);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const Onclose = () => {
    setModalVisible(false)
    navigation.navigate('LoginScreen')
  }
  const handleInputChange = (text, index) => {
    if (text.length === 1 && index < 3) {
      const newOTP = [...otp];
      newOTP[index] = text;
      setOTP(newOTP);
      inputRefs[index + 1].current.focus();
    } else if (text.length === 1 && index === 3) {
      const newOTP = [...otp];
      newOTP[index] = text;
      setOTP(newOTP);
    } else if (text.length === 0 && index > 0) {
      const newOTP = [...otp];
      newOTP[index] = '';
      setOTP(newOTP);
      inputRefs[index - 1].current.focus();
    } else if (text.length === 0 && index === 0) {
      setOTP(['', '', '', '']);
    }
  };

  const handleVerifyOTP = () => {
    const isOTPComplete = otp.every(value => value !== '');
    if (isOTPComplete) {
      setModalVisible(true);
    } else {
      Alert.alert('Please fill all OTP digits.');
    }
  };

  const Back = () => {
    navigation.navigate('MobileNumberScreen')
  };

  return (
    <View >
      <View style={{ marginVertical: 50,flexDirection:'row',marginHorizontal:20 }}>

      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={{ }}>
           <Image source={cross} style={{ width: 20, height: 20, alignSelf: 'center', }} />
            </TouchableOpacity>

        <Text style={{ color: '#000000', fontWeight: '700',left:85 }}>Verify Phone</Text>
      </View>

      <View style={{justifyContent:'center',alignItems:'center'}}>

      <Text style={styles.title}>Code is sent to 283 835 29999</Text>
      <View style={styles.otpContainer}>
        {[0, 1, 2, 3].map((index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={styles.box}
            value={otp[index]}
            maxLength={1}
            keyboardType='number-pad'
            onChangeText={(text) => handleInputChange(text, index)}
          />
        ))}
      </View>
      <TouchableOpacity
        onPress={handleVerifyOTP}
        style={styles.verifyButton}>
        <Text style={styles.buttonText}>Verify and Create Account</Text>
      </TouchableOpacity>

      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Account Created Successfully!</Text>
          <TouchableOpacity
            onPress={() => Onclose()}
            style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    color: 'grey',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
  },
  box: {
    width: 40,
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 20,
    color: '#000000'
  },
  verifyButton: {
    borderRadius: 10,
    backgroundColor: 'blue',
    height: 40,
    width: 180,
    marginVertical: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color:'#000000'
  },
  closeButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default VerifyMobileNumber;
