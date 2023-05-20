import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View , Alert, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyVideo from '../components/MyVideo';


const getData = async (key) => {
    try {
      let data = await AsyncStorage.getItem(key);
      return data;
    } catch(error) {
      // error reading value
      return "null";
    }
}

export default function Live(){
    const [videoURL,setVideoURL] = useState("");

    useEffect(() => {
        async function getVideoURL(){
            let videoURI = await getData("VideoURL");
            setVideoURL(videoURI);
        }
        getVideoURL();
        setTimeout(() => {
            console.log(videoURL);
        },1000)
    },[])

    return (
        <View style = {styles.container}>
            <View style = {{flex:1,marginTop:10}}>
                <MyVideo videoURI={videoURL} />
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