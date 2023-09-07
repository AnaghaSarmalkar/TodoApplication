import { onPressTodo } from "../TodoList.utils";

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
});
