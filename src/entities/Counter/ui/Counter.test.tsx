import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender';
import { userEvent } from '@storybook/test';
import { Counter } from './Counter';

describe('Counter', () => {
    test('test render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const button = screen.getByTestId('increment-btn');
        fireEvent.click(button);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const button = screen.getByTestId('decrement-btn');
        fireEvent.click(button);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
