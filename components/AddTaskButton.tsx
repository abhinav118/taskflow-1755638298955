interface AddTaskButtonProps {
  type?: any
  disabled?: any
}

export default function AddTaskButton({ type, disabled }: AddTaskButtonProps) {
  return (
    <div className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-colors">
      {/* AddTaskButton component content */}
    </div>
  )
}