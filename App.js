import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import Header from './components/header';
import VideoPlayer from './components/videoplayer';

export default function App() {
  return (
    <View style={styles.container}>
    <Header />
      <View style = {styles.content}>
        <VideoPlayer />
      </View>
      <View>
        <Text>hi</Text>
        <Button title="hello" onPress={() => {}} />
      </View>
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
