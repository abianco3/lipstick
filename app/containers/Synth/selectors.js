import { createSelector } from 'reselect';

/**
 * Direct selector to the synth state domain
 */
const selectSynthDomain = (state) => state.get('synth');

/**
* @description <description of method intent>
*
* @param {type} <name description>
* @return <description>
*/

const makeSelectOscillators = () => createSelector(
  selectSynthDomain,
  (substate) => substate.get('oscillators').toJS()
);

const makeSelectGain = () => createSelector(
  selectSynthDomain,
  (substate) => substate.get('gain')
);

const makeSelectPatch = () => createSelector(
  selectSynthDomain,
  (substate) => substate.get('patch')
);

export {
  selectSynthDomain,
  makeSelectPatch,
  makeSelectGain,
  makeSelectOscillators,
};
