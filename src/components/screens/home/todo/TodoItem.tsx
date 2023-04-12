import { type FC } from 'react'
import { useState } from 'react'

import { useTodos } from '@/hooks/useTodo'

import { CustomCheckBox, ConfirmAction } from '@/components/shared'
import { DeleteIcon, EditIcon } from '@/assets/icons'

import CustomButton from '@/components/shared/button/CustomButton'

interface TodoItemProps {
  id: string
  text: string
}

const TodoItem: FC<TodoItemProps> = ({ id, text }) => {
  const { deleteTodo } = useTodos()

  const [confirmAction, setConfirmAction] = useState<boolean>(false)

  const handleOpenConfirmAction = (): void => {
    setConfirmAction(!confirmAction)
  }

  return (
    <div className="w-full flex justify-between items-center relative mt-2">
      <div className="inline-flex items-center justify-between">
        <div className="relative">
          <CustomCheckBox id={id} color="blue" />
        </div>
        <p className="text-gray-900 break-all text-sm pr-2">{text}</p>
      </div>
      <div className="flex gap-1">
        <CustomButton>
          <EditIcon className="w-5 text-green-600" strokeWidth={1.7} />
        </CustomButton>
        <CustomButton onClick={handleOpenConfirmAction}>
          <DeleteIcon className="w-5 text-red-600" strokeWidth={1.7} />
          <ConfirmAction
            onAccept={() => {
              deleteTodo(id)
            }}
            open={confirmAction}
            handleOpen={handleOpenConfirmAction}
          />
        </CustomButton>
      </div>
    </div>
  )
}

export default TodoItem
