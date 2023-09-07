import React from "react";
import { Text } from "react-native";
import ViewWrapper from "../../utilities/ViewWrapper";

export default function Error({ message }) {
  const errorText = `Error getting resource: ${message}`;
  return (
    <ViewWrapper>
      <Text>{errorText}</Text>
    </ViewWrapper>
  );
}
