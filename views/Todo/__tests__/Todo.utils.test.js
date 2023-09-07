import { onNavButtonPress, setTodoPageTitle } from "../Todo.utils";

describe("Todo Utils", () => {
  describe("onNavButtonPress", () => {
    test("navigates to Navigation screen passed", () => {
      const navigation = {
        navigate: jest.fn(),
      };
      const screen = "Test Screen";
      onNavButtonPress(navigation, screen);
      expect(navigation.navigate).toHaveBeenCalledWith(screen);
    });
  });
  describe("setTodoPageTitle", () => {
    test("calls setPageTitle if data is not null", () => {
      const navigation = {
        navigate: jest.fn(),
      };
      const setPageTitle = jest.fn();
      const mockData = {
        location: {
          title: "Test",
        },
      };

      setTodoPageTitle(mockData, setPageTitle)();
      expect(setPageTitle).toHaveBeenCalledTimes(1);
    });

    test("do nothing if data is null or undefined", () => {
      const setPageTitle = jest.fn();
      let mockData;

      setTodoPageTitle(mockData, setPageTitle)();
      expect(setPageTitle).toHaveBeenCalledTimes(0);
    });
  });
});
