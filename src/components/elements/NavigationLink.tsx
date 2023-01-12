import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  background-color: inherit;
  color: inherit;
  text-decoration: inherit;
  border: inherit;
`

//This function replaces the "useNavigation" function and should be used moving forward
export function NavigationLink(props: any) {
  return <StyledLink {...props} />
}
