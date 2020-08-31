import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../shared/global";
import { Bar } from "../shared";

export default function SalesRecords() {
  return (
    <View style={{ ...globalStyles.container, ...styles.alignBar }}>
      <Bar></Bar>
      <Text>this is the sales records</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  alignBar: {
    justifyContent: "flex-start",
  },
});
