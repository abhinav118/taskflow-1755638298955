interface TaskCounterProps {
  total?: any
  completed?: any
  active?: any
}

export default function TaskCounter({ total, completed, active }: TaskCounterProps) {
  return (
    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
      {/* TaskCounter component content */}
    </div>
  )
}