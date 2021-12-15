import React, { Component, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Books from "../../Components/Books/index";
import SearchBar from "../../Components/SearchBar";

function Home() {
  const [HandleSelector, setHandleSelector] = useState(true);
  const [Filter, setFilter] = useState("");

  const [optionValue, setOptionValue] = useState("Mais Recentes");
  return (
    <View style={styles.component}>
      <Text style={styles.title}>
        SEUS {"\n"}
        LIVROS{" "}
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
      <SearchBar
        Filter={Filter}
        setFilter={setFilter}
        setOptionValue={setOptionValue}
      />
      <Books
        Available={HandleSelector}
        Filter={Filter}
        optionValue={optionValue}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  component: {
    width: "90%",
    marginTop: 15,
  },
  title: {
    fontSize: 54,
    color: "#730202",
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginBottom: 20,
  },
  selector: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    margin: "auto",
    marginBottom: 30,
    alignSelf: "center",
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
    fontWeight: "600",
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
    fontWeight: "600",
  },
});
