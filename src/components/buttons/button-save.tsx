import { Button } from './button'

export function ButtonSave(props: any) {
  return <Button {...props} />
}

ButtonSave.defaultProps = {
  className: 'btn btn-success',
  label: 'Save'
}
