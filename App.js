import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import UpcomingWeather from "./src/components/screens/UpcomingWeather";
import City from "./src/components/screens/City";

const App = () => {
  return (
    <View style={styles.container}>
      <City />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
