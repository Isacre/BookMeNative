import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default class index extends Component {
  render() {
    return (
      <View style={styles.component}>
        <View style={styles.content}>
          <View style={styles.logo}>
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../../../assets/logo.png")}
            />
            <Text style={{ marginLeft: 10, fontSize: 22, color: "#FFF" }}>
              Book.me
            </Text>
          </View>
          <View style={styles.icons}>
            <Image
              style={{ width: 18, height: 22, marginRight: 20 }}
              source={require("../../../assets/sino.png")}
            />
            <Image
              style={{ width: 22, height: 22 }}
              source={require("../../../assets/pessoa.png")}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: "#730202",
    width: "100%",
    height: "13vh",
  },
  content: {
    width: "90%",
    height: "100%",
    margin: "auto",
    justifyContent: "space-between",

    display: "flex",
    flexDirection: "row",
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
