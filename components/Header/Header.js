import React from "react";
import { Text } from "react-native";
import { style } from "./Header.Style";

export default function Header({ title }) {
  return <Text style={style.header}>{title}</Text>;
}
