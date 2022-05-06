import { useEffect, useState } from 'react'

import Header from './Header'
import List from './List'
import Footer from './Footer'

export default function TodoList() {
  const [list, setList] = useState([])

  const handleAdd = content => {
    const maxId = list.length ? Math.max(...list.map(item => item.id)) : 0
    setList([{ id: maxId + 1, content, done: false }, ...list])
  }

  const handleDone = id => {
    list.map(item => item.id === id && (item.done = !item.done))
    setList([...list])
  }

  const handleSelectAll = bool => {
    list.map(item => (item.done = bool))
    setList([...list])
  }

  const handleDelete = ids => setList(list.filter(item => !ids.includes(item.id)))

  useEffect(() => {
    const localList = localStorage.getItem('todoList') || '[]'
    setList(JSON.parse(localList))
  }, [])

  useEffect(() => {
    if (list.length) {
      localStorage.setItem('todoList', JSON.stringify(list))
    } else {
      localStorage.removeItem('todoList')
    }
  }, [list])

  return (
    <div className="font-sans text-slate-700 container max-w-screen-md mx-auto bg-gray-100 max-h-screen flex flex-col shadow-xl">
      <Header onAdd={handleAdd} />
      <List list={list} onDone={handleDone} onDelete={handleDelete} />
      <Footer list={list} onDelete={handleDelete} onSelectAll={handleSelectAll} />
    </div>
  )
}
