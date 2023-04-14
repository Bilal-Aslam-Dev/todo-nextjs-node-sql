import { type FC, useEffect } from 'react'

import { useTodos } from '@/hooks/useTodo'

import TodoItem from './todo/TodoItem'
import AddTodo from './todo/AddTodo'

import { ListIcon, Loader } from '@/assets/icons'

const HomeScreen: FC = () => {
  const { todos, loading, fetchTodos } = useTodos()

  useEffect(() => {
    fetchTodos()
  }, [])
  return (
    <>
      <div className="home-gradient px-3 max-h-screen w-screen flex flex-col items-center">
        <h1 className="text-center text-2xl underline-offset-1 underline font-semibold text-[#b787c7] select-none mb-10 mt-5">
          My Todos.
        </h1>
        <div className="w-full max-w-[500px] relative rounded-lg shadow-xl pt-4 px-3.5 pb-14 bg-white">
          <div className="w-full flex justify-between items-center pl-10 border-b border-gray-300 pb-3">
            <ListIcon className="w-10 stroke-[#b281c5]" strokeWidth="1.8" />

            {Boolean(loading) && (
              <Loader className="animate-spin -ml-1 h-5 w-5 text-blue-200 mx-auto flex justify-end mr-10" />
            )}
          </div>
          <div
            style={{ scrollbarWidth: 'thin' }}
            className="all-todos mt-7 max-h-screen overflow-y-scroll"
          >
            {todos.map((i: Record<string, number & string>) => {
              return (
                <TodoItem
                  status={i.status}
                  text={i.text}
                  key={String(i)}
                  id={i.id}
                />
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
