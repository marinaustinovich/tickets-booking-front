import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { composeBuilder } from 'utils';
import { CommonSliceState, ModalPropsState } from './types';

const initialState: CommonSliceState = {
    modal: {
        isVisible: false,
        content: '',
        type: 'info'
    },
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setModalProps: (state, action: PayloadAction<ModalPropsState>) => {
            state.modal = action.payload;
        },
    },
    extraReducers: builder => composeBuilder(builder, []),
});

export const commonActions = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
