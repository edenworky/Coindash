/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import TopNav from 'components/TopNav';
import SideNav from 'components/SideNav';

import styles from './styles.css';

const App = React.createClass({ // eslint-disable-line react/prefer-stateless-function
  propTypes: {
    children: React.PropTypes.node,
  },

  render() {
    return (
      <div className={styles.rootContainer}>
        <TopNav />
        <div className={styles.innerContainer}>
          <SideNav />
          <div className={styles.appContainer}>
            {React.Children.toArray(this.props.children)}
          </div>
        </div>
      </div>
    );
  }
});

export default App;
