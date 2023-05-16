import React from "react";
import { render, screen } from "@testing-library/react";
import Notes from "./Notes";
import "@testing-library/jest-dom";

test("renders notes", () => {
    render(<Notes />);
    
    const newsElement = screen.getByText(/testing/i);
    expect(newsElement).toBeInTheDocument();
    }
);