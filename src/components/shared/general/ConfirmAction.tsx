import type { FC } from 'react'

import Popup from './Popup'

import { TickIcon, CloseIcon } from '@/assets/icons'

interface ConfirmActionProps {
  open: boolean
  handleOpen: () => void
}

const ConfirmAction: FC<ConfirmActionProps> = ({ open, handleOpen }) => {
  return (
    <Popup
      size={'max-w-[90%] sm:max-w-[340px] min-w-0'}
      handleOpen={handleOpen}
      open={open}
    >
      <p>Are you sure you want to delete this todo?</p>
      <div className="flex items-center border-t mt-1.5">
        <div className="w-6/12 bg-red-200 bg-opacity-30 hover:bg-opacity-50 transition-all rounded-l h-full py-3">
          <CloseIcon className="w-5 mx-auto" strokeWidth={2} />
        </div>
        <div className="w-6/12  bg-green-200 bg-opacity-30 hover:bg-opacity-50 transition-all rounded-r h-full py-3">
          <TickIcon className="w-5 mx-auto" strokeWidth={2} />
        </div>
      </div>
    </Popup>
  )
}

export default ConfirmAction
