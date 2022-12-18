import { Backdrop, MobileNav, Transition } from "@/components/NavBar/MobileNav";
import { DesktopNavLink, MobileNavLink } from "@/components/NavBar/NavLink";
import { Button } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

describe("Mobile navigation bar check rendering", () => {
  test("Backdrop test", () => {
    const component = renderer.create(<Backdrop />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Transition test", () => {
    const component = renderer.create(<Transition />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Full mobile navigation test", () => {
    const component = renderer.create(<MobileNav />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Backdrop hide", () => {
    const box = renderer.create(<Backdrop />).toTree()?.rendered.props.children
      .props.animate;
    expect(box).toBe("hide");
  });
  test("Backdrop show", () => {
    const box = renderer.create(<Backdrop show />).toTree()?.rendered.props
      .children.props.animate;
    expect(box).toBe("show");
  });
});

describe("Desktop navigation test", () => {
  test("DesktopNavLinku test", () => {
    const component = renderer.create(<DesktopNavLink />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("DesktopNavLink show", () => {
    const box = renderer.create(<DesktopNavLink active />).toTree()?.rendered;
    const props = box[1].props["aria-current"];
    expect(props).toBe("page");
  });
  test("DesktopNavLink show", () => {
    const box = renderer.create(<DesktopNavLink />).toTree()?.rendered;
    const props = box[1].props["aria-current"];
    expect(props).toBe(undefined);
  });
  test("MobileNavLink test", () => {
    const mockFn = jest.fn();
    const component = renderer.create(
      <MobileNavLink icon="abbr">
        <Button onClick={mockFn}>test</Button>
      </MobileNavLink>
    );
    screen;
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("MobileNavLink with mocked button test", async () => {
    const mockFn = jest.fn();
    const component = render(
      <MobileNavLink icon="abbr">
        <Button onClick={mockFn}>test</Button>
      </MobileNavLink>
    );
    const btn = await screen.findByRole("button");
    btn.click();
    expect(mockFn.mock.calls.length).toBe(1);
  });
});
