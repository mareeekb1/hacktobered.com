import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PresentationBox from "../components/common/PresentationBox";
import renderer from "react-test-renderer";

describe("Check correct rendering of components", () => {
  test("Render whole PresentationBox component", () => {
    const box = render(<PresentationBox />);
    expect(box).toBeTruthy();
  });
  test("Render IMG BOX 1", async () => {
    const box = await render(<PresentationBox />).findByTestId("imgBox1");
    expect(box).toBeTruthy();
  });
  test("Has compoennt TEXT BOX 1", async () => {
    const box = await render(<PresentationBox />).findByTestId("textBox1");
    expect(box).toBeTruthy();
  });
  test("Has compoennt TEXT BOX 2", async () => {
    const box = await render(<PresentationBox />).findByTestId("textBox2");
    expect(box).toBeTruthy();
  });
  test("Has compoennt TEXT BOX 3", async () => {
    const box = await render(<PresentationBox />).findByTestId("textBox3");
    expect(box).toBeTruthy();
  });
  test("Render BUTTON section", async () => {
    const box = await render(<PresentationBox />).findByTestId("buttonSection");
    expect(box).toBeTruthy();
  });
});
describe("Match snapshot of PresentationBox", () => {
  const component = renderer.create(<PresentationBox />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Button funcionality", () => {
  const { container } = render(<PresentationBox />);
  const buttonAsLink = screen.getByTestId("button");
  expect(buttonAsLink).toHaveAttribute("href", "/profile");
  it("Should trigger click event", async () => {
    await buttonAsLink.click();
    expect(container.firstChild).toMatchSnapshot();
  });
});
