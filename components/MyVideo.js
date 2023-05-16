import React, { useState,useEffect,useRef } from 'react';
import { StyleSheet, View, Button,Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function MyVideo({videoURI}){
    const video = useRef(null);
    const [status, setStatus] = useState({});

    return (
        <View style = {{height:300}}>
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
            />
            <View style = {{justifyContent: 'center',alignItems:'center',height:60}}>
                <View style = {{width: 200}}>
                    <Button
                        title={status.isPlaying ? 'Pause' : 'Play'}
                        onPress={() =>
                            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                        }
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

});