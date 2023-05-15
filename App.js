import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import VideoPlayer from './components/videoplayer';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
    <Header />
      <View style = {styles.content}>
        <VideoPlayer />
      </View>
      <Button title="test" onPress={() => {}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'strech',
  },
  content: {
    padding: 20,
    flex: 1
  },
});
