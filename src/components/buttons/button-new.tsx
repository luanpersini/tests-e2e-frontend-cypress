import { Button } from './button'

export function ButtonNew(props: any) {
  return <Button {...props} />
}

ButtonNew.defaultProps = {
  className: 'btn btn-success btn-sm',
  label: 'New'
}
