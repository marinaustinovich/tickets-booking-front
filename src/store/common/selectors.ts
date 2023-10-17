import { AppState } from 'store';
import { createSelector } from 'reselect';

const CommonSelector = (state: AppState) => state.common;

const fetchModalDataSelector = (state: AppState) => CommonSelector(state).modal;
export const modalSelector = createSelector([fetchModalDataSelector], modalData => modalData ?? {});
