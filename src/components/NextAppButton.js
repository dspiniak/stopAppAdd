// Component to show "next app" button for ConfigureScreen
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NextAppButton = ({ onPress, logo, label }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button]}>
      {logo}
      <Text style={[styles.text]}>   {label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#000000', // Default background color
    borderRadius: 5,
    marginVertical: 5, // Default margin between buttons
    flexDirection: 'row',
    marginLeft: 30
  },
  text: {
    color: '#FFFFFF', // Default text color
    fontSize: 40,
    // fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default NextAppButton;
