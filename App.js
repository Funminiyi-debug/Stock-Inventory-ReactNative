import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import DrawerNavigator from "./src/navigation/Drawer";

const getFonts = () => {
  return Font.loadAsync({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);

  if (fontLoaded) {
    return (
      <>
        <StatusBar backgroundColor="white"></StatusBar>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setfontLoaded(true)} />
    );
  }
}
const styles = StyleSheet.create({});
