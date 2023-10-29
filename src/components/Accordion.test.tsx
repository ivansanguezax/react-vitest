import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";

describe("Accordion", () => {
  beforeEach(() => {
    render(
      <Accordion title="hola">
        <h3>Some title</h3>
        <p>Some content</p>
      </Accordion>
    );
  });

  test("should show the accordion component", () => {
    expect(screen.getByText("hola")).toBeDefined();
  });
  test("should show title", () => {
    expect(screen.getByText("hola")).toBeDefined();
  });
  test("should not show the content at the start", () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });
  test("should show the content when the button is clicked", () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    expect(screen.getByText(/content/i)).toBeDefined();
  });
  test("should hide the content when the button is clicked again", () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeNull();
  });
});
