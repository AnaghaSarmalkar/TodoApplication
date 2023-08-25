import React from "react";
import { Text, View } from "react-native";

export default function Error({ message }) {
  const errorText = `Error getting resource: ${message}`;
  return (
    <View>
      <Text>{errorText}</Text>
    </View>
  );
}
