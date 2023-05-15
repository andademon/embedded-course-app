import React from 'react';
import { StyleSheet, Text, View ,Button, Alert} from 'react-native';
import Header from './components/header';
import VideoPlayer from './components/videoplayer';

const Separator = () => {
  return <View style={{height: 2,width: 1000, backgroundColor: 'black'}} />;
}

export default function App() {
  const url = "";

  async function fun(){
    // Alert.alert("title","Msg",[{text: "cancel",style: "cancel"},{text: "OK",style: "default"}]);
    try {
      let response = await fetch(url,{
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <Separator />
      <View style = {styles.content}>
        <VideoPlayer />
      </View>
      <Separator />
      <View>
        <Button title="hello" onPress={fun} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  content: {
    padding: 20,
    flex: 1
  },
});
