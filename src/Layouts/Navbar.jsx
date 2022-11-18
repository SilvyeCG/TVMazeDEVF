import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand' to='/home'>
            Kenti Cinema
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarColor01'
            aria-controls='navbarColor01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarColor01'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <NavLink className='nav-link active' to='/home'>
                  Home
                  <span className='visually-hidden'>(current)</span>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/doc'>
                  Documentation
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
