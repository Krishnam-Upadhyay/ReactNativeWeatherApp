import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from "react-native";
import IconText from "../IconText";


const City = () => {
  const {
    container,
    imageLayout,
    cityName,
    countryName,
    populationWrapper,
    riseSetWrapper,
    cityText,
    resetTextLayout,
    riseSetText,
    populationText,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../../assets/city.jpg")}
        style={imageLayout}
        width={100}
        height={100}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>

        <View style={[populationWrapper, resetTextLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={8000}
            bodyTextStyle={populationText}
          />
        </View>
        <View style={[riseSetWrapper, resetTextLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={"10:46:58am"}
            bodyTextStyle={riseSetText}
          />

          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={"17:28:15pm"}
            bodyTextStyle={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flext: 1,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",

    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  resetTextLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
