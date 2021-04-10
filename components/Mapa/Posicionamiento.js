import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import styless4 from "./../../App.sass";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import Geolocation from 'react-native-geolocation-service';

import Mapa from "./Mapa";
export default class Posicionamiento extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Altitud: ["Cargando..."],
      Latitud: ["Cargando..."],
      longitude: ["Cargando..."],
      Altitud2: 0,
      Latitud2: 39.46975,
      longitude2: -0.37739,
    };
  }
  componentDidMount() {
    console.log("Coords");
    this.watchCurrentLocation();
  }
  watchCurrentLocation() {
    try {
      this.intervalForWatchPosition = setInterval(() => {
        this.ObtenPosicion2();
      }, 3000);
    } catch (err) {
      console.log("Error while current location watch : ", err);
    }
  }
  ObtenPosicion() {
    //if (hasLocationPermission) {

    Geolocation.getCurrentPosition(
      (position) => {
        //console.log(position.coords);
        this.setState({
          Altitud: " " + position.coords.altitude.toFixed(2) + "°",
          Latitud: " " + position.coords.latitude.toFixed(2) + "°",
          longitude: " " + position.coords.longitude.toFixed(2) + "°",
          Altitud2: position.coords.altitude,
          Latitud2: position.coords.latitude,
          longitude2: position.coords.longitude,
        });
      },
      (error) => {
        // See error code charts below.
        this.setState({
          Altitud: "Error con gps",
          Latitud: "",
          Lalongitudetitud: "",
        });
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
    //}
  }



  ObtenPosicion2(){
    async function setLocationWithPerms() {
      const {status } = await Permissions.askAsync(Permissions.LOCATION);

      let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
      const { latitude , longitude ,altitude} = location.coords
      //this.getGeocodeAsync({latitude, longitude})
     // this.setState({ location: {latitude, longitude}});



      if (status === "granted") {
     
        this.setState({
          Altitud: " " + altitude.toFixed(2) + "°",
          Latitud: " " + latitude.toFixed(2) + "°",
          longitude: " " + longitude.toFixed(2) + "°",
          Altitud2: altitude,
          Latitud2: latitude,
          longitude2: longitude,
        });
      }
    }
    setLocationWithPerms();
  }
  render() {
    return (
      <>
        <View style={styless4.containerF}>
          <Text style={styles.DatosPosicion}>Posicion:</Text>
          <Text style={styles.DatosPosicion}>
            -Altitud:
            {this.state.Altitud}
          </Text>
          <Text style={styles.DatosPosicion}>
            -Latitud:
            {this.state.Latitud}
          </Text>

          <Text style={styles.DatosPosicion}>
            -Longitud:
            {this.state.longitude}
          </Text>
          {/*Mapa:*/}
        </View>

        <Mapa
          longitude={this.state.longitude2}
          Altitud={this.state.Altitud2}
          Latitud={this.state.Latitud2}
        />
      </>
    );
  }
}

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
