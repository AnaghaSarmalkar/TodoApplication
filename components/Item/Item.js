import React from "react";
import { Pressable, Text, View } from "react-native";
import { style } from "./Item.Style";

export default function Item({ item }) {
  return (
    <Pressable style={[style.item]}>
      <View>
        <Text style={[style.name]}>{item.name}</Text>
      </View>
    </Pressable>
  );
}
