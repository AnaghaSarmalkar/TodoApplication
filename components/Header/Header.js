import React from "react";
import { Text, View } from "react-native";
import { style } from "./Header.Style";

export default function Header({ title }) {
  return (
    <View>
      <Text style={style.header}>{title}</Text>
    </View>
  );
}
