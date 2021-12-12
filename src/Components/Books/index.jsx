import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import Book from "./Book/index";

function Books(props) {
  const Available = props.Available;
  const availableBooks = useSelector((state) => state.home.livros);
  const notavailableBooks = useSelector((state) => state.home.emprestados);
  const WIDTH = Dimensions.get("window").width;
  const numColumns = 3;
  let { ItemStyle, ItemText } = styles;

  return (
    <View style={ItemStyle}>
      {Available ? (
        <View style={styles.container}>
          {availableBooks.map((livro, index) => (
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
          {notavailableBooks.map((livro, index) => (
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
  component: {},
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 50,
  },
});
