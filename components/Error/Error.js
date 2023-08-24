import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Can take optional props to customize error
export default function Error({ message }) {
  const errorText = `Error getting resource: ${message}`;
  return (
    <SafeAreaView>
      <View>
        <Text>{errorText}</Text>
      </View>
    </SafeAreaView>
  );
}
