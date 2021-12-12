import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Header from "./src/Components/Header/index";
import Home from "./src/screens/Home";
import { Provider } from "react-redux";
import { store } from "./src/store/index";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <StatusBar style="auto" />
        <Header />
        <Home />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
