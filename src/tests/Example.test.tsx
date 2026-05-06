import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("Example Test", () => {
  it("should render correctly", () => {
    render(<div data-testid="test-element">Hello Door2fy</div>);
    const element = screen.getByTestId("test-element");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Hello Door2fy");
  });
});
