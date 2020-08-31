import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Picker,
} from "react-native";
import { globalStyles } from "../shared/global";
import { Bar, Card, Item } from "../shared";
import { MaterialIcons } from "@expo/vector-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { DatePicker } from "native-base";

const ExpenseSchema = yup.object({
  category: yup.string().required(),
  amount: yup.number().required().min(10),
  note: yup.string(),
});

const AddExpenseForm = ({ addExpense }) => {
  const [date, setDate] = useState(new Date());
  const handleDateChange = newDate => {
    setDate(newDate);
  };
  return (
    <Formik
      initialValues={{
        category: "Transport",
        amount: 0,
        note: "N/A",
        key: Date.now(),
      }}
      validationSchemea={ExpenseSchema}
      onSubmit={values => {
        values.date = date;
        addExpense(values);
      }}
    >
      {({ isSubmitting, values, handleChange, handleSubmit, errors }) => (
        <>
          <KeyboardAvoidingView>
            <Picker
              selectedValue={values.category}
              style={{ ...globalStyles.input, backgroundColor: "#eee" }}
              onValueChange={handleChange("category")}
            >
              {[
                "Transport",
                "Rent",
                "Utilities",
                "Entertainment",
                "Taxes",
                "Food",
              ].map((item, index) => {
                return (
                  <Picker.Item
                    label={item}
                    value={item}
                    key={`category-${index}`}
                  />
                );
              })}
            </Picker>
            <Text>{errors.category}</Text>
            <TextInput
              name="amount"
              value={values.amount}
              style={globalStyles.input}
              keyboardType="numeric"
              placeholder="Amount Spent"
              onChangeText={handleChange("amount")}
            />
            <Text>{errors.amount}</Text>
            <TextInput
              name="note"
              value={values.note}
              style={globalStyles.input}
              placeholder="Description"
              onChangeText={handleChange("note")}
            />
            <Text>{errors.note}</Text>
            <View style={styles.dateInput}>
              <DatePicker
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date()}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={true}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                placeHolderTextStyle={{
                  color: "#333",
                  ...globalStyles.font,
                }}
                onDateChange={handleDateChange}
                disabled={false}
              />
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            style={globalStyles.inputButton}
            onPress={handleSubmit}
          >
            <Text style={globalStyles.inputButtonText}>Add</Text>
          </TouchableOpacity>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  dateInput: {
    alignSelf: "center",
  },
});

export default AddExpenseForm;
