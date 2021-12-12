import React, { Component, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

function Books() {
  const [HandleSelector, setHandleSelector] = useState("");
  return (
    <View style={styles.component}>
      <Text style={styles.title}>
        {" "}
        SEUS
        <br /> LIVROS{" "}
      </Text>

      <View style={styles.selector}>
        <Text onPress={() => console.log("pressed")}>Disponíveis</Text>
        <Text onPress={() => console.log("pressed")}>Emprestados</Text>
      </View>
    </View>
  );
}

export default Books;

const styles = StyleSheet.create({
  component: {
    width: "90%",
    marginTop: 30,
  },
  title: {
    fontSize: 54,
    lineHeight: 49,
    color: "#730202",
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginBottom: 30,
  },
  selector: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    margin: "auto",
  },
});
