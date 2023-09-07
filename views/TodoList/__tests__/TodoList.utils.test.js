import { onPressTodo, setPageTitle } from "../TodoList.utils";

describe("TodoList Utils", () => {
  describe("onPressTodo", () => {
    test("Should call navigate to Todo page if todoId is given", () => {
      const navigation = {
        navigate: jest.fn(),
      };

      onPressTodo(navigation, 1);
      expect(navigation.navigate).toHaveBeenCalledTimes(1);
    });
    test("Should do nothing if todoId is null or undefined", () => {
      const navigation = {
        navigate: jest.fn(),
      };

      onPressTodo(navigation, null);
      expect(navigation.navigate).toHaveBeenCalledTimes(0);
    });
  });
  describe("setPageTitle", () => {
    test("Should call setOptions and set title if title is given", () => {
      const navigation = {
        setOptions: jest.fn(),
      };

      setPageTitle(navigation, "Test");
      expect(navigation.setOptions).toHaveBeenCalledTimes(1);
    });
    test("Should do nothing if title is null or undefined", () => {
      const navigation = {
        setOptions: jest.fn(),
      };

      setPageTitle(navigation, null);
      expect(navigation.setOptions).toHaveBeenCalledTimes(0);
    });
  });
});
