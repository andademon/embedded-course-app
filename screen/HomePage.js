import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import MyVideo from '../components/MyVideo';
import Weather from '../components/weather';


const Separator = () => {
    return <View style={{height: 2,width: 1000, backgroundColor: 'black'}} />;
}

export default function HomePage({route,navigation}) {
    const {VideoURI,ServerURL} = route.params;
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    },[]);

    // function fun(){
    //     let uri1 = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";
    //     let uri2 = VideoURI;
    //     console.log(uri1);
    //     console.log(uri2);
    //     console.log(uri1 === uri2);
    // }

    return (
        <View style = {styles.container}>
            <Text style = {{marginStart:10,fontSize:16}}>VideoURI: {VideoURI}</Text>
            <Text style = {{marginStart:10,fontSize:16}}>ServerURL: {ServerURL}</Text>
            <Separator />
            <View style = {{height:300,marginTop:20}}>
            {isLoading?(<Text>Loading</Text>):
                <MyVideo videoURI = {VideoURI} />
            }
            </View>
            {/* <Separator /> */}
            <View style = {{height:60,flexDirection: 'row',marginTop:10,marginBottom:10,alignItems:'center',justifyContent:'center'}}>
                <View style = {{flex:1,marginStart:20,marginEnd:15}}><Button title='left'></Button></View>
                <View style = {{flex:1,marginStart:15,marginEnd:20}}><Button title='right'></Button></View>
            </View>
            <Separator />
            <Weather />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
});