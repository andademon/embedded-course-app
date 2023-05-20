import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View , Alert, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Separator from "../components/Separator"

export default function MyFlatList(){
    const [data,setData] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function getData(){
            const newCount = await AsyncStorage.getAllKeys();
            if(newCount.length != count){
                const newData = await AsyncStorage.multiGet(newCount);
                setData(newData);
                setCount(newCount.length);
            }
        }
        getData();
    },[count]);

    return (
        <View style = {styles.container}>
            <Separator />
            <FlatList 
                data={data} 
                renderItem={data => (
                    <View style = {{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:10,height:40}}>
                        <View style = {{}}><Text style = {{textAlign:'center',fontSize:20}}>{data.index}</Text></View>
                        <View style = {{}}><Text style = {{textAlign:'center',fontSize:20}}>ServerURL</Text></View>
                        <View style = {{}}><Text style = {{textAlign:'center',fontSize:20}}>{data.item.name}</Text></View>
                    </View>
                )} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#fafafa",
    },
    mainText:{
        textAlign:'center',
        fontSize:20
    }
});