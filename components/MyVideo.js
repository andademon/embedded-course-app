import React, { useState,useEffect,useRef } from 'react';
import { StyleSheet, View, Button,Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function MyVideo({videoURI}){
    const video = useRef(null);
    const [status, setStatus] = useState({});
    // const [isLoading,setIsLoading] = useState(true)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 1000);
    // },[]);

    const handleVideoLoad = () => {
        video.current.playAsync();
    };

    return (
        <View style = {{height:300}}>
            {/* {isLoading ?(<Text>Loading...</Text>) : ( */}
                <Video
                ref={video}
                style={{flex:1}}
                source={{
                    uri: videoURI,
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                onLoad={handleVideoLoad}
            />
            {/* ) */}
            {/* } */}
            <View style={styles.buttons}>
                <Button
                title={status.isPlaying ? 'Pause' : 'Play'}
                onPress={() =>
                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

});