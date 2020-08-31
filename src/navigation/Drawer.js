import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Header, Sidebar } from "../shared";
import { globalStyles } from "../shared/global";
import {
  SalesRecordStack,
  SalesInvoiceStack,
  StockInventoryStack,
  SettingsStack,
  ExpensesStack,
} from "../navigation";

const Drawer = createDrawerNavigator();

const CustomDrawerComponent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL("https://mywebsite.com/help")}
      />
      <Text>this shoud show</Text>
    </DrawerContentScrollView>
  );
};

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <Sidebar props={props} />
          </DrawerContentScrollView>
        );
      }}
      drawerContentOptions={{
        activeBackgroundColor: "crimson",
        activeTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Sales Invoice"
        component={SalesInvoiceStack}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Sales Records"
        component={SalesRecordStack}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Stock Inventory"
        component={StockInventoryStack}
      ></Drawer.Screen>
      <Drawer.Screen name="Settings" component={SettingsStack}></Drawer.Screen>
      <Drawer.Screen name="Expenses" component={ExpensesStack}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
