import { gql, useQuery } from "@apollo/client";
import React from "react";
import TodoList from "./TodoList";

export const getLocationsSimple = gql`
  query GetLocationsSimple {
    locations {
      id
      name
    }
  }
`;

export default function TodoListDataLayer() {
  const { loading, error, data } = useQuery(getLocationsSimple);

  return <TodoList data={data} loading={loading} error={error} />;
}
