import React from 'react';
import { Text, View, StyleSheet, BackHandler, Alert } from "react-native";
import styless4 from "./../../App.sass";
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';

export default class ButtonsMenu extends React.Component {
  constructor() {
         super();
         this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
    console.log("Saliendo de la app");
        var NMenu=this.props.NumeroPagina;
        if(NMenu!=0){
          this.props.VolverAtras();
        }else{
          BackHandler.exitApp();
        }

        return true;
    }

render() {
return (<>

</>
          );
        }
      }
