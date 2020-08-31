import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";
import { globalStyles } from "../shared/global";

export default function Header({ navigation, title }) {
  return (
    <ImageBackground
      source={require("../../assets/bg2-img.jpg")}
      style={styles.container}
    >
      <Feather
        name="menu"
        size={40}
        color="crimson"
        onPress={navigation.toggleDrawer}
      />
      <Text style={{ ...styles.headerText, ...globalStyles.primaryColor }}>
        {title}
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    padding: 6,
    width: 500,
    paddingHorizontal: 20,
    marginLeft: -10,
  },
  headerText: {
    fontSize: 25,
    marginLeft: 15,
    color: "green",
    fontFamily: "OpenSans-Regular",
  },
});
