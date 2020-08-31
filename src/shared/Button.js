import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Button() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>new sale</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: "crimson",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontFamily: "OpenSans-Bold",
    fontSize: 15,
    textAlign: "center",
    textTransform: "uppercase",
    // fontWeight: "bold",
  },
});
