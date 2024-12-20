import * as React from 'react';
import Login from '../pages/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../pages/register';
import Home from '../pages/home';
import BottomNavigation from './bottom-navigation';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <>
            <Stack.Navigator initialRouteName='login'>
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="home" component={BottomNavigation} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );

}
