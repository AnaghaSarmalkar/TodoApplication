export function setPageTitle(navigation, title) {
  if (title) {
    navigation.setOptions({
      title: title,
    });
  }
}
