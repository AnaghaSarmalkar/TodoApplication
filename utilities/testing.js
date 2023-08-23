import ShallowRenderer from "react-test-renderer/shallow";

/**
 * Creates a shallow rendered string representation of a given react component
 *
 * @param {any} component - A React component to be snapshotted ex: <Text>Hello World<Text/>
 *
 * @returns {string} A shallow rendered string representation of the React component
 */
export function shallow(component) {
  const renderer = new ShallowRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}
