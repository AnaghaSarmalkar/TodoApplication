import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "react-native/Libraries/NewAppScreen";
import Error from "../../components/Error/Error";
import Item from "../../components/Item/Item";
import List from "../../components/List/List";
import Loading from "../../components/Loading/Loading";

export default function ListPage({ data, loading, error }) {
  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;
  const header = <Header title="Todo List" />;

  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <SafeAreaView>
      <List
        data={data.locations}
        headerComponent={header}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
