import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {Feather} from '@expo/vector-icons';
const ListItems = (props) => {
  return (
    <View style={styles.item}>
      <Feather name="sun" size={50} color={"white"} />
      <Text style={styles.date}>{props.dt_txt}</Text>
      <Text style={styles.temp}>{props.min}</Text>
      <Text style={styles.temp}>{props.max}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItem: "center",
    borderWidth: 5,
    backgroundColor: "pink",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
});
export default ListItems;