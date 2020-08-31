import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StockInventory } from "../screens";
import { Header, globalStyles } from "../shared";

import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
const Stack = createStackNavigator();

const StockInventoryStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: () => (
        <Header navigation={navigation} title={" Stock Inventory"} />
      ),
    }}
  >
    <Stack.Screen name="SalesInvoice" component={StockInventory}></Stack.Screen>
  </Stack.Navigator>
);

export default StockInventoryStack;
