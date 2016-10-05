import { createSelector } from 'reselect';

/**
 * Direct selector to the balanceContainer state domain
 */
const selectBalanceContainerDomain = () => (state) => state.get('balanceContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BalanceContainer
 */

const selectBalanceContainer = () => createSelector(
  selectBalanceContainerDomain(),
  (substate) => substate.toJS()
);

export default selectBalanceContainer;
export {
  selectBalanceContainerDomain,
};
