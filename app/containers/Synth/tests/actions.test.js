
import {
  addOscillatorAction,
  removeOscillatorAction,
  updateParameterAction,
} from '../actions';
import {
  ADD_OSCILLATOR,
  REMOVE_OSCILLATOR,
  UPDATE_PARAMETER,
} from '../constants';

describe('Synth actions', () => {
  describe('addOscillatorAction', () => {
    const type = ADD_OSCILLATOR;
    const oscillator = {};

    it('has a type of ADD_OSCILLATOR', () => {
      expect(addOscillatorAction({ oscillator }).type).toEqual(type);
    });

    it('has a passes the oscillator into the payload', () => {
      expect(addOscillatorAction({ oscillator }).payload).toEqual({ oscillator });
    });
  });
});

describe('Synth actions', () => {
  describe('removeOscillatorAction', () => {
    const type = REMOVE_OSCILLATOR;
    const id = 'adfe5g0';

    it('has a type of REMOVE_OSCILLATOR', () => {
      expect(removeOscillatorAction({ id }).type).toEqual(type);
    });

    it('has a passes the id into the payload', () => {
      expect(removeOscillatorAction({ id }).payload).toEqual({ id });
    });
  });
});

describe('Synth actions', () => {
  describe('updateParameterAction', () => {
    const type = UPDATE_PARAMETER;
    const payload = {
      id: 'fa3ecc2c',
      module: 'filter',
      param: 'cuttoff',
      value: 20,
    };

    it('has a type of REMOVE_OSCILLATOR', () => {
      expect(updateParameterAction(payload).type).toEqual(type);
    });

    it('passes in the payload', () => {
      expect(updateParameterAction(payload).payload).toEqual(payload);
    });
  });
});
