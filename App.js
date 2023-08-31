import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { styles } from "./App.style";
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
