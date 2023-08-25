import React from "react";
import { Text, View } from "react-native";

// Can take optional props to customize loading
export default function Loading() {
  const loadingText = "Loading . . .";
  return (
    <View>
      <Text>{loadingText}</Text>
    </View>
  );
}
