import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from './screens/SignIn';
import { SignUp } from './screens/SignUp';
import { Welcome } from './screens/Welcome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './screens/Home';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={({ route, navigation }) => ({
                    headerShown: false,
                    gestureEnabled: true,
                })}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />

                <Stack.Screen name="MyTabs" component={MyTabs} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}




function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                headerShown: false,
                gestureEnabled: true,
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Saved" component={Home} />
            <Tab.Screen name="Bookings" component={Home} />
            <Tab.Screen name="Promo" component={Home} />
            <Tab.Screen name="Account" component={Home} />
        </Tab.Navigator>
    );
}