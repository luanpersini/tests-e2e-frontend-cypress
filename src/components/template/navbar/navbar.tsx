import React from 'react'
import { Link } from 'react-router-dom'
import navigationPath from '../../../common/path/navigationPath'

//import path from '../../../common/path/path'
import AuthenticationService from '../../../services/AuthenticationService'
import { Avatar } from './avatar'
import { CenterLinks } from './center-links'
import { NavContainer } from './navbar.style'
import { ToggleButton } from './toggle-button'

export const NavBar: React.FC = () => {
  const isUserLogedIn = AuthenticationService.validateCredentials()

  return (
    <NavContainer>
      <div className="navbar navbar-expand-lg navbar-light bg-light py-1">
        <div className="container-fluid d-flex justify-content-between">
          {/*<!-- Toggle button -->*/}
          <ToggleButton />

          {/*<!-- Navbar brand -->*/}
          <Link className="navbar-brand m-0 ms-auto" to={navigationPath.home.resolve()}>
            Persini Cypress
          </Link>

          <div className="collapse me-lg-5 navbar-collapse">{isUserLogedIn && <CenterLinks />}</div>

          {/*<!-- Right elements -->*/}
          <div className="right-elements ms-auto me-2">
            {!isUserLogedIn && (
              <span>
                <a href={navigationPath.auth.login}>Login</a> / <a href={navigationPath.auth.signup}>Sign up</a>
              </span>
            )}

            {isUserLogedIn && <Avatar />}
          </div>
        </div>
      </div>

      {/*<!-- Visible on small screens -->*/}
      <div className="collapse me-lg-4 navbar-collapse navbar-light bg-light d-lg-none" id="navbarExternalLinks">
        <CenterLinks />
      </div>
    </NavContainer>
  )
}
