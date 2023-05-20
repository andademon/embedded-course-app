import React, { useState } from 'react';
import { StyleSheet, Text, View , Alert} from 'react-native';

export default function Live(){
    return (
        <View style = {styles.container}>
            <Text style = {styles.mainText}>Live</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#fafafa",
    },
    mainText:{
        textAlign:'center',
        fontSize:20
    }
});