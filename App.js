import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import UpcomingWeather from "./src/components/UpcomingWeather";
import OurChild from "./src/components/OutChild";
export default function CurrentWeather() {
  return (
    <View style={styles.container}>
      <UpcomingWeather />
    </View>
  );

}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

