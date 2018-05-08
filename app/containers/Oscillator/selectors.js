import { createSelector } from 'reselect';

/**
 * Direct selector to the oscillator state domain
 */
const selectOscillatorDomain = (state) => state.getIn(['synth', 'oscillatorsById']);

/**
* @description <description of method intent>
*
* @param {type} <name description>
* @return <description>
*/

const makeSelectOscillator = () => createSelector(
  selectOscillatorDomain,
  (substate) => substate.toJS()
);

export default makeSelectOscillator;
export {
  selectOscillatorDomain,
};
