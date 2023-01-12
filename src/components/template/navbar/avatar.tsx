/* eslint-disable @typescript-eslint/ban-types */

import navigationPath from '../../../common/path/navigationPath'


export function Avatar() {
  return (
    <div className="dropdown">
      <a
        className="dropdown-toggle d-flex align-items-center hidden-arrow"
        href="#"
        id="navbarDropdownMenuAvatar"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi-gear-fill" style={{ fontSize: '20px' }} />
      </a>
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
        <li>
          <a className="dropdown-item" href={navigationPath.settings.home.resolve()}>
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href={navigationPath.auth.logout.resolve()}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  )
}
