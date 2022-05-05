import { Component } from 'react'

import Header from './Header'
import List from './List'
import Footer from './Footer'

export default class TodoList extends Component {
  state = { list: [] }

  handleAdd = content => {
    const { list } = this.state
    const maxId = list.length ? Math.max(...list.map(item => item.id)) : 0
    list.unshift({ id: maxId + 1, content, done: false })
    this.setState({ list })
  }

  handleDone = id => {
    const { list } = this.state
    list.map(item => item.id === id && (item.done = !item.done))
    this.setState({ list })
  }

  handleSelectAll = bool => {
    const { list } = this.state
    list.map(item => (item.done = bool))
    this.setState({ list })
  }

  handleDelete = ids => {
    const { list } = this.state
    this.setState({ list: list.filter(item => !ids.includes(item.id)) })
  }

  componentDidMount() {
    const list = localStorage.getItem('todoList') || '[]'
    this.setState({ list: JSON.parse(list) })
  }

  componentDidUpdate() {
    const { list } = this.state
    if (list.length) {
      localStorage.setItem('todoList', JSON.stringify(list))
    } else {
      localStorage.removeItem('todoList')
    }
  }

  render() {
    const { list } = this.state

    return (
      <div className="font-sans text-slate-700 container max-w-screen-md mx-auto bg-gray-100 max-h-screen flex flex-col shadow-xl">
        <Header onAdd={this.handleAdd} />
        <List list={list} onDone={this.handleDone} onDelete={this.handleDelete} />
        <Footer list={list} onDelete={this.handleDelete} onSelectAll={this.handleSelectAll} />
      </div>
    )
  }
}
