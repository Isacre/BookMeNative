import React from "react";
import { StyleSheet, Text, View, TextInput, Picker, Image } from "react-native";

const SearchBar = (props) => {
  const Filter = props.Filter;
  const { setOptionValue } = props;
  const { setFilter } = props;

  return (
    <View style={styles.component}>
      <Image
        source={require("../../../assets/Search.png")}
        style={{ width: 11, height: 11, marginTop: 5, marginRight: 5 }}
      />
      <TextInput
        style={styles.input}
        placeholder="Pesquisar por título"
        placeholderTextColor="#730202"
        onChangeText={setFilter}
        value={Filter}
      />
      <Picker
        mode="dropdown"
        selectedValue={Filter}
        onValueChange={(itemValue) => setOptionValue(itemValue)}
        style={styles.picker}
      >
        <Picker.Item
          style={styles.item}
          value="Mais recentes"
          label="Mais recentes"
        />
        <Picker.Item
          style={styles.item}
          value="Ordem alfabetica"
          label="Ordem alfabetica"
        />
      </Picker>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  component: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    margin: "auto",
  },
  input: {
    color: "#730202",
    borderStyle: "solid",
    borderBottomColor: "#730202",
    borderBottomWidth: 1,
    width: "90%",
  },
  picker: {
    fontSize: 12,
    width: "10%",
    fontWeight: "600",
    color: "#730202",
    borderWidth: 0,
  },
  item: {},
});
