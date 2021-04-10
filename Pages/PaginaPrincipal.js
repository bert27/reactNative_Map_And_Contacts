import React, { useCallback, useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import styless4 from "./estilos.sass";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCoffee,
  faSearch,
  faUser,
  faUsers,
  faCog,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

import Contacts from "react-native-contacts";
import { Posicionamiento2 } from "../components/Mapa/Posicionamiento2";
import { NumeroTelefono } from "../components/Contacts/NumeroTelefono";
import ButtonsMenu from "../components/Buttons/ButtonsMenu";
import {PaginaContactos} from "./PaginaContactos/PaginaContactos";
export const PaginaPrincipal = (props) => {
  console.log("d" + props.DatosGPS);
  const [actualpage, setactualpage] = useState(0);
  const home = useCallback(() => {
    console.log("Volviendo a home");
  }, []);

  const goUsers = useCallback(() => {
    console.log("ir a Usuarios");
    setactualpage(1);
  }, [actualpage]);

  const goUser = useCallback(() => {
    console.log("ir a Usuario");
    setactualpage(0);
  }, [actualpage]);

  const goSearch = useCallback(() => {
    console.log("ir a busqueda");
    setactualpage(0);
  }, [actualpage]);

  const goConfigure = useCallback(() => {
    console.log("ir a config");
    setactualpage(0);
  }, [actualpage]);
  return (
    <>
      <View style={styless4.container4}>
        {/*Titulo APP*/}
        <View style={styless4.titlePage}>
          <ButtonsMenu NumeroPagina={actualpage} VolverAtras={home()} />
          <FontAwesomeIcon icon={faMap} style={styles.Icono} size={35} />
          <Text style={styles.title1text}>Encuentra Amigos:</Text>
        </View>
        {/*Datos GPS* y Mapa*/}

        {actualpage === 0 && (
          <>
            <NumeroTelefono />

            <Posicionamiento2 />
          </>
        )}

        {actualpage === 1 && (
          <>
            <PaginaContactos />
          </>
        )}

        <View style={styless4.BarraNavegacion}>
          <FontAwesomeIcon
            icon={faSearch}
            style={styles.Icono2}
            onPress={goSearch}
            size={35}
          />
          <FontAwesomeIcon
            icon={faUsers}
            style={styles.Icono2}
            onPress={goUsers}
            size={35}
          />

          <FontAwesomeIcon
            icon={faUser}
            style={styles.Icono2}
            onPress={goUser}
            size={35}
          />
          <FontAwesomeIcon
            icon={faCog}
            style={styles.Icono2}
            onPress={goConfigure}
            size={35}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Icono: {
    width: "auto",
    fontSize: 35,
    color: "white",
    marginRight: 10,
  },
  Icono2: {
    width: "auto",
    height: "auto",
    marginRight: 20,
    color: "white",
    fontSize: 50,
  },
  title1text: {
    width: "auto",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: "white",
    height: "auto",
    fontSize: 25,
  },
});
