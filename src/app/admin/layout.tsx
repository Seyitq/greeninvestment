'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  HiOutlineHome,
  HiOutlineOfficeBuilding,
  HiOutlineNewspaper,
  HiOutlineMail,
  HiOutlineLogout,
  HiOutlineExternalLink,
} from 'react-icons/hi'

const sidebarLinks = [
  { href: '/admin', label: 'Panel', icon: HiOutlineHome },
  { href: '/admin/projeler', label: 'Projeler', icon: HiOutlineOfficeBuilding },
  { href: '/admin/blog', label: 'Blog', icon: HiOutlineNewspaper },
  { href: '/admin/mesajlar', label: 'Mesajlar', icon: HiOutlineMail },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === '/admin/giris') {
    return <>{children}</>
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/giris')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-dark flex">
      {/* Sidebar */}
      <aside className="w-64 bg-dark-50 border-r border-dark-300 flex flex-col shrink-0">
        {/* Logo */}
        <div className="p-5 border-b border-dark-300">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neon/10 border border-neon/30 flex items-center justify-center">
              <span className="text-neon font-bold text-sm">G</span>
            </div>
            <div>
              <span className="text-white font-bold text-sm">GREEN</span>
              <span className="text-neon font-bold text-sm ml-1">ADMIN</span>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/admin' && pathname?.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-neon/10 text-neon border border-neon/20'
                    : 'text-gray-400 hover:text-white hover:bg-dark-200'
                }`}
              >
                <link.icon size={18} />
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t border-dark-300 space-y-1">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-dark-200 transition-colors"
          >
            <HiOutlineExternalLink size={18} />
            Siteyi Gör
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <HiOutlineLogout size={18} />
            Çıkış Yap
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6 md:p-8">{children}</div>
      </main>
    </div>
  )
}
