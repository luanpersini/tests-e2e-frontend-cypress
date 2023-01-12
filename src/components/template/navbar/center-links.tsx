/* eslint-disable @typescript-eslint/ban-types */

import { Dropdown, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ProtectedLink } from 'src/components/elements/ProtectedLink'
import { detectIdentifier } from '../../../common/path/detectIdentifier'
import navigationPath from '../../../common/path/navigationPath'

export function CenterLinks() {
  if (!detectIdentifier())
    //TODO implement workflow when the association could not be identified
    return <></>

  return (
    <Nav activeKey={location.pathname} className="navbar-nav mx-auto mb-2 mb-lg-0">
      <ProtectedLink className="nav-link" to={navigationPath.tasks.home.resolve()}>
        Tasks
      </ProtectedLink>

      <ProtectedLink className="nav-link" to={navigationPath.projects.home.resolve()}>
        Projects
      </ProtectedLink>

      <NavDropdown title={<span>People</span>}>
        <ProtectedLink className="dropdown-item" to={navigationPath.people.home.resolve()}>
          View Teammates
        </ProtectedLink>
        <ProtectedLink className="dropdown-item" to={navigationPath.people.invite.resolve()}>
          Invite Teammate
        </ProtectedLink>
        <NavDropdown.Divider />
        <Dropdown.Header>Invitations</Dropdown.Header>
        <Link className="dropdown-item" to={navigationPath.settings.receivedInvitations.resolve()}>
          Received
        </Link>
        <ProtectedLink className="dropdown-item" to={navigationPath.people.sentInvitations.resolve()}>
          Sent
        </ProtectedLink>
      </NavDropdown>
    </Nav>
  )
}
