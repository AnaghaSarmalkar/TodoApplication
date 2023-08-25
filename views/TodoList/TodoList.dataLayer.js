import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TodoList from "./TodoList";

export const getLocationsSimple = gql`
  query GetLocationsSimple {
    locations {
      id
      name
    }
  }
`;

export default function TodoListDataLayer({ navigation }) {
  const insets = useSafeAreaInsets();
  const onPress = (id) =>
    navigation.navigate("Todo", {
      id: id,
    });
  const { loading, error, data } = useQuery(getLocationsSimple);

  return (
    <TodoList
      data={data}
      loading={loading}
      error={error}
      insets={insets}
      onItemPress={onPress}
    />
  );
}
