import React from "react";
import { FlatList } from "react-native";
import Item from "../Item/Item";

export default function List({ header, data }) {
  return (
    <FlatList
      ListHeaderComponent={header}
      data={data}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
