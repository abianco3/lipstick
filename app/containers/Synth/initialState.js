import { fromJS } from 'immutable';

import { createOscillator, addOscillatorToState } from './helpers';

const osc1 = createOscillator();
const osc2 = createOscillator();

const initialSynth = fromJS({
  patch: null,
  gain: 20,
  oscillatorsById: {},
  oscillators: [],
  filtersById: {},
  amplitudesById: {},
  envelopesById: {},
});

export default addOscillatorToState(
  addOscillatorToState(initialSynth, osc1),
  osc2
);
