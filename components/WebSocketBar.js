import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View , Alert, Button} from 'react-native';
import io from 'socket.io-client';

const WebSocketBar = ({serverURL}) => {
    const [color, setColor] = useState('#fafafa');
    const [isConnected,setIsConnected] = useState(false);
    const [socket, setSocket] = useState(null);
    
    useEffect(() => {
        const socket = io(serverURL);
        socket.on('connect',() => {
            console.log("Connected to server");
            setIsConnected(true)
        });

        socket.on('warning_message',(msg) => {
            console.log("received my response: ", msg);
            setColor(msg === '1' ? 'red' : '#fafafa');
        })

        // socket.on('disconnect',() => {
        //     setIsConnected(false);
        //     setTimeout(() => {
        //         socket.connect();
        //     },5000);
        // })
        
        return () => {
            socket.disconnect();
            console.log("disconnected")
        }
        
    },[]);

    // useEffect(() => {
    //     const newSocket = io(serverURL);
    //     setSocket(newSocket);
    //     return () => {
    //         newSocket.disconnect();
    //     }
    // }, []);

    // useEffect(() => {
    //     if (!socket) return;
    //     socket.on('warning_message',(msg) => {
    //         console.log("received my response: ", msg);
    //         setColor(msg === '1' ? 'red' : '#fafafa');
    //     })
    //     socket.on('disconnect', () => {
    //       setTimeout(() => {
    //         socket.connect();
    //       }, 5000);
    //     });
    // }, [socket]);
  
    return (
      <View style={{ height: 20, width:360, backgroundColor: color, borderRadius:16 }} />
    );
};

export default WebSocketBar;