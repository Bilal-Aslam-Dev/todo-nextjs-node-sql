import type { FC, ReactNode } from 'react'

import { Dialog, DialogBody } from '@material-tailwind/react'

interface PopupTypes {
  open: boolean
  handleOpen: () => void
  children: ReactNode
}

const Popup: FC<PopupTypes> = ({ open, handleOpen, children }) => {
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>{children}</DialogBody>
      </Dialog>
    </>
  )
}

export default Popup
