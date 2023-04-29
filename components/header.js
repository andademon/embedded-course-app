import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default function header(){
  return (
    <View style = {styles.header}>
      <Text style = {styles.title}>My App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    paddingLeft: 50,
    backgroundColor: '#33CF16',
  },
  title: {
    textAlign: 'start',
    color: '#fff',
    fontSize: 30,
  },
});