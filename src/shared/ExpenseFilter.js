import React, { useState, Fragment, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Picker,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "./global";
import { MaterialIcons } from "@expo/vector-icons";
import { DatePicker } from "native-base";

export default function ExpenseFilter({ setFilter }) {
  const [showFilter, setShowFilter] = useState(false);
  let ourDate = new Date();
  const pastDate = ourDate.getDate() - 7;
  ourDate.setDate(pastDate);
  const [date, setDate] = useState(ourDate);
  const [category, setCategory] = useState("All Categories");

  const toggleOpen = () => {
    setShowFilter(!showFilter);
  };

  const handleDateChange = newDate => {
    setDate(newDate);
    setFilter({ category, startDate: newDate });
  };

  const handleCategoryChange = newCategory => {
    setCategory(newCategory);
    setFilter({ category: newCategory, startDate: date });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ width: "100%" }}>
        <TouchableOpacity onPressIn={toggleOpen}>
          <View style={styles.filterContainer}>
            <MaterialIcons name="filter-list" size={24} color="black" />
            <Text style={styles.filterText}>Filter</Text>
          </View>
        </TouchableOpacity>
        <View
          style={[
            styles.filterDropDownView,
            {
              display: showFilter ? "flex" : "none",
              opacity: showFilter ? 0.8 : 0,
            },
          ]}
        >
          <View style={[styles.filterDropDownItems]}>
            <Picker
              style={[globalStyles.input, styles.largeInput]}
              onValueChange={handleCategoryChange}
              selectedValue={category}
            >
              {[
                "All Categories",
                "Transport",
                "Food",
                "Rent",
                "Utilities",
                "Entertainment",
                "Repairs & Maintenance",
                "Taxes",
              ].map((item, index) => {
                return (
                  <Picker.Item
                    label={item}
                    value={item}
                    key={`item-${index}`}
                  />
                );
              })}
            </Picker>
          </View>
          <View style={[styles.filterDropDownItems]}>
            <View style={styles.filterDropDownItem}>
              <Text style={styles.text}>Interval</Text>
              <View
                style={[
                  {
                    backgroundColor: "#eee",
                    marginLeft: -12,
                    padding: 0,
                    marginVertical: 1,
                    ...globalStyles.font,
                  },
                ]}
              >
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
            </View>
            <View style={styles.filterDropDownItem}>
              <Text style={[styles.text, globalStyles.fontBold]}>
                Start Time
              </Text>
              <Text style={styles.text}>{date.toDateString()}</Text>
            </View>
            <View style={styles.filterDropDownItem}>
              <Text style={[styles.text, globalStyles.fontBold]}>
                Stop Time
              </Text>
              <Text style={styles.text}>{new Date().toDateString()}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    backgroundColor: "#abc",
    height: 25,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  filterText: {
    textAlign: "center",
    fontSize: 16,
    ...globalStyles.font,
    marginLeft: 10,
  },
  filterDropDownView: {
    backgroundColor: "#abc",
    opacity: 0.7,
    height: 150,
    alignItems: "center",
  },
  filterDropDownItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
  },
  filterDropDownItem: {
    flex: 1,
    alignItems: "flex-start",
  },
  text: {
    ...globalStyles.font,
  },
  largeInput: { backgroundColor: "#eee", width: "100%" },
});
