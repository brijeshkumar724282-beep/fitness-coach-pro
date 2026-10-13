import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PROGRAMS } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Programs() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="programs" aria-labelledby="programs-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-volt">Programs</p>
        <h2 id="programs-title" className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
          Pick your path
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Four proven tracks. Every plan starts with an assessment and ends with a retest you can feel.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {PROGRAMS.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.06}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="card-ring group flex h-full flex-col rounded-card bg-panel p-6"
            >
              <div className="flex items-center justify-between">
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold text-black"
                  style={{ backgroundColor: p.color }}
                >
                  {p.tag}
                </span>
                <span className="text-xs font-semibold text-muted">{p.level}</span>
              </div>
              <h3 className="mt-4 text-2xl font-extrabold tracking-tight">{p.name}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted">{p.summary}</p>
              <div className="mt-4 flex gap-4 text-sm font-semibold">
                <span className="rounded-lg bg-panel2 px-3 py-1.5">{p.duration}</span>
                <span className="rounded-lg bg-panel2 px-3 py-1.5">{p.sessions}</span>
              </div>
              <button
                type="button"
                onClick={() => setActive(p)}
                aria-haspopup="dialog"
                className="mt-5 rounded-xl border border-line py-3 font-bold transition-colors hover:border-volt hover:text-volt"
              >
                View details
              </button>
            </motion.article>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${active.name} details`}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="card-ring w-full max-w-lg rounded-card bg-panel p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold text-black"
                    style={{ backgroundColor: active.color }}
                  >
                    {active.tag}
                  </span>
                  <h3 className="mt-3 text-3xl font-black tracking-tight">{active.name}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {active.duration} · {active.sessions} · {active.level}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close details"
                  className="rounded-lg border border-line px-3 py-2 text-sm font-bold hover:border-volt"
                >
                  Close
                </button>
              </div>
              <ul className="mt-5 space-y-2.5">
                {active.details.map((d) => (
                  <li key={d} className="flex gap-3 text-[0.95rem] leading-relaxed">
                    <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-volt" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-panel2 p-4 text-sm leading-relaxed text-bone">
                <strong className="text-volt">Result: </strong>
                {active.outcome}
              </p>
              <a
                href="#schedule"
                onClick={() => setActive(null)}
                className="mt-5 block rounded-xl bg-volt py-3.5 text-center font-bold text-voltink"
              >
                Book this program
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
