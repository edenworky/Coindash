import { createSelector } from 'reselect';

/**
 * Direct selector to the balancesContainer state domain
 */
const selectBalancesContainerDomain = () => (state) => state.get('balancesContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BalancesContainer
 */

const selectBalancesContainer = () => createSelector(
  selectBalancesContainerDomain(),
  (substate) => substate.toJS()
);

export default selectBalancesContainer;
export {
  selectBalancesContainerDomain,
};
