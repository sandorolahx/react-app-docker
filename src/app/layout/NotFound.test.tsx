import React from "react";
import { render, screen } from '@testing-library/react';
import NotFound from "./NotFound";

describe('Not found page test', () => {
    test('first test', () => {
        const a = 1 + 2;
        expect(a).toBe(3);
    });

    test('not found page description test', () => {
        render(<NotFound />);
        const element = screen.getByText(/Page not found/i);
        expect(element).toBeInTheDocument();
    });
});
