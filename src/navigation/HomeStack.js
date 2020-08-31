import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SalesInvoice } from "../screens";
import { Header, globalStyles } from "../shared";

import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: () => (
        <Header navigation={navigation} title="Sales Invoice" />
      ),
    }}
  >
    <Stack.Screen name="SalesInvoice" component={SalesInvoice}></Stack.Screen>
  </Stack.Navigator>
);

export default HomeStack;
