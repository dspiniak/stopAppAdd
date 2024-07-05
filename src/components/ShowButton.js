// Component to show "go to next app" button
import React, { useCallback, useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const ShowButton = () => {
    const [showButton, setShowButton] = useState(false);
    const [nextAppUrl, setNextAppUrl] = useState('');

    const getNextAppUrl = async () => {
        try{
            const nextAppfromAsync = await AsyncStorage.getItem('nextApp');
            setNextAppUrl(nextAppfromAsync);
            console.log('got nextApp from AsyncStorage:', nextAppfromAsync);
        } catch (e) {
            console.error(e);
        }
    };

    useFocusEffect(
        useCallback(() => {
            console.log('running FocusEffect');
            getNextAppUrl();
        }, [])
    );

    // Timer to show 'got to next app' button after 10 seconds
    useFocusEffect(
        useCallback(() => {
            setShowButton(false);
            const timer = setTimeout(() => {
                setShowButton(true);
            }, 10000);
        
            return () => clearTimeout(timer);
        }, [])
    );

    return (
        <View style={styles.absoluteContainer}>
            {showButton && (
                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL(`${nextAppUrl}://app`);
                    }}
                >
                    <Text style={styles.text}> quiero ir a la app ►
                    </Text>
                </TouchableOpacity> 
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    absoluteContainer: {
        position: 'absolute',
        alignItems: 'center',
        width: '100%', // Ensure the button is centered horizontally
        bottom: 100
      },
      text: {
        color: '#FFFFFF',
        fontSize: 40,
        fontWeight: 'bold',
    }
});

export default ShowButton;
