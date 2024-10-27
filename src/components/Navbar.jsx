// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-green-400 border-spacing-0 h-10">
      <div className="font-semibold  flex align-middle justify-between">
        <Link to='/home'>
        <h1 className='m-2 font-serif text-green-300 text-xl'>ResearchDoker</h1>
        </Link>
        <ul className='flex space-x-5 text-green-300 text-xl m-2' >
          <li><Link to='/input'>Generate session</Link></li>
          <li><Link to='/scrapper'>Scrapper</Link></li>
        </ul>
        <ul className='flex space-x-5 text-slate-900 text-xl m-2' >
          <li>Sign in</li>
          <li>sign up</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
