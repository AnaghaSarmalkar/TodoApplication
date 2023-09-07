import { gql, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { setPageTitle } from "../../utilities/navigation";
import Todo from "./Todo";
import { onNavButtonPress, setTodoPageTitle } from "./Todo.utils";

const GET_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      id
      name
      description
    }
  }
`;

export default function TodoDataLayer({ route }) {
  const navigation = useNavigation();
  const { id: itemId } = route.params;
  const insets = useSafeAreaInsets();
  const { loading, error, data } = useQuery(GET_LOCATION, {
    variables: { id: itemId },
  });

  useEffect(
    setTodoPageTitle(data, () => setPageTitle(navigation, data.location.name)),
    [data, navigation]
  );

  return (
    <Todo
      isLoading={loading}
      hasError={error}
      data={data}
      insets={insets}
      onNavButtonPress={() => onNavButtonPress(navigation, "TodoList")}
    />
  );
}
