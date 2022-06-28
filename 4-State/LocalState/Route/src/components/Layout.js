import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <ul className='nav'>
            <li className='nav-item'>
                <Link to = 'home' className='nav-link active' aria-current = 'page' >Home</Link>
            </li>
            <li className='nav-item'>
                <Link to = 'about' className='nav-link'>Biz Kimiz</Link>
            </li>
            <li className='nav-item'>
                <Link to = 'contacts' className='nav-link' href = '#'>Bize Ulaşın</Link>
            </li>

        </ul>
    </div>
  )
}
