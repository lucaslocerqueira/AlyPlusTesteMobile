import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../pages/home";
import Extract from "../pages/extract";
import Profile from "../pages/profile";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {

    return (
        <Tab.Navigator initialRouteName="home">
            <Tab.Screen name="home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="extract" component={Extract} options={{ headerShown: false }} />
            <Tab.Screen name="profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}