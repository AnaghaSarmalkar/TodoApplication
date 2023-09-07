export function onPressTodo(navigation, todoId) {
  if (todoId) {
    navigation.navigate("Todo", {
      id: todoId,
    });
  }
}
