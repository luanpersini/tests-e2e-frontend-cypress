import { ButtonDanger } from './button-danger'

export function ButtonDelete(props: any) {
  return <ButtonDanger {...props} />
}

ButtonDelete.defaultProps = {
  className: 'btn btn-danger'
}
