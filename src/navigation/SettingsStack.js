import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Settings } from "../screens";
import { Header, globalStyles } from "../shared";

import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
const Stack = createStackNavigator();

const SettingsStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: () => <Header navigation={navigation} title={"Settings"} />,
    }}
  >
    <Stack.Screen name="SalesInvoice" component={Settings}></Stack.Screen>
  </Stack.Navigator>
);

export default SettingsStack;
