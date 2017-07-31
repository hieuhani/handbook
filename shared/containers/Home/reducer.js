import { fromJS } from 'immutable';

const initialState = fromJS({});

function homeReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}

export default homeReducer;
