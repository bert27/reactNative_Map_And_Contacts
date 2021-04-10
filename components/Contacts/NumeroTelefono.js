import React,{useState,useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styless4 from "./../../App.sass";
  
  
  //import DeviceInfo from "react-native-device-info";

export const NumeroTelefono = () => {
    const [location, setLocation] =useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
      /*  console.log("ID");
        console.log(DeviceInfo.getUniqueId());
        console.log(DeviceInfo.getSystemVersion());
        console.log(DeviceInfo.getVersion());*/
          
    }, []);
   /*    <Text style={styles.Titulo}>ID: {DeviceInfo.getUniqueId()}</Text>*/
    return (   
<Text style={styles.Titulo}>622444555</Text>
   
    );
};


const styles = StyleSheet.create({
    Icono: {
      width: "auto",
      fontSize: 35,
      color: "white",
      marginRight: 10,
    },
    Titulo: {
      width: "auto",
      textShadowColor: "rgba(0, 0, 0, 0.75)",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
      color: "white",
      height: "auto",
      fontSize: 20,
    },
  });
  