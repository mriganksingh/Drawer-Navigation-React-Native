import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import ContactScreen from '../screens/ContactScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Contact') {
                        iconName = focused ? 'call' : 'call-outline';
                    }
                    return <Ionicons name={iconName!} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#FF6F61',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={StackNavigator} />
            <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
    );
}
