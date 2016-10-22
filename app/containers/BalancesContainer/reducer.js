/*
 *
 * BalancesContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({});

function balancesContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default balancesContainerReducer;
