import { type FC, useEffect } from 'react'

import { useTodos } from '@/hooks/useTodo'

import TodoItem from './todo/TodoItem'
import AddTodo from './todo/AddTodo'

import { ListIcon } from '@/assets/icons'

const HomeScreen: FC = () => {
  const { todos, fetchTodosData } = useTodos()

  useEffect(() => {
    fetchTodosData()
  }, [])
  return (
    <>
      <div className="home-gradient px-3 h-screen w-screen flex flex-col items-center">
        <h1 className="text-center text-2xl underline-offset-1 underline font-semibold text-[#b787c7] select-none mb-10 mt-5">
          My Todos.
        </h1>
        <div className="w-full max-w-[500px] relative rounded-lg shadow-xl pt-4 px-3.5 pb-14 bg-white">
          <div className="w-full pl-10 border-b border-gray-300 pb-3">
            <ListIcon className="w-10 stroke-[#b281c5]" strokeWidth="1.8" />
          </div>
          <div className="all-todos mt-7">
            {todos.map((i: Record<string, any>) => {
              return (
                <TodoItem text={i.text} key={JSON.stringify(i)} id={i.id} />
              )
            })}
          </div>
          <div className="absolute right-[50%] translate-x-[50%] -bottom-8">
            <AddTodo />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
