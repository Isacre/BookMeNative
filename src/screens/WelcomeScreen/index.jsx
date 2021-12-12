import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../../assets/logo.png")}
    />
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
