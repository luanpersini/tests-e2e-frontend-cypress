import { Button } from './button'

export function ButtonUpdate(props: any) {
  return <Button {...props} />
}

ButtonUpdate.defaultProps = {
  className: 'btn btn-primary',
  label: 'Update'
}
