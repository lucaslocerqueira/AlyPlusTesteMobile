import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../pages/home";
import Extract from "../pages/extract";
import Profile from "../pages/profile";
import { NavigationContainer } from "@react-navigation/native";
import { themas } from "../global/themes";
import { MaterialIcons, Octicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function BottomNavigation() {

    return (
        <Tab.Navigator initialRouteName="Início">
            <Tab.Screen
                name="Início"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: () => {
                        return <MaterialIcons name="home" color={themas.colors.primary} size={26} />;
                    }
                }}
            />
            <Tab.Screen
                name="Extrato"
                component={Extract}
                options={{
                    headerShown: false,
                    tabBarIcon: () => {
                        return <MaterialIcons name="article" color={themas.colors.primary} size={26} />;
                    }
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: () => {
                        return <MaterialIcons name="person" color={themas.colors.primary} size={26} />;
                    }
                }}
            />
        </Tab.Navigator>
    );
}