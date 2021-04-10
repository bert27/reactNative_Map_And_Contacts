import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PaginaPrincipal } from "./Pages/PaginaPrincipal";
export default function App() {
  return <PaginaPrincipal />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

/*  <View style={styles.container}>
      <Text>hola</Text>
      <StatusBar style="auto" />
    </View>*/
