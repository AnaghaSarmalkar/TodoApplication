import React from "react";
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
  onNavButtonPress,
}) {
  if (isLoading) return <Loading />;
  if (hasError) return <Error message={hasError.message} />;
  if (data && data.location) {
    return (
      <ViewWrapper style={styles.container}>
        {isWeb && (
          <ViewWrapper style={styles.header}>
            {/* QUESTION: How to pass custom styles to the header via ViewWrapper? Right now header has its own styles */}
            <Header title={data.location.name}></Header>
          </ViewWrapper>
        )}
        <ViewWrapper style={styles.content}>
          <TextArea description={data.location.description}></TextArea>
        </ViewWrapper>
        <ViewWrapper
          style={[
            styles.footer,
            {
              paddingBottom: isIos ? insets.bottom : 20,
            },
          ]}
        >
          <Button title="Go back to List page" onPress={onNavButtonPress} />
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
