import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Expenses } from "../screens";
import { Header, globalStyles } from "../shared";

import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
const Stack = createStackNavigator();

const ExpensesStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: () => <Header navigation={navigation} title={"Expenses"} />,
    }}
  >
    <Stack.Screen name="SalesInvoice" component={Expenses}></Stack.Screen>
  </Stack.Navigator>
);

export default ExpensesStack;
