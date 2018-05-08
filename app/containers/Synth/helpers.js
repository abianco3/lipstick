/**
*
* Synth Helper Functions
*
*/

import uuid from 'uuid/v5';
const url = 'https://www.lipstick.io';

/**
* @description <description of method intent>
*
* @param {type} <name description>
* @return <description>
*/

export function initialEnv() {
  return {
    id: uuid(url, uuid.URL),
    mix: 75,
    attack: 75,
    decay: 75,
    sustain: 75,
    release: 75,
  };
}

export function initialFilter(envelopeId) {
  return {
    id: uuid(url, uuid.URL),
    cutoff: 75,
    resonance: 75,
    mix: 75,
    envelopeId,
  };
}

export function initialAmplitude(envelopeId) {
  return {
    id: uuid(url, uuid.URL),
    gain: 20,
    envelopeId,
  };
}

export function initialOscillator(filterId, amplitudeId) {
  return {
    id: uuid(url, uuid.URL),
    mix: 75,
    waveForm: 'sine',
    filterId,
    amplitudeId,
  };
}


export function createOscillator() {
  const filterEnv = initialEnv();
  const ampEnv = initialEnv();
  const filter = initialFilter(filterEnv.id);
  const amplitude = initialAmplitude(ampEnv.id);
  const oscillator = initialOscillator(filter.id, amplitude.id);

  return {
    oscillator,
    amplitude,
    filter,
    filterEnv,
    ampEnv,
  };
}

export function addOscillatorToState(state, osc) {
  const {
    oscillator,
    amplitude,
    filter,
    filterEnv,
    ampEnv,
  } = osc;

  return state
    .updateIn(['oscillatorsById'], (oscillators) => oscillators.set(oscillator.id, oscillator))
    .updateIn(['oscillators'], (oscillators) => oscillators.push(oscillator.id))
    .updateIn(['filtersById'], (filters) => filters.set(filter.id, filter))
    .updateIn(['amplitudesById'], (amplitudes) => amplitudes.set(amplitude.id, amplitude))
    .updateIn(['envelopesById'], (envelopes) => envelopes.set(filterEnv.id, filterEnv).set(ampEnv.id, ampEnv));
}
