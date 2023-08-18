import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { style } from "./Item.Style";

export default function Item({ item }) {
  return (
    <TouchableOpacity style={[style.item]}>
      <Text style={[style.name]}>{item.name}</Text>
    </TouchableOpacity>
  );
}
