import React from "react";
import { Text, View } from "react-native";

// Can take optional props to customize error
export default function Error({ message }) {
  const errorText = `Error getting resource: ${message}`;
  return (
    <View>
      <Text>{errorText}</Text>
    </View>
  );
}
