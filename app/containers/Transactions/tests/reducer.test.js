import expect from 'expect';
import transactionsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('transactionsReducer', () => {
  it('returns the initial state', () => {
    expect(transactionsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
