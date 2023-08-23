import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { style } from "./App.style";
import ListPageDataLayer from "./views/ListPage/ListPage.dataLayer";
const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client} children={undefined}>
      <SafeAreaProvider style={style.container}>
        <View style={styles.container}>
          <ListPageDataLayer />
          <StatusBar style="auto" />
        </View>
      </SafeAreaProvider>
    </ApolloProvider>
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
