export default function Header({ onAdd }) {
  const handleAdd = event => {
    // 回车键
    if (event.keyCode !== 13) return

    const value = event.target.value.trim()

    if (!value) return

    onAdd(value)

    event.target.value = ''
  }

  return (
    <div className="p-4 bg-slate-600 text-slate-200">
      <input className="input" type="text" placeholder="输入内容按回车来添加一个待办事项" onKeyUp={handleAdd} />
    </div>
  )
}
