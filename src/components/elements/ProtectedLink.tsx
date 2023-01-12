import { Link, LinkProps } from 'react-router-dom'

interface Props extends LinkProps {
  children: React.ReactNode
  to: string
}
//This function replaces the "useNavigation" function and should be used moving forward
export function ProtectedLink(props: any) {
  return <Link {...props}>{props.children}</Link>
}
