import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Header/Header";
import Item from "../Item/Item";

export default function List({ data }) {
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={<Header title="Todo List" />}
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
