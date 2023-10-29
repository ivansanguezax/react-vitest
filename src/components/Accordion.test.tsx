import { render, screen } from "@testing-library/react";
import Accordion from "./Accordion";

describe("Accordion", () => {
  test("should add two numbers", () => {
    render(
      <Accordion title="hola">
        <h3>My content</h3>
        <p>Some content</p>
      </Accordion>
    );
    expect(screen.getByText('hola')).toBeDefined();
  });
});
