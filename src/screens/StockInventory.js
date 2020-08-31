import React, { useEffect } from "react";
import { StyleSheet, View, Text, Animated, SafeAreaView } from "react-native";
import { globalStyles } from "../shared/global";

// expo ui kit

export default function StockInventory() {
  const opacityValue = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 1000,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    startAnimation();
  }, [opacityValue]);

  return (
    <Animated.View style={[globalStyles.container, { opacity: opacityValue }]}>
      <SafeAreaView>
        <Text> this is the stock kdkdk inventory</Text>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
