import React, { useState } from 'react';
import { StyleSheet, Text, View ,Button, Alert, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTextInput from '../components/myTextInput';
import { Keyboard } from 'react-native';

const Header = () => {
    return (
        <View style = {{paddingTop: 30,paddingBottom:30}}><Text style = {{fontSize: 30,paddingStart: 15}}></Text></View>
    );
}

export default function SetUp({navigation}){
    const [videoURI, setVideoURI] = useState("");
    const [serverURL, setServerURL] = useState("");

    return (
        <View style = {styles.container}>
            <Header />
            <Text style = {{paddingStart: 20,fontSize:16}}>Video Streaming Address</Text>
            <MyTextInput defaultValue = "" placeholder = "Video Streaming Address" updateParent={(text) => setVideoURI(text)} />
            <Text style = {{paddingStart: 20,fontSize:16}}>Server Address</Text>
            <MyTextInput defaultValue = "" placeholder = "Server Address" updateParent={(text) => setServerURL(text)} />
            <View style = {{height:60,alignItems:'center',marginTop: 40}}>
                <TouchableOpacity
                    onPress={() => {
                            Keyboard.dismiss();
                            navigation.navigate('HomePage',{videoURI:videoURI,serverURL:serverURL})//前面videoURI是属性名，后面videoURI是参数(从useState里取)
                        }
                    }
                    
                >
                    <View style = {{height:60,width: 100,backgroundColor:'#fff',borderRadius:50,borderColor: "green",borderWidth: 1}}>
                        <Text style = {{textAlign:'center',paddingTop: 8,fontSize: 30,color: "green"}}>Go</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
});