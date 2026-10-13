import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '../data.js'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setN(value)
      return
    }
    let frame
    const start = performance.now()
    const dur = 1400
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * value))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref} className="tick text-4xl font-black tracking-tight text-bone md:text-5xl">
      {n.toLocaleString()}
      <span className="text-volt">{suffix}</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-line" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-64 h-72 w-72 rounded-full border border-line" />
      <div className="relative mx-auto max-w-6xl px-5 pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted"
            >
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-volt" />
              Coaching in studio plus online
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="mt-5 text-5xl font-black leading-[1.02] tracking-tight md:text-7xl"
            >
              Get strong.
              <br />
              Stay <span className="bg-volt px-2 text-voltink">consistent.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-muted"
            >
              Strength, conditioning, yoga and food coaching in one clear plan.
              Train with a coach, track progress in the app, see change in twelve weeks.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#schedule"
                className="rounded-full bg-volt px-7 py-3.5 font-bold text-voltink transition-transform hover:scale-105"
              >
                Book a free trial
              </a>
              <a
                href="#programs"
                className="rounded-full border border-line bg-panel px-7 py-3.5 font-bold text-bone transition-colors hover:border-volt"
              >
                Explore programs
              </a>
            </motion.div>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="order-2 mt-1 text-sm text-muted">{s.label}</dt>
                  <dd className="order-1">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="card-ring overflow-hidden rounded-card bg-panel">
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <p className="text-sm font-bold">This week at Forge</p>
                <span className="rounded-full bg-volt px-3 py-1 text-xs font-bold text-voltink">3 spots open Sat</span>
              </div>
              <ul className="divide-y divide-line">
                {[
                  ['Mon 18:00', 'HIIT Ignite', 'Dev', 'High'],
                  ['Thu 07:00', 'Strength Club', 'Mara', 'Med'],
                  ['Sat 09:00', 'Team Workout', 'All coaches', 'Med'],
                ].map(([when, what, coach, level]) => (
                  <li key={when} className="flex items-center justify-between px-5 py-4">
                    <div>
                      <p className="font-bold">{what}</p>
                      <p className="text-sm text-muted">
                        {when} with {coach}
                      </p>
                    </div>
                    <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted">{level}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-line bg-panel2 px-5 py-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Trial week</span>
                  <span className="font-black text-volt">$0 first class</span>
                </div>
                <a
                  href="#schedule"
                  className="mt-3 block rounded-xl bg-volt py-3 text-center font-bold text-voltink transition-transform hover:scale-[1.02]"
                >
                  Claim your spot
                </a>
              </div>
            </div>
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-3 -top-5 rounded-2xl border border-line bg-panel2 px-4 py-3 text-sm font-bold shadow-xl"
            >
              <span className="text-volt">+38%</span> avg strength gain
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
