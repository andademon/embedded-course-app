import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Button, Text, Alert, TouchableOpacity, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from 'react-native-fontawesome';

export default function NewHomePage(){
    return (
        <View style = {styles.container}>
            <View style = {{height:50,width:500,marginLeft:100,marginTop:30}}><Text style = {{textAlign:'left',marginLeft:80,fontSize:20}}>icon</Text></View>
            {/*分割界线*/}
            <View style = {styles.mainTouchableArea}>
                <TouchableOpacity>   
                    <Text style = {{textAlign:'left',marginLeft:60,fontSize:20,marginTop:10}}>Profiles</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.mainTouchableArea}>
                <TouchableOpacity style = {{flex:1}}>
                        <Text style = {{textAlign:'left',marginLeft:60,fontSize:20}}>Live</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.mainTouchableArea}>
                <TouchableHighlight style = {{flex:1}} onPress={() => {}} activeOpacity={0.6} underlayColor="#DDDDDD">
                    <Text style = {{textAlign:'left',marginLeft:60,fontSize:20}}>Weather</Text>
                </TouchableHighlight>
            </View>

            {/* <FontAwesomeIcon icon="mug-saucer" /> */}

            {/*分割界线*/}
            <View style = {styles.otherTouchableArea}>
                <TouchableHighlight style = {{flex:1,justifyContent:'center'}} onPress={() => {}} activeOpacity={0.6} underlayColor="#DDDDDD" >
                    <Text style = {styles.mainText}>Logs</Text>
                </TouchableHighlight>
            </View>
            <View style = {styles.otherTouchableArea}>
                <TouchableHighlight style = {{flex:1,justifyContent:'center'}} onPress={() => {}} activeOpacity={0.6} underlayColor="#DDDDDD" >
                    <Text style = {styles.mainText}>Settings</Text>
                </TouchableHighlight>
            </View>
            <View style = {styles.otherTouchableArea}>
                <TouchableHighlight style = {{flex:1,justifyContent:'center'}} onPress={() => {}} activeOpacity={0.6} underlayColor="#DDDDDD" >
                    <Text style = {styles.mainText}>Support</Text>
                </TouchableHighlight>
            </View>
            <View style = {styles.otherTouchableArea}>
                <TouchableHighlight style = {{flex:1,justifyContent:'center'}} onPress={() => {}} activeOpacity={0.6} underlayColor="#DDDDDD" >
                    <Text style = {styles.mainText}>About</Text>
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
        height:40,
        width:350,
        marginBottom:10,
    },
    mainText:{
        textAlign:'left',
        fontSize:20,
        marginLeft:60
    }
});