import React, { useState } from 'react';
import { StyleSheet, Text, View ,Button, Alert, TextInput} from 'react-native';
import MyTextInput from './components/myTextInput';

const Header = () => {
    return (
        <View style = {{paddingTop: 30,paddingBottom:40}}><Text style = {{fontSize: 30,paddingStart: 15}}>Set up</Text></View>
    );
}

export default function App(){
    const [text1,setText1] = useState("");
    const [text2,setText2] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style = {styles.container}>
            <Header />
            <Text style = {{paddingStart: 20,fontSize:16}}>Video Streaming Address</Text>
            <MyTextInput defaultValue = "" placeholder = "Video Streaming Address" />
            {/* <TextInput 
                style = {[styles.input, isFocused ? styles.focused : null]}
                placeholder = "Video Streaming Address"
                defaultValue = {text1}
                onChangeText = {(newText) => {
                    setText1(newText);
                }}
                onFocus = {() => {
                    setIsFocused(true);
                }}
                onBlur = {() => {
                    setIsFocused(false);
                }}
            /> */}
            <Text style = {{paddingStart: 20,fontSize:16}}>Server Address</Text>
            <MyTextInput defaultValue = "" placeholder = "Server Address" />
            {/* <TextInput 
                style = {[styles.input,isFocused ? styles.focused : null]}
                placeholder = "Server Address"
                defaultValue = {text2}
                onChangeText = {(newText) => {
                    setText2(newText);
                }}
                onFocus = {() => {
                    setIsFocused(true);
                }}
                onBlur = {() => {
                    setIsFocused(false);
                }}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    // input: {
    //     height: 50,
    //     margin: 20,
    //     marginTop: 15,
    //     marginBottom: 35,
    //     padding:10,
    //     fontSize: 20,
    //     borderWidth: 1,
    //     borderRadius: 10,
    //     borderColor: 'black',
    // },
    // focused: {
    //     borderColor: 'green',
    //     borderWidth: 2,
    // },
});