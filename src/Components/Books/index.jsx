import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import Book from "./Book/index";

function Books(props) {
  const Filter = props.Filter;

  const Available = props.Available;
  const optionValue = props.optionValue;
  const availableBooks = useSelector((state) => state.home.livros);
  const notavailableBooks = useSelector((state) => state.home.emprestados);

  const FilteredAvailableBooks = availableBooks.filter((filtro) => {
    if (Filter === "") return availableBooks;
    else {
      const filtrado = filtro.nome.toLowerCase().includes(Filter.toLowerCase());
      return filtrado;
    }
  });

  const FilteredLentBooks = notavailableBooks.filter((filtro) => {
    if (Filter === "") return notavailableBooks;
    else {
      const filtrado = filtro.nome.toLowerCase().includes(Filter.toLowerCase());
      return filtrado;
    }
  });

  const sort =
    optionValue !== "Mais recentes" &&
    FilteredAvailableBooks.sort(function (a, b) {
      if (a.nome.toLowerCase() < b.nome.toLowerCase()) return -1;
      if (a.nome.toLowerCase() > b.nome.toLowerCase()) return 1;
      return 0;
    });

  const sortLent =
    optionValue !== "Mais recentes" &&
    FilteredLentBooks.sort(function (a, b) {
      if (a.nome.toLowerCase() < b.nome.toLowerCase()) return -1;
      if (a.nome.toLowerCase() > b.nome.toLowerCase()) return 1;
      return 0;
    });

  return (
    <View style={styles.component}>
      {Available ? (
        <View style={styles.container}>
          {FilteredAvailableBooks.map((livro, index) => (
            <Book
              Available={Available}
              livro={livro}
              index={index}
              key={livro.id}
            />
          ))}
        </View>
      ) : (
        <View style={styles.container}>
          {FilteredLentBooks.map((livro, index) => (
            <Book
              livro={livro}
              Available={Available}
              index={index}
              key={livro.id}
            />
          ))}
        </View>
      )}
    </View>
  );
}

export default Books;

const styles = StyleSheet.create({
  component: {
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    width: "90%",
    justifyContent: "space-between",
  },
});
