import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Todo from "./Todo";
import { onNavButtonPress } from "./Todo.utils";

const GET_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      id
      name
      description
    }
  }
`;

export default function TodoDataLayer({ route, navigation }) {
  const { id: itemId } = route.params;
  const insets = useSafeAreaInsets();
  const { loading, error, data } = useQuery(GET_LOCATION, {
    variables: { id: itemId },
  });

  return (
    <Todo
      isLoading={loading}
      hasError={error}
      data={data}
      insets={insets}
      // route={route}
      onNavButtonPress={onNavButtonPress}
      navigation={navigation}
    />
  );
}
