import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import DrawerContent from '../screens/DrawerContent';
import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={({ navigation }) => ({
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <View style={{ paddingLeft: 15 }}>
                            <Ionicons name="menu" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                ),
                drawerStyle: {
                    backgroundColor: '#2D2A44',
                },
            })}
        >
            <Drawer.Screen name="Tabs" component={TabNavigator} options={{ headerTitle: 'Start' }} />
        </Drawer.Navigator>
    );
}
