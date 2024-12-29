import { gql, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { setPageTitle } from "../../utilities/navigation";
import TodoList from "./TodoList";
import { onPressTodo } from "./TodoList.utils";

export const getLocationsSimple = gql`
  query GetLocationsSimple {
    locations {
      id
      name
    }
  }
`;

export default function TodoListDataLayer() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { loading, error, data } = useQuery(getLocationsSimple);

  useEffect(() => {
    setPageTitle(navigation, "Locations");
  }, [navigation]);

  const onPressTodoItem = useCallback(
    (todoId) => onPressTodo(navigation, todoId),
    [navigation]
  );

  return (
    <TodoList
      data={data}
      loading={loading}
      error={error}
      insets={insets}
      onItemPress={onPressTodoItem}
    />
  );
}
