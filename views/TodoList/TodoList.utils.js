export function onPressTodo(navigation, todoId) {
  if (todoId) {
    navigation.navigate("Todo", {
      id: todoId,
    });
  }
}

export function setPageTitle(navigation, title) {
  if (title) {
    navigation.setOptions({
      title: title,
    });
  }
}
