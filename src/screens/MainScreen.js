import React from 'react';

import RecipeListScreen from './RecipeListScreen';
import SavedRecipeScreen from './SavedRecipeScreen';
import ScanRecipeScreen from './ScanRecipeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="List" component={RecipeListScreen} options={{
                title: 'Recipes',
                tabBarLabel: 'Recipes',
                tabBarActiveTintColor: '#fff',
                tabBarActiveBackgroundColor: '#dab9d5',
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons name={focused ? "book-sharp" : "book-outline"}  size={size} color={color} />
                ),
            }} />

            <Tab.Screen name="Scan" component={ScanRecipeScreen} options={{
                title: 'Scan',
                tabBarLabel: 'Scan',
                tabBarActiveTintColor: '#fff',
                tabBarActiveBackgroundColor: '#dab9d5',
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons name={focused ? "scan-circle-sharp" : "scan-circle-outline"}  size={size} color={color} />
                ),
            }}/>

            <Tab.Screen name="Saved" component={SavedRecipeScreen} options={{
                title: 'Saved',
                tabBarLabel: 'Saved',
                tabBarActiveTintColor: '#fff',
                tabBarActiveBackgroundColor: '#dab9d5',
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons name={focused ? "basket-sharp" : "basket-outline"}  size={size} color={color} />
                ),
            }}/>
        </Tab.Navigator>
    );
};

export default MainScreen;