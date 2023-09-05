import React, { useEffect } from "react";
import { Button, Text } from "react-native";
import Error from "../../components/Error/Error";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import TextArea from "../../components/TextArea/TextArea";
import ViewWrapper from "../../utilities/ViewWrapper";
import { isIos, isWeb } from "../../utilities/constants";
import { styles } from "./Todo.Style";

export default function Todo({
  isLoading,
  hasError,
  data,
  insets,
  navigation,
  onNavButtonPress,
}) {
  useEffect(() => {
    if (data) {
      navigation.setOptions({
        title: data.location.name,
      });
    }
  }, [data]);

  if (isLoading) return <Loading />;
  if (hasError) return <Error message={hasError.message} />;
  if (data && data.location) {
    return (
      <ViewWrapper style={styles.container}>
        {isWeb && (
          <ViewWrapper style={styles.header}>
            <Header title={data.location.name}></Header>
          </ViewWrapper>
        )}
        <ViewWrapper style={styles.content}>
          <TextArea description={data.location.description}></TextArea>
        </ViewWrapper>
        <ViewWrapper
          style={{
            ...styles.footer,
            paddingBottom: isIos ? insets.bottom : 20,
          }}
        >
          <Button
            title="Previous"
            onPress={() => onNavButtonPress(navigation, "TodoList")}
          />
          <Button
            title="Go back to List page"
            onPress={() => onNavButtonPress(navigation, "TodoList")}
          />
          <Button
            title="Next"
            onPress={() => onNavButtonPress(navigation, "TodoList")}
          />
        </ViewWrapper>
      </ViewWrapper>
    );
  }
  const notFound = "Not Found";
  return (
    <ViewWrapper>
      <Text>{notFound}</Text>
    </ViewWrapper>
  );
}
