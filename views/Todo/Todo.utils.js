export function onNavButtonPress(navigation, navigationScreen) {
  navigation.navigate(navigationScreen);
}

export function setTodoPageTitle(data, setPageTitle) {
  return () => {
    if (data && data.location && data.location.title) {
      setPageTitle();
    }
  };
}
