import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { DAYS, SCHEDULE } from '../data.js'
import Reveal from './Reveal.jsx'

const KEY = 'forge-bookings-v1'

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
  } catch {
    return []
  }
}

export default function Schedule() {
  const [day, setDay] = useState('Mon')
  const [bookings, setBookings] = useState([])
  const [name, setName] = useState('')
  const [flash, setFlash] = useState('')

  useEffect(() => {
    setBookings(load())
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(bookings))
  }, [bookings])

  const items = useMemo(() => SCHEDULE.filter((c) => c.day === day), [day])
  const bookedIds = useMemo(() => new Set(bookings.map((b) => b.id)), [bookings])

  const book = (cls) => {
    if (bookedIds.has(cls.id)) {
      setBookings((prev) => prev.filter((b) => b.id !== cls.id))
      setFlash(`Spot released for ${cls.title} at ${cls.time}.`)
      return
    }
    const taken = bookings.filter((b) => b.id === cls.id).length
    if (taken >= 1) return
    const who = name.trim() || 'Guest'
    setBookings((prev) => [...prev, { id: cls.id, title: cls.title, day: cls.day, time: cls.time, who }])
    setFlash(`${who}, you are booked for ${cls.title} at ${cls.time} on ${cls.day}.`)
  }

  return (
    <section id="schedule" aria-labelledby="schedule-title" className="scroll-mt-24 border-y border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-volt">Schedule</p>
          <h2 id="schedule-title" className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
            Book your week
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Pick a day, reserve a spot. Bookings save in this browser so you can manage your week.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <label htmlFor="booker-name" className="text-sm font-semibold text-muted">
              Name for booking
            </label>
            <input
              id="booker-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex"
              autoComplete="given-name"
              className="w-44 rounded-xl border border-line bg-ink px-4 py-2.5 text-sm text-bone placeholder:text-muted/60 focus:border-volt focus:outline-none"
            />
            <span className="ml-auto rounded-full border border-line px-4 py-1.5 text-sm font-semibold text-muted">
              {bookings.length} {bookings.length === 1 ? 'spot' : 'spots'} reserved
            </span>
          </div>
        </Reveal>

        <div role="tablist" aria-label="Days of week" className="mt-6 grid grid-cols-7 gap-2">
          {DAYS.map((d) => (
            <button
              key={d}
              role="tab"
              aria-selected={day === d}
              onClick={() => setDay(d)}
              className={`rounded-xl py-3 text-sm font-bold transition-colors ${
                day === d ? 'bg-volt text-voltink' : 'border border-line bg-ink text-muted hover:text-bone'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div aria-live="polite" className="mt-4 min-h-6 text-sm font-semibold text-volt">
          {flash}
        </div>

        <ul className="mt-2 grid gap-4 md:grid-cols-2">
          {items.map((c, i) => {
            const booked = bookedIds.has(c.id)
            const left = booked ? c.spots - 1 : c.spots
            return (
              <motion.li
                key={c.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={`card-ring rounded-card bg-ink p-5 ${booked ? 'border-volt' : ''}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-3xl font-black tracking-tight">
                      {c.time}
                      <span className="ml-2 align-middle text-sm font-semibold text-muted">{c.day}</span>
                    </p>
                    <p className="mt-1 text-lg font-bold">{c.title}</p>
                    <p className="text-sm text-muted">
                      Coach {c.coach} · {c.intensity} intensity · {left} spots left
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`h-3 w-3 rounded-full ${booked ? 'bg-volt' : 'bg-line'}`}
                  />
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-panel2" aria-hidden="true">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, ((c.spots - left + 3) / c.spots) * 100)}%` }}
                    transition={{ duration: 0.6 }}
                    className="h-full rounded-full bg-volt"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => book(c)}
                  aria-pressed={booked}
                  className={`mt-4 w-full rounded-xl py-3 font-bold transition-transform hover:scale-[1.01] ${
                    booked ? 'border border-volt text-volt' : 'bg-volt text-voltink'
                  }`}
                >
                  {booked ? 'Cancel spot' : 'Book spot'}
                </button>
              </motion.li>
            )
          })}
        </ul>

        {bookings.length > 0 && (
          <div className="card-ring mt-8 rounded-card bg-ink p-5">
            <h3 className="font-extrabold">My bookings</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {bookings.map((b) => (
                <li key={b.id} className="flex items-center justify-between gap-3 rounded-lg bg-panel2 px-4 py-2.5">
                  <span>
                    <strong>{b.title}</strong> · {b.day} {b.time} · {b.who}
                  </span>
                  <button
                    type="button"
                    onClick={() => book({ ...b })}
                    className="font-bold text-volt hover:underline"
                  >
                    Cancel
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                setBookings([])
                setFlash('All bookings cleared.')
              }}
              className="mt-3 text-sm font-semibold text-muted hover:text-bone"
            >
              Clear all
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
