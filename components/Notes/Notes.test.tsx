import React from "react";
import { render, screen } from "@testing-library/react";
import Notes from "./Notes";
import "@testing-library/jest-dom";

test("renders notes", () => {
    render(<Notes />);
    
    //check  the img name to be Application Logo
    const newsElement = screen.getByText(/testing/i);
    expect(newsElement).toBeInTheDocument();
    }
);