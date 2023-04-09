import { type FC } from 'react'

import { CustomCheckBox } from '@/components/shared'
import { DeleteIcon, EditIcon } from '@/assets/icons'

import CustomButton from '@/components/shared/button/CustomButton'

const TodoItem: FC = () => {
  return (
    <div className="w-full flex justify-between items-center relative mt-2">
      <div className="inline-flex items-center justify-between">
        <CustomCheckBox />
        <p className="text-gray-900 break-all text-sm pr-2">
          Schedule a dinner withasdasdasdasdadsdadasdasdsadasd
        </p>
      </div>
      <div className="flex gap-1">
        <CustomButton>
          <EditIcon className="w-5 text-green-600" strokeWidth={1.7} />
        </CustomButton>
        <CustomButton>
          <DeleteIcon className="w-5 text-red-600" strokeWidth={1.7} />
        </CustomButton>
      </div>
    </div>
  )
}

export default TodoItem
