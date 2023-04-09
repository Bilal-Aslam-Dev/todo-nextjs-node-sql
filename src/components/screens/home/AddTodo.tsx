import { type FC, useState } from 'react'
import { AddIcon } from '@/assets/icons'

import CustomButton from '@/components/shared/button/CustomButton'

import { Popup } from '@/components/shared'

const AddTodo: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = (): void => {
    setOpen(!open)
  }

  return (
    <CustomButton onClick={handleOpen}>
      <Popup handleOpen={handleOpen} open={open}>
        asd
      </Popup>
      <div className="bg-[#97d9e1] bg-opacity-90 p-4 rounded-full">
        <AddIcon className="w-5 text-white" strokeWidth={3} />
      </div>
    </CustomButton>
  )
}

export default AddTodo
