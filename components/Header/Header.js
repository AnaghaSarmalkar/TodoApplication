import React from "react";
import { Text } from "react-native";
import { styles as basicStyles } from "./Header.Style";

export default function Header({ styles = basicStyles, title }) {
  return <Text style={styles.header}>{title}</Text>;
}
