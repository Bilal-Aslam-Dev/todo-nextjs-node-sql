import type { FC, ReactNode } from 'react'
import { Button } from '@material-tailwind/react'

interface ButtonType {
  children: ReactNode
}

const CustomButton: FC<ButtonType> = ({ children }) => {
  return (
    <Button className="bg-transparent shadow-none p-2 hover:shadow-none hover:bg-gray-300 hover:bg-opacity-60 rounded-full">
      {children}
    </Button>
  )
}

export default CustomButton
