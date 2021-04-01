import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from "react-native";
import { DrawerItems } from "react-navigation-drawer";

export default class CustomSideBarMenu extends Component {
render(){
    return(
        <View>
            <DrawerItems {...this.props}/>

        </View>
    )
}
}