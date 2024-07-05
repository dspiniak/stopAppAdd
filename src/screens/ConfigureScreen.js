import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NextAppButton from '../components/NextAppButton';

const ConfigureScreen = ({ navigation }) => {

    const nextApp = async (app) => {
        const value = app;
        await AsyncStorage.setItem('nextApp', value);
        console.log('nextApp set in AsyncStorage to: ', app);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>configurar app</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Breathe')} >
                <Text style={styles.text}>Back</Text>
            </TouchableOpacity>
            <NextAppButton 
                onPress={() => {
                    nextApp('instagram');
                }}
                label="instagram"
             />
            <NextAppButton 
                onPress={() => nextApp('twitter')}
                label="x / twitter"
             />
            <NextAppButton 
                onPress={() => nextApp('snssdk1128')}
                label="tiktok"
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
    text: {
        color: '#FFFFFF',
        fontSize: 40
    }
});

export default ConfigureScreen;