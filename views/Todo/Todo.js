import React from "react";
import { View } from "react-native";
import Error from "../../components/Error/Error";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import TextArea from "../../components/TextArea/TextArea";

export default function Todo({ loading, error, data, insets }) {
  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;
  return (
    <View>
      <Header title={data.location.name}></Header>
      <TextArea description={data.location.description}></TextArea>
    </View>
  );
}
