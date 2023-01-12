import { ModalElement } from './ModalElement'

type Props = {
  actionButton: React.ReactElement
  triggerButton: React.ReactElement
  title: string
  message: string
  warningMessage?: string
  isDone?: boolean
}

export function ConfirmationModal(props: Props) {
  const { actionButton, triggerButton, title, message, warningMessage: warning } = props
  return (
    <>
      <ModalElement
        {...props}
        title={title}
        actionButtons={actionButton}
        body={
          <>
            {warning && (
              <p style={{ textAlign: 'center' }} className="alert alert-danger">
                {warning}
              </p>
            )}
            <p style={{ textAlign: 'center' }}>{message}</p>
          </>
        }
        triggerButton={triggerButton}
      />
    </>
  )
}
