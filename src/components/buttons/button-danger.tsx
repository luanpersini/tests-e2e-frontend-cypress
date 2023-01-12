import { Button } from './button'

export function ButtonDanger(props: any) {
  return <Button {...props} />
}

ButtonDanger.defaultProps = {
  className: 'btn btn-danger'
}
