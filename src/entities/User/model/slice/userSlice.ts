import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initalState: UserSchema = {
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initalState,
    reducers: {

    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
