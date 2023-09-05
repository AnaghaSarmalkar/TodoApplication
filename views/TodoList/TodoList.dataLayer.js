import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
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

export default function TodoListDataLayer({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { loading, error, data } = useQuery(getLocationsSimple);

  const onPress = (id) =>
    navigation.navigate("Todo", {
      id: id,
    });

  useEffect(() => {
    navigation.setOptions({
      title: "LOCATIONS",
    });
  });

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
