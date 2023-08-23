import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Error from "../../components/Error/Error";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import TextArea from "../../components/TextArea/TextArea";

export default function ListView({ loading, error, data }) {
  console.log("data", data);
  console.log("data.locations", data.locations);
  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;
  return (
    <SafeAreaView>
      <Header title={data.locations.name}></Header>
      <TextArea description={data.locations.description}></TextArea>
    </SafeAreaView>
  );
}
