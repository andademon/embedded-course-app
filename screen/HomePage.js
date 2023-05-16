import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import MyVideo from '../components/MyVideo';


const Separator = () => {
    return <View style={{height: 2,width: 1000, backgroundColor: 'black'}} />;
}

export default function HomePage({route,navigation}) {
    const {VideoURI,ServerURL} = route.params;
    const [isLoading,setIsLoading] = useState(true)
    // const video = React.useRef(null);
    // const [status, setStatus] = useState({});

    // const URI = JSON.stringify(VideoURI).trim();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            fun();
        }, 1000);
    },[]);

    function fun(){
        let uri1 = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";
        let uri2 = VideoURI;
        console.log(uri1);
        console.log(uri2);
        console.log(uri1 === uri2);
    }

    return (
        <View style = {styles.container}>
            <Text>VideoURI{JSON.stringify(VideoURI)}</Text>
            <Text>ServerURL{JSON.stringify(ServerURL)}</Text>
            <View style = {{height:300,marginTop:20}}>
            {isLoading?(<Text>Loading</Text>):
                <MyVideo videoURI = {VideoURI} />
            }
            </View>
            {/* <View style = {{height:300,marginTop:20}}>
            <Video
                ref={video}
                style={{flex:1}}
                source={{
                    uri: JSON.stringify(VideoURI),
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            </View>
            <View style={styles.buttons}>
                <Button
                title={status.isPlaying ? 'Pause' : 'Play'}
                onPress={() =>
                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                }
                />
            </View> */}
            <Separator />
            <View style = {{height:60,flexDirection: 'row',margin:20,alignItems:'center',justifyContent:'space-between',}}>
                <Button title='left' style = {{width:150}}></Button>
                <Button title='right'style = {{width:150}}></Button>
            </View>
            <Separator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
});