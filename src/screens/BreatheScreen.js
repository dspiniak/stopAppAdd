import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import CircleAnimation from '../components/CircleAnimation';
import ShowButton from '../components/ShowButton';
import watchUrl from '../hooks/watchUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BreatheScreen = ({ navigation }) => {
    const [nextApp, setNextApp] = useState('');
    const lastAppUrl = watchUrl();
    const text = 'hola';

    useEffect(() => {
        const getNextApp = async () => {
          const nextAppValue = await AsyncStorage.getItem('nextApp');
          console.log('Breathe - async', nextAppValue)
          if (nextAppValue !== null) {
            setNextApp(nextAppValue);
          }
        };
        getNextApp();
    }, [nextApp]);

    console.log('last app is: ', nextApp);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.configureButton}
                onPress={() => navigation.navigate('Configure')}
            >
                <Text style={styles.configureText}>configurar app</Text>
            </TouchableOpacity>
            <CircleAnimation />
            <ShowButton 
                lastAppUrl = {nextApp}
                text = {text}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    configureButton: {
        marginTop: 50,
        color: '#FFFFFF',
        alignSelf: 'baseline',
        marginLeft: 50
    },
    ShowButtonContainer: {
        flex: 1,
        borderColor: 'red'
    },
    configureText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontStyle: 'italic'
    }
});

export default BreatheScreen;