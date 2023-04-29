import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Video } from 'expo-av';

export default function VideoPlayer() {
  const [playbackObject, setPlaybackObject] = useState(null);
  const videoUri = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  async function loadVideo() {
    const playbackObject = await Video.createAsync({ uri: videoUri });
    setPlaybackObject(playbackObject);
  }

  async function playVideo() {
    await playbackObject.playAsync();
  }

  async function pauseVideo() {
    await playbackObject.pauseAsync();
  }

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUri }}
        style={styles.video}
        useNativeControls={true}
        onLoad={loadVideo}
      />
      <View style={styles.controls}>
        <Button title="Play" onPress={playVideo} />
        <Button title="Pause" onPress={pauseVideo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 136,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});