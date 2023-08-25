import React from "react";
import { Text, View } from "react-native";
import Error from "../../components/Error/Error";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import TextArea from "../../components/TextArea/TextArea";

export default function Todo({ loading, error, data, insets }) {
  if (loading)
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: insets.top,
        }}
      >
        <Loading />
      </View>
    );
  if (error)
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: insets.top,
        }}
      >
        <Error message={error.message} />
      </View>
    );
  if (data && data.location) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: insets.top,
        }}
      >
        <Header title={data.location.name}></Header>
        <TextArea description={data.location.description}></TextArea>
      </View>
    );
  }
  const notFound = "Not Found";
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: insets.top,
      }}
    >
      <Text>{notFound}</Text>
    </View>
  );
}
