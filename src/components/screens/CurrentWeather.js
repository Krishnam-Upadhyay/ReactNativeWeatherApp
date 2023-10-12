import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../RowText";
import { weatherType } from "../utility/WeatherType";
const CurrentWeather = () => {
  const {
    wrappper,
    container,
    temp,
    feels,
    like,
    highLow,
    boddyWrappper,
    descrition,
    message,
  } = styles;
  return (
    <SafeAreaView style={wrappper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black"></Feather>
        <Text style={temp}>current weather</Text>
        <Text style={temp}>6</Text>
        <Text style={feels}>feels like 5</Text>

        <RowText
          messageOne={"High:9"}
          messageTwo={"Low:6"}
          messageOneStyle={like}
          messageTwoStyle={like}
          containerStyle={highLow}
        />
      </View>
      <RowText
        messageOne={"its sunny day"}
        messageTwo={"its perfect dya to wear t shirt"}
        messageOneStyle={descrition}
        messageTwoStyle={message}
        containerStyle={boddyWrappper}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrappper: {
    flex: 1,
    backgroundColor: "lightpink",
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
  message: {
    fontSize: 30,
  },
});
export default CurrentWeather;
