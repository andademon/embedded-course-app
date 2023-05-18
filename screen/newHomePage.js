import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Button, Text, Alert } from 'react-native';

export default function newHomePage(){
    return (
        <View>
            <View>icon</View>
            {/*分割界线*/}
            <View>Profile</View>
            <View>Live</View>
            <View>Weather</View>
            {/*分割界线*/}
            <View>Logs</View>
            <View>Settings</View>
            <View>Help</View>
            <View>About</View>
        </View>
    );
}