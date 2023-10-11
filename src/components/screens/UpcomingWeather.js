import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";

const DATA = [
  {
    dt_txt: "2022-08-30 15:00:00",
    main: {
      temp_min: 296.76,
      temp_max: 297.87,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 21:00:00",
    main: {
      temp_min: 290.31,
      temp_max: 292.46,
    },
    weather: [
      {
        main: "light rain",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 18:00:00",
    main: {
      temp_min: 292.84,
      temp_max: 295.45,
    },
    weather: [
      {
        main: "Clody",
      },
    ],
  },
];

import ListItems from "../ListItems";

const UpcomingWeather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcomming Weather</Text>
      <ImageBackground
        source={require("../../../assets/weather.jpg")}
        style={styles.image}
      >
        <FlatList
          data={DATA}
          renderItem={({ item }) => {
            return (
              <ListItems
                condition={item.weather[0].main}
                dt_txt={item.dt_txt}
                min={item.main.temp_min}
                max={item.main.temp_max}
              />
            );
          }}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "royalblue",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  },
});
export default UpcomingWeather;
