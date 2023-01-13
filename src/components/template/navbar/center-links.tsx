/* eslint-disable @typescript-eslint/ban-types */

import { Nav } from 'react-bootstrap'
import { NavigationLink } from 'src/components/elements/NavigationLink'
import navigationPath from '../../../common/path/navigationPath'

export function CenterLinks() {
  return (
    <Nav activeKey={location.pathname} className="navbar-nav mx-auto mb-2 mb-lg-0">
      
      <NavigationLink className="nav-link" to={navigationPath.home}>
        Home
      </NavigationLink>     
      <NavigationLink className="nav-link" to={navigationPath.users.home}>
        Users
      </NavigationLink>    
    </Nav>
  )
}
