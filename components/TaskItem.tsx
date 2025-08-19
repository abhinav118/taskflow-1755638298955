interface TaskItemProps {
  id?: any
  title?: any
  completed?: any
  priority?: any
  createdAt?: any
  completedAt?: any
}

export default function TaskItem({ id, title, completed, priority, createdAt, completedAt }: TaskItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      {/* TaskItem component content */}
    </div>
  )
}