import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Button, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Todo from "./Todo";

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
    <View>
      <Button
        title="Go to List page"
        onPress={() => navigation.navigate("TodoList")}
      />
      <Todo loading={loading} error={error} data={data} insets={insets} />;
    </View>
  );
}
