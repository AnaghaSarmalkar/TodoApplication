import { gql, useQuery } from "@apollo/client";
import React from "react";
import ListPage from "./ListPage";

export const getLocationsSimple = gql`
  query GetLocationsSimple {
    locations {
      id
      name
    }
  }
`;

export default function ListPageDataLayer() {
  const { loading, error, data } = useQuery(getLocationsSimple);

  return <ListPage data={data} loading={loading} error={error} />;
}
