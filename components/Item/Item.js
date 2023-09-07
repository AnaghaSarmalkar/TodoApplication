import React from "react";
import { Pressable, Text, View } from "react-native";
import { style } from "./Item.Style";

export default function Item({ item, onItemPress }) {
  return (
    <Pressable style={[style.item]} onPress={() => onItemPress(item.id)}>
      <View>
        <Text style={[style.name]}>{item.name}</Text>
      </View>
    </Pressable>
  );
}
