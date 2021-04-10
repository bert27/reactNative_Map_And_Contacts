import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import * as Location  from 'expo-location'
import styless4 from "./../../App.sass";
import Mapa from "./Mapa";

export const Posicionamiento2 = (props) => {
    const [location, setLocation] = React.useState(null)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        (async () =>{
            let { status } = await Location.requestPermissionsAsync();
            if(status !== 'granted'){
                setError('Permission to access location was denied');
                return;
            }
            const locate = await Location.getCurrentPositionAsync({});
            setLocation(locate.coords)
            console.log(locate.coords);
        })()
    }, []);

    return (<>
        <View style={styless4.containerF}>
          <Text style={styles.DatosPosicion}>Posicion:</Text>
          <Text style={styles.DatosPosicion}>
            -Altitud:
            {location?.altitude.toFixed(2) + "°"}
          </Text>
          <Text style={styles.DatosPosicion}>
            -Latitud:
            {location?.latitude.toFixed(2) + "°"}
          </Text>

          <Text style={styles.DatosPosicion}>
            -Longitud:
            {location?.longitude.toFixed(2) + "°"}
          </Text>
      
        </View>
{location?.longitude &&  <Mapa
          
          Altitud={location?.altitude}
          Latitud={location?.latitude}
          longitude={location?.longitude}
        />}
       
        
  
        </>
    );
};


const styles = StyleSheet.create({
    DatosPosicion: {
      width: "auto",
      textShadowColor: "rgba(0, 0, 0, 0.75)",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
      color: "white",
      fontSize: 20,
    },
  });
  