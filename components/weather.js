import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default function Weather(){
    return (
        <View>
            <View style = {{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
                <View style = {{marginStart:20}}>
                    <Text style = {{fontSize:20}}>WEATHER: </Text>
                </View>
                <View style = {{marginEnd:20,width:150,padding:5}}>
                    <Button title="GET WEATHER" color="green"/>
                </View>
            </View>
            <Text style = {{marginStart:15,fontSize:16}}>no data available</Text>
        </View>
    );
}