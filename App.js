import React, { useState } from 'react';
import { StyleSheet, Text, View ,Button, Alert, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SetUp from "./screen/SetUp"
import HomePage from "./screen/HomePage"

const Stack = createNativeStackNavigator();

export default function App(){
    return (
        //导航堆栈
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SetUp">
                <Stack.Screen name = "SetUp" component = {SetUp} />
                <Stack.Screen name = "HomePage" component = {HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
