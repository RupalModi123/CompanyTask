import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Message = () => {
  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText}>
       Message Screen
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#000000',
  },
});

export default Message;