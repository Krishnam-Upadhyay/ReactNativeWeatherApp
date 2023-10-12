import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../RowText";
export default function CurrentWeather() {
  return (
    <SafeAreaView style={styles.wrappper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black"></Feather>
        <Text style={styles.temp}>current weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>feels like 5</Text>

        <RowText messageOne/>
        <View style={styles.highLow}>
          <Text style={styles.like}>High:9</Text>
          <Text style={styles.like}>Low:6</Text>
        </View>
      </View>
      <View style={styles.boddyWrappper}>
        <Text style={styles.descrition}>its sunny day</Text>
        <Text style={styles.message}>its perfect dya to wear t shirt</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrappper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  like: {
    color: "black",
    fontSize: 20,
  },
  highLow: {
    flexDirection: "row",
  },
  boddyWrappper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  descrition: {
    fontSize: 48,
  },
  descrition: {
    fontSize: 30,
  },
});
