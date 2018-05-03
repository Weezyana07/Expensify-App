import React from 'react';
import { Link, } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../action/auth';


export const Header = (props) => ( //({ startLogout }).. destructured props
    <header className='header'>
      <div className='content-container'>
        <div className='header__content'>
          <Link className='header__title' to='/dashboard'> 
            <h1>Expensify</h1>
          </Link>
          <button className='button button--link' onClick={props.startLogout}>Logout</button>
        </div>
      </div>
    </header>
  );

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

// <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
