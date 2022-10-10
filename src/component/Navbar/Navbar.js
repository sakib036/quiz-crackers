import React from 'react';

const Navbar = () => {
    return (
        <div>
             <div className="navbar bg-gray-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href='/'>Item 1</a></li>
        <li><a href='/'>Item 2</a></li>
        <li><a href='/'>Item 3</a></li>
        <li><a href='/'>Item 4</a></li>
      </ul>
    </div>
    <h1 className='ml-10 text-lg font-bold'>CATECHIZE GAME</h1>
  </div>
  <div className="navbar-end pr-20 hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><a href='/'>Item 1</a></li>
      <li><a href='/'>Item 2</a></li>
      <li><a href='/'>Item 3</a></li>    
      <li><a href='/'>Item 4</a></li>
    </ul>
  </div>
  
      </div>
        </div>
    );
};

export default Navbar;