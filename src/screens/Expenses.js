import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
  ScrollView,
} from "react-native";
import { globalStyles, formatCurrency } from "../shared/global";
import { Bar, Card, Item, AddExpenseForm, ExpenseFilter } from "../shared";
import { MaterialIcons } from "@expo/vector-icons";

const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};

export default function Expenses() {
  let ourDate = new Date();
  const pastDate = ourDate.getDate() - 7;
  ourDate.setDate(pastDate);
  const [modalOpen, setmodalOpen] = useState(false);
  const [visibleToast, setvisibleToast] = useState(false);
  const [filterConditions, setFilterConditions] = useState({
    category: "All Categories",
    startDate: pastDate,
  });
  const pressHandler = () => {
    setmodalOpen(true);
  };

  const [expenses, setExpenses] = useState([
    {
      amount: "2000",
      category: "Repairs & Maintenance",
      date: new Date(2020, 6, 1),
      note: "On friday",
      key: 1,
    },
    {
      amount: "50000",
      category: "Food",
      date: new Date(2020, 8, 1),
      note: "On friday",
      key: 2,
    },
    {
      amount: "200000",
      category: "Transport",
      date: new Date(2020, 4, 3),
      note: "On Thursday",
      key: 3,
    },
  ]);

  const heading = [
    { title: "Total Expenses", value: expenses.length },
    {
      title: "Total Expenses Amount",
      value: formatCurrency(
        expenses.reduce((total, item) => total + parseInt(item.amount), 0)
      ),
    },
  ];

  const addExpense = value => {
    setmodalOpen(false);
    setvisibleToast(true);
    setExpenses(oldState => {
      return [value, ...oldState];
    });
  };

  const deleteExpense = value => {
    setExpenses(oldState => {
      // return item;
      return oldState.filter(item => item.key !== value.key);
    });
  };

  // filter list
  const isFiltered = expenses.filter(item => {
    if (filterConditions.category === "All Categories") {
      return item.date > filterConditions.startDate;
    }
    return (
      item.category === filterConditions.category &&
      item.date > filterConditions.startDate
    );
  });

  const setFilter = filterObject => {
    setFilterConditions({
      category: filterObject.category,
      startDate: filterObject.startDate,
    });
  };

  useEffect(() => {
    setvisibleToast(false);
  }, [visibleToast]);

  return (
    <View style={{ ...globalStyles.container, ...styles.alignBar }}>
      <Bar items={heading}></Bar>

      <ExpenseFilter setFilter={setFilter} />

      <TouchableOpacity style={styles.addIcon} onPress={pressHandler}>
        <MaterialIcons name="add" size={24} color="black" />
      </TouchableOpacity>

      <ScrollView style={{ width: "100%" }}>
        {isFiltered.map(expense => {
          return (
            <TouchableOpacity
              onLongPress={() => deleteExpense(expense)}
              key={expense.key}
            >
              <Item expense={expense}></Item>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <Toast visible={visibleToast} message="Expense added" />

      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalView}>
            <Text style={globalStyles.formHeader}>Add Expense</Text>
            <AddExpenseForm addExpense={addExpense} />
            <Text onPress={() => setmodalOpen(false)} style={styles.close}>
              close
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  alignBar: {
    justifyContent: "flex-start",
  },
  addIcon: {
    borderWidth: 1,
    borderStyle: "dashed",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    margin: 10,
  },

  // modal
  modalView: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  close: {
    fontSize: 16,
    alignSelf: "center",
    ...globalStyles.fontBold,
  },
});
