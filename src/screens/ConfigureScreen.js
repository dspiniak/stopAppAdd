import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NextAppButton from '../components/NextAppButton';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const ConfigureScreen = ({ navigation }) => {

    const nextApp = async (app) => {
        try {
            const value = app;
            await AsyncStorage.setItem('nextApp', value);
            console.log('nextApp set in AsyncStorage to: ', app);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backContainer} onPress={() => navigation.navigate('Breathe')} >
                <Text style={styles.backText}>Volver</Text>
            </TouchableOpacity>
            {/* <View style={styles.block}> */}
                <Text style={styles.title}>configurar app a usar {'\n'}</Text>
                <NextAppButton 
                    onPress={() => {
                        nextApp('instagram');
                    }}
                    label="instagram"
                    logo={<AntDesign name="instagram" size={40} color="white" />}
                />
                <NextAppButton 
                    onPress={() => nextApp('twitter')}
                    label="x (twitter)"
                    logo={<AntDesign name="twitter" size={40} color="white" />}
                />
                <NextAppButton 
                    onPress={() => nextApp('snssdk1128')}
                    label="tiktok"
                    logo={<FontAwesome5 name="tiktok" size={40} color="white" />}
                />
            {/* </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    backContainer: {
        marginTop: 50,
        marginLeft: 10,
        position: 'absolute'
    },
    backText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontStyle: 'italic'
    },
    block: {
        alignItems: 'center'
    },
    title: {
        color: '#FFFFFF',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 300
    }
});

export default ConfigureScreen;