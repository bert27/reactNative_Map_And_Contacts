import React, { useCallback, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCoffee,
  faSearch,
  faUser,
  faUsers,
  faCog,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import Userpng from "./Usuario.png";
import SearchBar from "./SearchBar";
import * as Contacts from "expo-contacts";
import stylesSass from "./estilos.sass";

export const PaginaContactos = (props) => {
  const [contactos, setcontactos] = useState(
    <Text style={styles.ElementoLista}>"Cargando"</Text>
  );

  const ContactoElegido = useCallback((Contacto) => {
    console.log(Contacto.displayName);
  }, []);

  const getNumber = useCallback((contacto) => {
    const numero = contacto?.phoneNumbers;
    if (numero !== undefined) {
      return numero[0]?.number;
    }

    return "";
  }, []);

  useEffect(() => {
    console.log("Cargando contactos");
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          setcontactos(
            data.map((contacto, index) => {
              return (
                <Text
                  style={styles.ElementoLista}
                  onPress={() => ContactoElegido(data[i])}
                >
                  <Image
                    style={styles.Image}
                    source={require("./Usuario.png")}
                  />
                  <Text>
                    {contacto.name}
                    {getNumber(contacto)}
                  </Text>
                </Text>
              );
            })
          );
        }
      }
    })();
  }, []);

  return (
    <>
      <View style={stylesSass.father}>
        <View>
          <FontAwesomeIcon icon={faUsers} style={styles.Icono} size={35} />
        </View>
        <View>
          <Text style={styles.Titulo}>Contactos:</Text>
        </View>
      </View>
      <SearchBar />
      {/* {this.state.Contactos}*/}
      <ScrollView style={styles.scrollView}>{contactos}</ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: 35,
    height: 35,
    marginRight: 20,
  },
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
    fontSize: 24,
  },

  scrollView: {
    display: "flex",
    width: "100%",
    height: 100,
    marginHorizontal: 20,
    flexDirection: "column",
  },

  ElementoLista: {
    width: "auto",
    height: "auto",
    padding: "2%",
    marginTop: "2%",
    backgroundColor: "white",
    //textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: "#000000",
    height: "auto",
    fontSize: 20,
  },
});
