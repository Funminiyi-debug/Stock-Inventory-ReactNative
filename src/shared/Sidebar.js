import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../shared/global";
import { DrawerItemList } from "@react-navigation/drawer";

const routes = ["Expenses", "", "Profile"];
const Sidebar = ({ props }) => {
  return (
    <Container>
      <Content>
        {/* <ImageBackground
          source={require("../../assets/bg2-img.jpg")}
          style={{ width: "100%", height: "100%", flex: 1 }} */}
        {/* > */}

        <View style={styles.avatarContainer}>
          <AntDesign
            name="user"
            size={24}
            color="black"
            style={styles.avatar}
          />
          <Text style={styles.avatarText}>Funminiyi</Text>
        </View>
        <DrawerItemList
          {...props}
          style={{ ...globalStyles.fontBold, fontWeight: "bold" }}
        />
        {/* </ImageBackground> */}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    height: 120,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "crimson",
  },
  avatar: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 100 / 2,
    color: "crimson",
  },
  avatarText: {
    color: "white",
    ...globalStyles.fontBold,
    marginTop: 5,
  },
});

export default Sidebar;
