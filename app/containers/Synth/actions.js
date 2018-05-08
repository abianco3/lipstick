/*
 *
 * Synth actions
 *
 */

import {
  ADD_OSCILLATOR,
  REMOVE_OSCILLATOR,
  UPDATE_PARAMETER,
} from './constants';

/**
* @description <description of method intent>
*
* @param {type} <name description>
* @return <description>
*/

export function updateParameterAction({ module, id, param, value }) {
  return {
    type: UPDATE_PARAMETER,
    payload: {
      module,
      id,
      param,
      value,
    },
  };
}

export function addOscillatorAction({ oscillator }) {
  return {
    type: ADD_OSCILLATOR,
    payload: {
      oscillator,
    },
  };
}

export function removeOscillatorAction({ id }) {
  return {
    type: REMOVE_OSCILLATOR,
    payload: {
      id,
    },
  };
}
