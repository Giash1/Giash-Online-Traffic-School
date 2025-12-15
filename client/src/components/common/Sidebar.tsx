
import { Home, Brain, BookOpen, SignpostBig, FileCheck, Trophy, BarChart3, X } from 'lucide-react'

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
  isDarkMode?: boolean
}

export default function Sidebar({ isOpen = true, onClose, isDarkMode = false }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Brain, label: 'IQ Questions', path: '/questions' },
    { icon: BookOpen, label: 'Theory Lessons', path: '/lessons' },
    { icon: SignpostBig, label: 'Traffic Signs', path: '/signs' },
    { icon: FileCheck, label: 'Practice Tests', path: '/practice' },
    { icon: Trophy, label: 'Final Test', path: '/final-test' },
    { icon: BarChart3, label: 'Results & Certificates', path: '/results' },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        } w-64 shadow-xl flex flex-col`}
      >
        {/* Close Button (Mobile) */}
        <div className="flex items-center justify-between p-4 lg:hidden border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
            <X size={20} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto p-4">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">
            📘 Learning Modules
          </h3>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isDarkMode
                      ? 'hover:bg-gray-700 active:bg-blue-600'
                      : 'hover:bg-gray-100 active:bg-blue-100'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Stats Box */}
        <div className={`p-4 m-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
          <h4 className="text-sm font-semibold mb-3">📊 Your Progress</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Accuracy:</span>
              <span className="font-bold text-green-600">78%</span>
            </div>
            <div className="flex justify-between">
              <span>Tests Completed:</span>
              <span className="font-bold">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Ready for Exam:</span>
              <span className="text-green-600 font-bold">✅ Yes</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}