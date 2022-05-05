import { Component } from 'react'

export default class Footer extends Component {
  render() {
    const { list, onSelectAll, onDelete } = this.props
    const listLength = list.length
    const doneLength = list.filter(item => item.done).length

    return (
      <div className="flex items-center py-4 px-7  border-t-2">
        <input type="checkbox" checked={listLength && listLength === doneLength} disabled={!listLength} onChange={() => onSelectAll(listLength && listLength !== doneLength)} />
        <div className="flex-1 mx-2">
          已完成 {list.filter(item => item.done).length} / 全部 {list.length}
        </div>
        {list.filter(item => item.done).length ? (
          <button className="btn" onClick={() => onDelete(list.filter(item => item.done).map(item => item.id))}>
            清除已完成任务
          </button>
        ) : (
          <></>
        )}
      </div>
    )
  }
}
