// src/components/Hello.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Hello from "./Hello";

test("renders Hello component with name", () => {
  render(<Hello name="World" />);
  expect(screen.getByText("Hello, World!")).toBeInTheDocument();
});
