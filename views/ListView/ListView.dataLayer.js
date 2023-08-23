import { gql, useQuery } from "@apollo/client";
import React from "react";
import ListView from "./ListView";

export const getLocationsDesc = gql`
  query GetLocationsDesc {
    locations {
      id
      name
      description
    }
  }
`;

export default function ListViewDataLayer() {
  const { loading, error, data } = useQuery(getLocationsDesc);

  return <ListView loading={loading} error={error} data={data} />;
}
