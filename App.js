import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import TodoDataLayer from "./views/Todo/Todo.dataLayer";
import TodoListDataLayer from "./views/TodoList/TodoList.dataLayer";

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ["http://localhost:19006"],
  config: {
    screens: {
      TodoList: "/",
      Todo: "/:id",
    },
  },
};

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <View style={styles.container}>
          <NavigationContainer
            linking={linking}
            fallback={
              <View>
                <Text>Fallback route</Text>
              </View>
            }
          >
            <Stack.Navigator>
              <Stack.Screen name="TodoList" component={TodoListDataLayer} />
              <Stack.Screen name="Todo" component={TodoDataLayer} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
