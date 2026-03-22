import { useState, useRef, useEffect } from 'react'
import { BellIcon, CheckCheckIcon, XIcon } from 'lucide-react'
import { useUser } from '@clerk/clerk-react'

const ICONS = {
  task:       '📋',
  invitation: '🤝',
  mention:    '💬',
  deadline:   '⏰',
  default:    '🔔',
}

const getMockNotifications = (user) => {
  const name = user?.firstName ?? 'there'
  const username = user?.username ?? user?.firstName ?? 'you'

  return [
    {
      id: 1,
      type: 'task',
      title: 'New task assigned',
      message: `Hey ${name}, "Fix login bug" was assigned to you`,
      createdAt: new Date(Date.now() - 2 * 60 * 1000).toISOString(),   // 2 min ago
      read: false,
    },
    {
      id: 2,
      type: 'invitation',
      title: 'Workspace invitation',
      message: `${name}, you've been invited to join "Design Team"`,
      createdAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(),  // 1 hr ago
      read: false,
    },
    {
      id: 3,
      type: 'mention',
      title: 'You were mentioned',
      message: `Someone mentioned @${username} in "Sprint Planning"`,
      createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hr ago
      read: false,
    },
    {
      id: 4,
      type: 'deadline',
      title: 'Deadline approaching',
      message: `${name}, "Homepage Redesign" is due tomorrow`,
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hr ago
      read: true,
    },
  ]
}

const timeAgo = (isoString) => {
  const diff = Math.floor((Date.now() - new Date(isoString)) / 1000)
  if (diff < 60) return `${diff}s ago`
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
  return `${Math.floor(diff / 86400)}d ago`
}

export default function NotificationBell() {
  const { user } = useUser()
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState([])
  const ref = useRef(null)

  // Load mock notifications once user is available
  useEffect(() => {
    if (user) setNotifications(getMockNotifications(user))
  }, [user])

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const unreadCount = notifications.filter(n => !n.read).length

  const markRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n))
  }

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
  }

  const remove = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  return (
    <div className="relative" ref={ref}>

      {/* Bell Button */}
      <button
        onClick={() => setOpen(p => !p)}
        className="relative size-8 flex items-center justify-center bg-white dark:bg-zinc-800 shadow rounded-lg transition hover:scale-105 active:scale-95"
      >
        <BellIcon className="size-4 text-gray-700 dark:text-gray-200" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[16px] h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-0.5">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-xl z-50 overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-zinc-800">
            <span className="text-sm font-medium text-gray-900 dark:text-white">Notifications</span>
            {unreadCount > 0 && (
              <button
                onClick={markAllRead}
                className="flex items-center gap-1 text-xs text-blue-500 hover:text-blue-600"
              >
                <CheckCheckIcon size={12} /> Mark all read
              </button>
            )}
          </div>

          {/* List */}
          <ul className="max-h-80 overflow-y-auto divide-y divide-gray-100 dark:divide-zinc-800">
            {notifications.length === 0 ? (
              <li className="py-8 text-center text-sm text-gray-400 dark:text-zinc-500">
                No notifications yet
              </li>
            ) : (
              notifications.map(n => (
                <li
                  key={n.id}
                  onClick={() => markRead(n.id)}
                  className={`flex items-start gap-3 px-4 py-3 cursor-pointer transition-colors ${
                    !n.read
                      ? 'bg-blue-50 dark:bg-zinc-800'
                      : 'hover:bg-gray-50 dark:hover:bg-zinc-800/50'
                  }`}
                >
                  <span className="text-lg leading-none mt-0.5">
                    {ICONS[n.type] ?? ICONS.default}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {n.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5 line-clamp-2">
                      {n.message}
                    </p>
                    <p className="text-[10px] text-gray-400 dark:text-zinc-500 mt-1">
                      {timeAgo(n.createdAt)}
                    </p>
                  </div>
                  <button
                    onClick={e => { e.stopPropagation(); remove(n.id) }}
                    className="text-gray-300 dark:text-zinc-600 hover:text-gray-500 mt-0.5 flex-shrink-0"
                  >
                    <XIcon size={14} />
                  </button>
                </li>
              ))
            )}
          </ul>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="px-4 py-2 border-t border-gray-100 dark:border-zinc-800 text-center">
              <span className="text-xs text-gray-400 dark:text-zinc-500">
                {unreadCount > 0 ? `${unreadCount} unread` : 'All caught up ✓'}
              </span>
            </div>
          )}

        </div>
      )}
    </div>
  )
}