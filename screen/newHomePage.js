import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Button, Text, Alert, TouchableOpacity, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function NewHomePage(){
    return (
        <View style = {styles.container}>
            <View style = {{height:50,marginTop:30}}></View>
            {/*分割界线*/}
            <View style = {styles.mainTouchableArea}>
                <TouchableHighlight style = {{flex:1}} onPress={() => {}} activeOpacity={0.6} underlayColor="#DDDDDD">
                    <View style = {{flex:1,flexDirection:'row',justifyContent:'center'}}>
                        <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}><AntDesign name="profile" size={32} color="black" /></View>
                        <View style = {{flex:4,justifyContent:'center'}}><Text style = {styles.mainText}>Profiles</Text></View>
                    </View>
                </TouchableHighlight>
            </View>

            <View style = {styles.mainTouchableArea}>
                <TouchableHighlight style = {{flex:1}} onPress={() => {}} activeOpacity={0.6} underlayColor="#DDDDDD">
                    <View style = {{flex:1,flexDirection:'row',justifyContent:'center'}}>
                        <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}><MaterialIcons name="live-tv" size={32} color="black" /></View>
                        <View style = {{flex:4,justifyContent:'center'}}><Text style = {styles.mainText}>Live</Text></View>
                    </View>
                </TouchableHighlight>
            </View>

            <View style = {styles.mainTouchableArea}>
                <TouchableHighlight style = {{flex:1}} onPress={() => {}} activeOpacity={0.6} underlayColor="#DDDDDD">
                    <View style = {{flex:1,flexDirection:'row',justifyContent:'center'}}>
                        <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}><MaterialCommunityIcons name="weather-partly-cloudy" size={32} color="black" /></View>
                        <View style = {{flex:4,justifyContent:'center'}}><Text style = {styles.mainText}>Weather</Text></View>
                    </View>
                </TouchableHighlight>
            </View>

            {/*分割界线*/}
            <View style = {styles.otherTouchableArea}>
                <TouchableHighlight style = {{flex:1}} onPress={() => {}} activeOpacity={0.6} underlayColor="#DDDDDD" >
                    <View style = {{flex:1,flexDirection:'row',justifyContent:'center'}}>
                        <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}><FontAwesome5 name="clipboard-list" size={32} color="black" /></View>
                        <View style = {{flex:4,justifyContent:'center'}}><Text style = {styles.mainText}>Logs</Text></View>
                    </View>
                </TouchableHighlight>
            </View>
            <View style = {styles.otherTouchableArea}>
                <TouchableHighlight style = {{flex:1}} onPress={() => {}} activeOpacity={0.6} underlayColor="#DDDDDD" >
                    <View style = {{flex:1,flexDirection:'row',justifyContent:'center'}}>
                        <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}><MaterialIcons name="settings" size={32} color="black" /></View>
                        <View style = {{flex:4,justifyContent:'center'}}><Text style = {styles.mainText}>Settings</Text></View>
                    </View>
                </TouchableHighlight>
            </View>
            <View style = {styles.otherTouchableArea}>
                <TouchableHighlight style = {{flex:1}} onPress={() => {}} activeOpacity={0.6} underlayColor="#DDDDDD" >
                    <View style = {{flex:1,flexDirection:'row',justifyContent:'center'}}>
                        <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}><MaterialIcons name="help-center" size={32} color="black" /></View>
                        <View style = {{flex:4,justifyContent:'center'}}><Text style = {styles.mainText}>Help</Text></View>
                    </View>
                </TouchableHighlight>
            </View>
            <View style = {styles.otherTouchableArea}>
                <TouchableHighlight style = {{flex:1}} onPress={() => {}} activeOpacity={0.6} underlayColor="#DDDDDD" >
                    <View style = {{flex:1,flexDirection:'row',justifyContent:'center'}}>
                        <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}><FontAwesome name="exclamation-circle" size={32} color="black" /></View>
                        <View style = {{flex:4,justifyContent:'center'}}><Text style = {styles.mainText}>About</Text></View>
                    </View>
                </TouchableHighlight>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fafafa",
        alignItems: 'center',
    },
    mainTouchableArea:{
        height:80,
        backgroundColor:"#ffffff",
        width:350,
        borderRadius:10,
        marginBottom:12,
        shadowColor:"#000",
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.6,
        shadowRadius:2,
        elevation:2
    },
    otherTouchableArea:{
        height:60,
        width:350,
        marginBottom:10,
    },
    mainText:{
        textAlign:'left',
        fontSize:20,
    }
});