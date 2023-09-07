import React from "react";
import { View } from "react-native";
import Error from "../../components/Error/Error";
import Header from "../../components/Header/Header";
import Item from "../../components/Item/Item";
import List from "../../components/List/List";
import Loading from "../../components/Loading/Loading";
import { isWeb } from "../../utilities/constants";
import { styles } from "./TodoList.Style";

export default function TodoList({
  data,
  loading,
  error,
  insets,
  onItemPress,
}) {
  const styleObj = [
    styles.container,
    {
      paddingTop: insets.top,
    },
  ];
  //QUESTION: I do have a ViewWrapper component, idk if its useful to use it in here?
  if (loading)
    return (
      <View style={styleObj}>
        <Loading />
      </View>
    );
  if (error)
    return (
      <View style={styleObj}>
        <Error message={error.message} />
      </View>
    );
  const header = isWeb ? <Header title="Locations List" /> : null;

  const renderItem = ({ item }) => (
    <Item item={item} onItemPress={onItemPress} />
  );
  return (
    <View style={styleObj}>
      <List
        data={data.locations}
        headerComponent={header}
        renderItem={renderItem}
      />
    </View>
  );
}
