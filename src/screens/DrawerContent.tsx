import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

export default function DrawerContent(props: any) {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>Beka</Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Tabs')}>
                <Text style={styles.menuItem}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.menuItem}>Your Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.menuItem}>Favourites</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.menuItem}>Your Orders</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Text style={styles.menuItem}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D2A44',
    },
    header: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
    },
    name: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    menuItem: {
        padding: 15,
        fontSize: 16,
        color: 'white',
    },
    footer: {
        marginTop: 'auto',
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#444',
    },
});
