/*
 *
 * Synth reducer
 *
 */

import initialState from './initialState';

import {
  ADD_OSCILLATOR,
  UPDATE_PARAMETER,
} from './constants';

import { addOscillatorToState } from './helpers';

function synthReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_OSCILLATOR: {
      const { oscillator } = payload;
      return addOscillatorToState(state, oscillator);
    }
    case UPDATE_PARAMETER: {
      const {
        module,
        value,
        param,
        id,
      } = payload;
      return state
        .updateIn([module, id, param], value);
    }
    default:
      return state;
  }
}

export default synthReducer;
