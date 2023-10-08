import React, { useState } from 'react';
import { StyleSheet, Text, View ,Button, Alert} from 'react-native';

export default function App() {
  const [text,setText] = useState("暂无数据");
    const url = "http://nailv.mynatapp.cc";
  
    async function fun(){
      // Alert.alert("title","Msg",[{text: "cancel",style: "cancel"},{text: "OK",style: "default"}]);

      try {
        let response = await fetch(url + "/test",{
          method: 'GET',
        });
        let data = await response.json().then((data) => {
          console.log(data);
          setText(data.Msg);
        });
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  
    return (
      <View style={styles.container}>
        <Button title="hello" onPress={fun}/>
        <View style={styles.seperateLine}></View>
        <Text>{text}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      padding: 20,
      flex: 1
    },
    seperateLine: {
      backgroundColor: 'black',
      width: 800,
      height: 2,
      marginTop: 20,
      marginBottom: 20
    },
  });