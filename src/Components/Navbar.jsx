import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

const Navbar = () => {
  
  const {state, dispatch} = useContextGlobal()

  const changeTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    dispatch({ type: newTheme, payload: newTheme });
  }

  return (
    <nav>
        <div >
          <Link to='/'>
            <h2 className="logo">DH Odonto Final</h2>
          </Link>
        </div>
        <div className="links">
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/favs'>Favs</Link>
          <button onClick={changeTheme} className="btn-theme">
            {state.theme === "dark" ? <p>☀️</p> : <p>🌙</p>}
          </button>
        </div>
    </nav>
  )
}

export default Navbar