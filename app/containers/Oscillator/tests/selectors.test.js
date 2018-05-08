import { fromJS } from 'immutable';
import { selectOscillatorDomain } from '../selectors';

const state = fromJS({
  synth: {
    oscillatorsById: {
      0: {
        id: 0,
        filterId: 0,
        amplitudeId: 0,
        mix: 75,
        waveForm: 'sine',
      },
      1: {
        id: 1,
        filterId: 1,
        amplitudeId: 1,
        mix: 75,
        waveForm: 'sine',
      },
    },
  },
});

describe('selectOscillatorDomain', () => {
  it('should return the oscillator at the correct index', () => {
    const actual = selectOscillatorDomain(state);
    const expected = state.getIn(['synth', 'oscillatorsById']);
    expect(actual).toEqual(expected);
  });
});
