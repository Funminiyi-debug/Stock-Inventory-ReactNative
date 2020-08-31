import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SalesRecords } from "../screens";
import { Header, globalStyles } from "../shared";

import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
const Stack = createStackNavigator();

const SalesRecordStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: () => (
        <Header navigation={navigation} title={" Sales Records"} />
      ),
    }}
  >
    <Stack.Screen name="SalesInvoice" component={SalesRecords}></Stack.Screen>
  </Stack.Navigator>
);

export default SalesRecordStack;
