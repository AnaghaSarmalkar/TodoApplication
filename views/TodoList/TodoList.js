import React from "react";
import { View } from "react-native";
import Error from "../../components/Error/Error";
import Header from "../../components/Header/Header";
import Item from "../../components/Item/Item";
import List from "../../components/List/List";
import Loading from "../../components/Loading/Loading";
import { isWeb } from "../../utilities/constants";

export default function TodoList({
  data,
  loading,
  error,
  insets,
  onItemPress,
}) {
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
  const header = isWeb ? <Header title="Todo List" /> : null;

  const renderItem = ({ item }) => (
    <Item item={item} onItemPress={onItemPress} />
  );
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: insets.top,
      }}
    >
      <List
        data={data.locations}
        headerComponent={header}
        renderItem={renderItem}
      />
    </View>
  );
}
