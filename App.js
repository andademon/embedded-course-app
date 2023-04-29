import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import VideoPlayer from './components/videoplayer';

export default function App() {
  return (
    <View style={styles.container}>
    <Header />
      <View style = {styles.content}>
        <VideoPlayer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech',
  },
  content: {
    padding: 20,
    flex: 1
  },
});
