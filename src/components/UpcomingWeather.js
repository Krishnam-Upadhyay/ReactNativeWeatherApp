import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  Image,
} from "react-native-web";
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

const Item = (props) => {
  return (
    <View style={styles.item}>
      <Feather name="sun" size={50} color={"white"} />
      <Text style={styles.date}>{props.dt_txt}</Text>
      <Text style={styles.temp}>{props.min}</Text>
      <Text style={styles.temp}>{props.max}</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcomming Weather</Text>
      <Image
        source={require("../../assets/weather.jpg")}
        style={styles.image}
      />
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return (
            <Item
              condition={item.weather[0].main}
              dt_txt={item.dt_txt}
              min={item.main.temp_min}
              max={item.main.temp_max}
            ></Item>
          );
        }}
        keyExtractor={(item) => item.dt_txt}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
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
  image:{
    height:100,
    width:100,
  }
});
export default UpcomingWeather;
