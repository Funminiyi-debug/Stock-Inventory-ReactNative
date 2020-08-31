import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "../shared";
import { globalStyles } from "../shared/global";

export default function SalesInvoice({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>This is the sales invoice </Text>
      <Button></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
