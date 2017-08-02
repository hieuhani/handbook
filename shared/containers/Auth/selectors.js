import { Map } from 'immutable';
import { createSelector } from 'reselect';

const selectFlashDomain = () => state => state.get('flash');

const selectFlashError = () =>
  createSelector(selectFlashDomain(), subState => subState.get('error', Map()));

export { selectFlashError };
