import React from 'react'

const Header = () => {
  return (
    <div className='header' id='header'>
      <a href='#hero' className='logo-text'>
        <span className='tag-open'>&lt;</span> Vaishak
        <span className='tag-close'>/&gt;</span>
      </a>
      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <li>
            {/* <a href='#about' className='main-nav-link'>
              About
            </a> */}
          </li>
          <li>
            <a href='#skills' className='main-nav-link'>
              Skills
            </a>
          </li>
          <li>
            <a href='#projects' className='main-nav-link'>
              Projects
            </a>
          </li>
          <li>
            <a href='#work' className='main-nav-link'>
              Work
            </a>
          </li>
          <li>
            <a href='#contact' className='main-nav-link'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
