
import { fromJS } from 'immutable';
import synthReducer from '../reducer';

import {
  ADD_OSCILLATOR,
} from '../constants';

import { addOscillatorToState } from '../helpers';

const initialState = fromJS({
  patch: null,
  gain: 20,
  oscillatorsById: {},
  oscillators: [],
  filtersById: {},
  amplitudesById: {},
  envelopesById: {},
});

describe('synthReducer', () => {
  it('returns the state on default case', () => {
    expect(synthReducer(initialState, {})).toEqual(initialState);
  });

  it('adds an oscillator', () => {
    const oscillator = {
      oscillator: {
        id: '4345',
        mix: 75,
        filterId: '123',
        amplitudeId: '234',
      },
      filter: {
        id: '123',
        mix: 75,
        envelopeId: '456',
      },
      amplitude: {
        id: '234',
        mix: 75,
        envelopeId: '567',
      },
      filterEnv: {
        mix: 75,
        id: '456',
      },
      ampEnv: {
        mix: 75,
        id: '567',
      },
    };

    const action = {
      type: ADD_OSCILLATOR,
      payload: {
        oscillator,
      },
    };

    const expected = addOscillatorToState(initialState, oscillator);
    const actual = synthReducer(initialState, action);

    expect(actual).toEqual(expected);
  });
});
