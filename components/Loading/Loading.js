import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Can take optional props to customize loading
export default function Loading() {
  const loadingText = "Loading . . .";
  return (
    <SafeAreaView>
      <View>
        <Text>{loadingText}</Text>
      </View>
    </SafeAreaView>
  );
}
