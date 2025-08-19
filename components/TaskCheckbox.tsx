interface TaskCheckboxProps {
  type?: any
  checked?: any
  onChange?: any
}

export default function TaskCheckbox({ type, checked, onChange }: TaskCheckboxProps) {
  return (
    <div className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500">
      {/* TaskCheckbox component content */}
    </div>
  )
}