import { siteData, navigation } from '@/lib/data'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">{siteData?.settings?.appName || 'TaskFlow'}</h1>
            <div className="flex space-x-6">
              <a key={index} href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Dashboard
              </a>
              <a key={index} href="/active" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Active Tasks
              </a>
              <a key={index} href="/completed" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Completed
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to TaskFlow</h1>
          <p className="text-xl opacity-90">Manage your tasks efficiently</p>
          <button className="mt-8 btn btn-primary bg-white text-blue-600 hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Contact Us</h2>
          <form className="space-y-6 bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                rows={4}
                
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">List View</h2>
        <div className="space-y-4">
          {siteData.tasks?.map((task: any, index: number) => (
            <div key={index} className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                  <p className="text-gray-600 mt-1">{task.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    task.status === 'completed' ? 'bg-green-100 text-green-800' :
                    task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {task.status}
                  </span>
                  <span className={`text-sm font-medium ${
                    task.priority === 'high' ? 'text-red-600' :
                    task.priority === 'medium' ? 'text-yellow-600' :
                    'text-green-600'
                  }`}>
                    {task.priority}
                  </span>
                </div>
              </div>
            </div>
          )) || []}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container text-center">
          <p>&copy; 2024 {siteData?.settings?.appName || 'TaskFlow'}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}