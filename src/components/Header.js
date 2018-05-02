import React from 'react';
import { NavLink, } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../action/auth';


export const Header = (props) => ( //({ startLogout }).. destructured props
    <header>
      <h1>Expensify</h1>
      <NavLink to='/' activeClassName='is-active' exact={true}>dashboard</NavLink>
      <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
      <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
      <button onClick={props.startLogout}>Logout</button>
    </header>
  );

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);