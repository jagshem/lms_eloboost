import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

interface SidebarItemProps {
  icon: LucideIcon
  label: string
  href: string
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname()
  const router = useRouter()

  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`)

  const onClick = () => {
    router.push(href)
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        'flex items-center gap-x-2 text-slate-500 text-sm font-medium pl-6 transition-all rounded-lg',
        'hover:bg-slate-200/30 active:bg-slate-300/50', // Güncellenmiş hover ve active arka plan stilleri
        isActive && 'bg-slate-200/50', // Aktif durumda arka plan stili
        'mx-3 my-1' // Kenarlardan boşluk vermek için margin ayarı
      )}
      style={{
        padding: '4px 8px', // İç padding ayarları
      }}
    >
      <div
        className="flex items-center gap-x-2 py-3"
        style={{ width: 'calc(100% - 20px)' }}
      >
        <Icon
          size={22}
          className={cn('text-slate-500', isActive && 'text-black')}
        />
        <div className={cn('text-slate-500', isActive && 'text-black')}>
          {label}
        </div>
      </div>
      <div
        className={cn(
          'ml-auto opacity-0 border-2 border-sky-700 h-full transition-all rounded-lg',
          isActive && 'opacity-100'
        )}
      />
    </button>
  )
}
