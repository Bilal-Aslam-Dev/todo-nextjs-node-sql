import type { FC, ReactNode } from 'react'
import { Button } from '@material-tailwind/react'

interface ButtonType {
  children: ReactNode
  onClick?: () => void
  className?: string | null
}

const CustomButton: FC<ButtonType> = ({ children, onClick, className }) => {
  return (
    <Button
      onClick={onClick}
      className={`bg-transparent shadow-none p-2 hover:shadow-none hover:bg-gray-300 hover:bg-opacity-40 rounded-full ${
        className ?? ''
      }`}
    >
      {children}
    </Button>
  )
}

export default CustomButton
