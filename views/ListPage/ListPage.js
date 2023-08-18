import React from "react";
import Error from "../../components/Error/Error";
import List from "../../components/List/List";
import Loading from "../../components/Loading/Loading";

export default function ListPage({ data, loading, error }) {
  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;
  return <List data={data.locations} />;
}
