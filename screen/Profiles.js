import React, { useState } from 'react';
import { StyleSheet, Text, View , Alert} from 'react-native';
import MyFlatList from '../components/MyFlatList';

export default function Profiles(){
    return (
        <View style = {styles.container}>
            <Text style = {styles.mainText}>Profiles</Text>
            <View>
                <MyFlatList />
            </View>
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