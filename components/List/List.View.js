import React from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Header from "./Header.View";
import Item from "./Item.View";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default function List({ data }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header title="Todo List" />}
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
