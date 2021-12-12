import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Book(props) {
  const livro = props.livro;
  const index = props.index;
  const Available = props.Available;
  return (
    <View style={styles.component}>
      {Available ? (
        <View style={styles.livros}>
          <Image style={styles.capa} source={{ uri: livro.capa }} />
          <View style={styles.block}>
            <Text style={styles.title}>{livro.nome}</Text>
            <Text style={styles.autor}>{livro.autor}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.livros}>
          <Image style={styles.capa} source={{ uri: livro.capa }} />
          <View style={styles.block}>
            <Text style={styles.title}>{livro.nome}</Text>
            <Text style={styles.autor}>{livro.autor}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    margin: "auto",
  },
  livros: {
    display: "block",
    padding: 5,
  },
  capa: {
    width: 70,
    height: 100,
    border: 4,
    borderColor: "#FFF",
    borderStyle: "solid",
    borderRadius: 10,
    marginBottom: -55,
    zIndex: 2,
    marginLeft: 15,
  },
  title: {
    color: "#FFF",
    margin: "auto",
    textAlign: "center",
    fontSize: 12,
    width: "90%",
    height: 28,
    marginTop: 59,
    lineHeight: 13,
    fontWeight: 700,
  },
  autor: {
    textAlign: "right",
    color: "#FFF",
    marginRight: "10%",
    marginTop: "3%",
    fontSize: 8,
    width: "90%",
  },
  block: {
    width: 100,
    height: 100,
    zIndex: 1,
    backgroundColor: "#bf9d73",
    borderRadius: 10,
  },
});
