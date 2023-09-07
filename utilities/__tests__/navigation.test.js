import { setPageTitle } from "../navigation";

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
