import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CounterSchema } from 'entities/Counter';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(counterReducer(state.counter as CounterSchema, counterActions.decrement()))
            .toEqual({ value: 9 });
    });

    test('increment', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(counterReducer(state.counter as CounterSchema, counterActions.increment()))
            .toEqual({ value: 11 });
    });

    test('works with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment()))
            .toEqual({ value: 1 });
    });
});
