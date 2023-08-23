import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider as SafeAreaView } from "react-native-safe-area-context";
import { style } from "./App.style";
import ListPageDataLayer from "./views/ListPage.dataLayer";

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <View style={styles.container}>
        <ListPageDataLayer />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
