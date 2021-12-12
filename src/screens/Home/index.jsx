import React, { Component, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Books from "../../Components/Books/index";

function Home() {
  const [HandleSelector, setHandleSelector] = useState(true);
  return (
    <View style={styles.component}>
      <Text style={styles.title}>
        {" "}
        SEUS
        <br /> LIVROS{" "}
      </Text>

      <View style={styles.selector}>
        <Text
          style={HandleSelector ? styles.availableactive : styles.available}
          onPress={() => setHandleSelector(true)}
        >
          Disponíveis
        </Text>
        <Text
          style={HandleSelector ? styles.lended : styles.lendedactive}
          onPress={() => setHandleSelector(false)}
        >
          Emprestados
        </Text>
      </View>
      <Books Available={HandleSelector} />
    </View>
  );
}

export default Home;

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
    width: "60%",
    margin: "auto",
  },
  available: {
    padding: 5,
    paddingHorizontal: 15,
    color: "rgba(115, 2, 2, 0.25)",
  },
  availableactive: {
    backgroundColor: "rgba(115, 2, 2, 0.2);",
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    color: "#730202",
    fontWeight: 600,
  },
  lended: {
    padding: 5,
    paddingHorizontal: 15,
    color: "rgba(115, 2, 2, 0.25)",
  },
  lendedactive: {
    backgroundColor: "rgba(115, 2, 2, 0.2);",
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    color: "#730202",
    fontWeight: 600,
  },
});
