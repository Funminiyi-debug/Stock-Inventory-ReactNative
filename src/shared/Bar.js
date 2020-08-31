import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { globalStyles } from "../shared/global";

export default function Bar({ items = [] }) {
  return (
    <View style={styles.barContainer}>
      {items.map(item => {
        return (
          <View style={styles.textView} key={`${item.title}${item.value}`}>
            <Text style={styles.barText}>{item.title}</Text>
            <Text style={styles.barTextValue}>#{item.value}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    height: 70,
    width: "100%",
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: globalStyles.primaryColor.color,
    alignItems: "center",
    paddingVertical: 15,
  },

  barText: {
    fontSize: 14,
    color: "white",
    ...globalStyles.fontBold,
    textAlign: "center",
  },
  barTextValue: {
    fontSize: 14,
    color: "white",
    ...globalStyles.font,
    textAlign: "center",
  },
  textView: {
    marginTop: 5,
  },
});
