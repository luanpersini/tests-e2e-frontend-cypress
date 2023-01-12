import { Button } from './button'

export function ButtonEdit(props: any) {
  return <Button {...props} />
}

ButtonEdit.defaultProps = {
  className: 'btn btn-primary',
  label: 'Edit'
}
