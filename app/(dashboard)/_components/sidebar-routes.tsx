'use client'

import { Compass, Layout } from 'lucide-react'
import { SidebarItem } from './sidebar-item'

const guestRoutes = [
  {
    icon: Layout,
    label: 'Boost Paneli',
    href: '/',
  },
  {
    icon: Compass,
    label: 'Keşfet',
    href: '/search',
  },
]

export const SidebarRoutes = () => {
  const routes = guestRoutes

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}
