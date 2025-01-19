import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
            <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
});
