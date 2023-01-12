import React, { useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useToggle } from 'src/hooks/useToggle'

type Props = {
  title: any
  body?: any
  actionButtons?: any
  triggerButton: React.ReactElement
  size?: 'sm' | 'lg' | 'xl' | undefined //undefined = md
  cancelButtonText?: string
  handleSubmit?: any
  isDone?: boolean
}

export function ModalElement(props: Props) {
  const { title, body, actionButtons, triggerButton, size, cancelButtonText = 'Cancel', isDone } = props
  const { isOpen, open, close } = useToggle()

  const trigger = React.cloneElement(triggerButton, {
    onClick: open
  })

  useEffect(() => {
    if (isDone) {
      close()
    }
  }, [isDone, close])

  return (
    <>
      {trigger}
      <Modal show={isOpen} onHide={close} size={size}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> {body && body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            {cancelButtonText}
          </Button>
          {actionButtons && actionButtons}
        </Modal.Footer>
      </Modal>
    </>
  )
}
