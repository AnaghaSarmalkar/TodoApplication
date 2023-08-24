import React from "react";
import { FlatList, View } from "react-native";

export default function List({ headerComponent, data, renderItem }) {
  return (
    <View>
      <FlatList
        ListHeaderComponent={headerComponent}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
