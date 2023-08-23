import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./Item.Style";

export default function Item({ item }) {
  return (
    <TouchableOpacity style={[style.item]}>
      <View>
        <Text style={[style.name]}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}
