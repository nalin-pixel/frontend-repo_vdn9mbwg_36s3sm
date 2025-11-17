import { Menu, Gamepad2, KeySquare } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Studio', href: '#studio' },
    { label: 'The Game', href: '#game' },
    { label: 'Features', href: '#features' },
    { label: 'Updates', href: '#updates' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/20">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#top" className="group inline-flex items-center gap-2">
              <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white shadow-lg shadow-fuchsia-500/30">
                <KeySquare className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm leading-none text-white/70">Indie Studio</p>
                <p className="text-lg font-semibold tracking-tight text-white">Cross Key Games</p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 sm:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#updates" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur transition hover:bg-white/20">
                <Gamepad2 className="h-4 w-4" />
                Wishlist Soon
              </a>
            </nav>

            <button aria-label="Menu" className="sm:hidden grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white hover:bg-white/20" onClick={() => setOpen((v) => !v)}>
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="sm:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/10">
                    {item.label}
                  </a>
                ))}
                <a href="#updates" className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/10">Wishlist Soon</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
