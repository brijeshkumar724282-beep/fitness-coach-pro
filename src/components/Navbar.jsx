import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#programs', label: 'Programs' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#stories', label: 'Stories' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors ${
        scrolled ? 'border-line bg-ink/95 backdrop-blur' : 'border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-xl bg-volt text-xl font-black text-voltink">
            F
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            Forge<span className="text-volt">.</span>
          </span>
        </a>
        <ul className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-bone">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <a
            href="#schedule"
            className="rounded-full bg-volt px-5 py-2.5 text-sm font-bold text-voltink transition-transform hover:scale-105"
          >
            Book free trial
          </a>
        </div>
        <button
          type="button"
          className="rounded-lg border border-line px-3 py-2 text-sm font-semibold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ink px-5 py-4 md:hidden">
          <ul className="space-y-3 text-base font-medium">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-1 text-bone">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#schedule"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-volt px-5 py-3 text-center font-bold text-voltink"
              >
                Book free trial
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
