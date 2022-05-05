import { Component } from 'react'

export default class List extends Component {
  render() {
    const { list, onDone, onDelete } = this.props

    return (
      <>
        {list.length ? (
          <ul className="p-4 flex-1" style={{ overflowY: 'auto' }}>
            {list.map(item => (
              <li className="todo-item flex items-center border p-3 -mb-px hover:bg-slate-200" key={item.id}>
                <input type="checkbox" checked={item.done} onChange={() => onDone(item.id)} />
                <div className="flex-1 mx-2">{item.content}</div>
                <button className="btn" onClick={() => onDelete([item.id])}>
                  删除
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center p-5">暂无待办事项</div>
        )}
      </>
    )
  }
}
