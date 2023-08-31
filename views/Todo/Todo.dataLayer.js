import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Todo from "./Todo";

export function getLocation(id) {
  return gql`
  query GetLocation {
    location(id: ${id}) {
      id
      name
      description
    }
  }
`;
}

export default function TodoDataLayer({ id }) {
  const insets = useSafeAreaInsets();
  const { loading, error, data } = useQuery(getLocation(id));

  return <Todo loading={loading} error={error} data={data} insets={insets} />;
}
