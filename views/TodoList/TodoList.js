import React from "react";
import { View } from "react-native";
import Error from "../../components/Error/Error";
import Header from "../../components/Header/Header";
import Item from "../../components/Item/Item";
import List from "../../components/List/List";
import Loading from "../../components/Loading/Loading";

export default function TodoList({ data, loading, error, insets }) {
  // Use insets inside view components
  if (loading)
    return (
      <View>
        <Loading />
      </View>
    );
  if (error)
    return (
      <View>
        <Error message={error.message} />
      </View>
    );
  const header = <Header title="Todo List" />;

  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <View>
      <List
        data={data.locations}
        headerComponent={header}
        renderItem={renderItem}
      />
    </View>
  );
}
