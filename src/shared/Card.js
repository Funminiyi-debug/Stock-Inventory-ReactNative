import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Card() {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Text>this is a card</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#eee",
    width: "90%",
    height: 70,
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    shadowColor: "crimson",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
