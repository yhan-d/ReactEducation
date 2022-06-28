import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <ul className='nav'>
            <li className='nav-item'>
                <Link to = 'books' className='nav-link active' aria-current = 'page' >Home</Link>
            </li>

        </ul>
    </div>
  )
}
