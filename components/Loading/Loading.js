import React from "react";
import { Text } from "react-native";
import ViewWrapper from "../../utilities/ViewWrapper";

// Can take optional props to customize loading
export default function Loading() {
  const loadingText = "Loading . . .";
  return (
    <ViewWrapper>
      <Text>{loadingText}</Text>
    </ViewWrapper>
  );
}
