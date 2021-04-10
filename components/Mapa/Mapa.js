import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

const styles = StyleSheet.create({
  map: {
    width: "95%",
    height: "40%",
  },
});

export default class Mapa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Latitud: 39.46975,
      longitude: -0.37739,
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    var mapStyle = [
      {
        elementType: "geometry",
        //Grosso
        stylers: [{ color: "#F8F5EE" }],
      },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      {
        featureType: "administrative.locality",
        //Nombres
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bb6f3c",
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#2f74c4" }],
      },
      //Bosque
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#D0E7BE" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#181513" }],
      },
      //Calles
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#F1D485" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#F1D485" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        //Autopista
        stylers: [{ color: "#F1D485" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#F1D485" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#F1D485" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      //Agua
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#B5DDEF" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#EEF6E8" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#EEF6E8" }],
      },
    ];

    //var DatosGPS=this.props.DatosGPS;

    //console.log("Datosok:" + DatosGps);

    var Latitud = this.props.Latitud;
    var Longitud = this.props.longitude;
    console.log("Datosok:" + Latitud);
    return (
      <>
        {/*  //Coordenadas Mapa} */}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: Latitud,
            longitude: Longitud,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}
        >
          <MapView.Marker
            draggable
            coordinate={{
              latitude: Latitud,
              longitude: Longitud,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={"Yo"}
            description={"Tu posición"}
          >
            <Text>{"Yo"}</Text>
            <Image
              source={require("./Usuario.png")}
              style={{ width: 20, height: 20 }}
            />
          </MapView.Marker>

          <MapView.Marker
            draggable
            coordinate={{
              latitude: this.state.Latitud,
              longitude: this.state.longitude,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={"Jaime"}
            description={"Numero de jaime"}
          >
            <Text>{"Jaime"}</Text>
            <Image
              source={require("./Usuario.png")}
              style={{ width: 20, height: 20 }}
            />
          </MapView.Marker>
        </MapView>
      </>
    );
  }
}
