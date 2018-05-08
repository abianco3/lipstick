import { fromJS } from 'immutable';
import {
  selectSynthDomain,
  makeSelectOscillators,
  makeSelectGain,
  makeSelectPatch,
} from '../selectors';

const state = fromJS({
  synth: {
    patch: 'someId',
    gain: 75,
    oscillators: ['osc1Id', 'osc2Id'],
  },
});

describe('selectSynthDomain', () => {
  it('should select the synth domain', () => {
    const expected = state.get('synth');
    const actual = selectSynthDomain(state);
    expect(actual).toEqual(expected);
  });
});

describe('makeSelectGain', () => {
  it('should select the gain', () => {
    const selector = makeSelectGain();
    const expected = state.getIn(['synth', 'gain']);
    const actual = selector(state);
    expect(actual).toEqual(expected);
  });
});

describe('makeSelectPatch', () => {
  it('should select the patch', () => {
    const selector = makeSelectPatch();
    const expected = state.getIn(['synth', 'patch']);
    const actual = selector(state);
    expect(actual).toEqual(expected);
  });
});

describe('selectSynthDomain', () => {
  it('should select the oscillators', () => {
    const selector = makeSelectOscillators();
    const expected = state.getIn(['synth', 'oscillators']).toJS();
    const actual = selector(state);
    expect(actual).toEqual(expected);
  });
});
