import { gql, useQuery } from "@apollo/client";
import React from "react";
import Todo from "./Todo";

export const getLocationsDesc = gql`
  query GetLocationsDesc {
    locations {
      id
      name
      description
    }
  }
`;

export default function TodoDataLayer() {
  const { loading, error, data } = useQuery(getLocationsDesc);

  return <Todo loading={loading} error={error} data={data} />;
}
