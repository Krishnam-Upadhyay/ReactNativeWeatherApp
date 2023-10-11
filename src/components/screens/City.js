import React from "react";
import { SafeAreaView, Text, StyleSheet ,ImageBackground, StatusBar} from "react-native";

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
      source = {require('../../../assets/')}
      style = {styles.imageLayout}
      >City</ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:StatusBar.currentHeight||0,
    flext: 1,
  },
  imageLayout:{
    flex:1,

  }
});

export default City;
