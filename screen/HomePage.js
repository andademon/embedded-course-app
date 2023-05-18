import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Button, Text, Alert } from 'react-native';
import MyVideo from '../components/MyVideo';
import Weather from '../components/weather';


const Separator = () => {
    return <View style={{height: 2,width: 1000, backgroundColor: 'black'}} />;
}

export default function HomePage({route,navigation}) {
    const {videoURI,serverURL} = route.params;
    const [isLoading,setIsLoading] = useState(true)


    //延迟一秒加载
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    },[]);

    // function fun(){
    //     let uri1 = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";
    //     let uri2 = videoURI;
    //     console.log(uri1);
    //     console.log(uri2);
    //     console.log(uri1 === uri2);
    // }

    async function turnLeft(){
        try {
            let response = await fetch(serverURL + "/left",{
                method:"POST",
            });
            let data = await response.json().then((data) => {
                console.log(data);
            });
        } catch (error) {
            Alert.alert("ERROR",error.toString(),[{text:"OK",style: "default"}]);
        }
    }

    async function turnRight(){
        try {
            let response = await fetch(serverURL + "/right",{
                method:"POST",
            });
            let data = await response.json().then((data) => {
                console.log(data);
            });
        } catch (error) {
            Alert.alert("ERROR",error.toString(),[{text:"OK",style: "default"}]);
        }
    }

    return (
        <View style = {styles.container}>
            <Text style = {{marginStart:10,fontSize:16}}>VideoURI: {videoURI}</Text>
            <Text style = {{marginStart:10,fontSize:16}}>ServerURL: {serverURL}</Text>
            <Separator />
            <View style = {{height:300,marginTop:20}}>
            {isLoading?(<Text>Loading</Text>):
                <MyVideo videoURI = {videoURI} />
            }
            </View>
            {/* <Separator /> */}
            <View style = {{height:60,flexDirection: 'row',marginTop:10,marginBottom:10,alignItems:'center',justifyContent:'center'}}>
                <View style = {{flex:1,marginStart:20,marginEnd:15}}><Button title='left' onPress={turnLeft}></Button></View>
                <View style = {{flex:1,marginStart:15,marginEnd:20}}><Button title='right' onPress={turnRight}></Button></View>
            </View>
            <Separator />
            <Weather serverURL={serverURL} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
});