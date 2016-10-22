import expect from 'expect';
import balancesContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('balancesContainerReducer', () => {
  it('returns the initial state', () => {
    expect(balancesContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
