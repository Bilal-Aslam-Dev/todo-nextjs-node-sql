import { type FC, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { getAllTodos } from '@/store/actions/todo/getAllTodoAction'

import { ListIcon } from '@/assets/icons'

import TodoItem from './todo/TodoItem'
import AddTodo from './todo/AddTodo'

import { type RootState, type TodosState } from '@/types/todoTypes'

const HomeScreen: FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos ?? [])

  const loading = useSelector(
    (state: { todos: any; todo: TodosState }) => state.todos.loading
  )
  const dispatch = useDispatch()

  console.log(loading, todos)

  useEffect(() => {
    dispatch(getAllTodos())
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
            <TodoItem id="1" />
            <TodoItem id="2" />
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
