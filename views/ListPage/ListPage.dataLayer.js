import { gql, useQuery } from "@apollo/client";
import React from "react";
import ListPage from "./ListPage";

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
    }
  }
`;

export default function ListPageDataLayer() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  return <ListPage data={data} loading={loading} error={error} />;
}
