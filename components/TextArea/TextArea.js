import React from "react";
import { Text } from "react-native";
import { style } from "./TextArea.Style";

export default function TextArea({ description }) {
  return <Text style={[style.description]}>{description}</Text>;
}
