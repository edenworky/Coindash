import expect from 'expect';
import balanceContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('balanceContainerReducer', () => {
  it('returns the initial state', () => {
    expect(balanceContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
