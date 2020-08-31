import { StyleSheet } from "react-native";
export const formatCurrency = string =>
  `${string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00`;

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryColor: {
    color: "crimson",
  },
  fontBold: {
    fontFamily: "OpenSans-Bold",
  },
  font: {
    fontFamily: "OpenSans-Regular",
  },
  input: {
    padding: 5,
    borderBottomWidth: 1,
    borderColor: "#bbb",
    width: "80%",
    alignSelf: "center",
    margin: 10,
    color: "#333",
  },
  inputButton: {
    backgroundColor: "crimson",
    padding: 10,
    width: "80%",
    alignSelf: "center",
    margin: 10,
    borderRadius: 10,
  },
  inputButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
  formHeader: {
    fontSize: 24,
    textAlign: "center",
    color: "crimson",
    fontFamily: "OpenSans-Bold",
  },
});
