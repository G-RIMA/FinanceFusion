import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
          <Nav>
            <Bars />

            <NavMenu>
                <NavLink to='/balancesheet' activeStyle>
                    Balance sheet
                </NavLink>
                <NavLink to='/incomestatement' activeStyle>
                    Income Statement
                </NavLink>
                <NavLink to='/cashflow' activeStyle>
                    Cash Flow Statement
                </NavLink>
                <NavLink to='/sign-up' activeStyle>
                    Sign Up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
          </Nav>
        </>
    );
};

export default Navbar;