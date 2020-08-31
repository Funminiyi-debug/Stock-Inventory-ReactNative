import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles, formatCurrency } from "../shared/global";

const Item = ({ expense }) => {
  return (
    <View style={styles.ItemView}>
      <View>
        <Text style={styles.itemName}>{expense.category}</Text>
        <Text style={styles.itemDescription}>{expense.note}</Text>
      </View>
      <View style={styles.itemDateContainer}>
        <Text style={styles.itemDate}> {expense.date.toDateString()}</Text>
        <Text style={styles.itemPrice}>#{formatCurrency(expense.amount)}</Text>
      </View>
    </View>
  );
};

// for Item
const styles = StyleSheet.create({
  ItemView: {
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 0.5,
    ...globalStyles.font,
  },
  itemDateContainer: {
    alignItems: "flex-end",
  },
  itemPrice: {
    fontSize: 18,
    ...globalStyles.primaryColor,
  },
  itemName: {
    ...globalStyles.fontBold,
    fontSize: 16,
  },
  itemDescription: {
    textTransform: "capitalize",
  },
});

export default Item;
