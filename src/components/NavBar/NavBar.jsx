import React from 'react';

const Navbar = ({ pageName }) => {
    return (
        <>
        <nav>
            <div className="nav-wrapper">
                <a className=" J-MO" href="/">J-MO</a>
                    <h5 className="left page-name brand-logo">{pageName}</h5>
                <ul id="nav-mobile" className="right">
                    <li><a className="nav-link" href="/yourlife-profile">Profile</a></li>
                    <li><a className="nav-link-b" href="/yourlife/add">Share How Your Life Matter This Week</a></li>                  
                    {/* <li><a className="nav-link-b" href="/search">Search</a></li><i className="material-icons left small">search</i> */}
                </ul>
            </div>
        </nav>
    </>
    )
}

export default Navbar;