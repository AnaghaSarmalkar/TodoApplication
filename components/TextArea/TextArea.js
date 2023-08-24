import React from "react";
import { Text, View } from "react-native";
import { style } from "./TextArea.Style";

export default function TextArea({ description }) {
  return (
    <View>
      <Text style={[style.description]}>{description}</Text>
    </View>
  );
}
