import { useMemo, useState } from 'react'
import Reveal from './Reveal.jsx'

function bmiCategory(bmi) {
  if (!bmi) return ''
  if (bmi < 18.5) return 'Below range. Build up with strength plus food coaching.'
  if (bmi < 25) return 'Healthy range. Great base to build strength on.'
  if (bmi < 30) return 'Above range. Strength plus daily steps is a strong start.'
  return 'Well above range. A coached plan with food support fits best.'
}

export default function Contact() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [form, setForm] = useState({ name: '', email: '', goal: 'Build strength' })
  const [sent, setSent] = useState(false)

  const bmi = useMemo(() => {
    const h = parseFloat(height)
    const w = parseFloat(weight)
    if (!h || !w || h <= 0 || w <= 0) return null
    return w / Math.pow(h / 100, 2)
  }, [height, weight])

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-volt">Contact</p>
        <h2 id="contact-title" className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
          Start with a free session
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Tell us your goal and check your baseline. We reply within one working day.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-ring h-full rounded-card bg-panel p-6">
            <h3 className="text-xl font-extrabold">BMI check</h3>
            <p className="mt-1 text-sm text-muted">
              Quick estimate only, not medical advice. Coaching starts from your full assessment.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="height" className="text-sm font-semibold">
                  Height (cm)
                </label>
                <input
                  id="height"
                  type="number"
                  min="0"
                  inputMode="decimal"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="178"
                  className="mt-1.5 w-full rounded-xl border border-line bg-ink px-4 py-3 text-bone focus:border-volt focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="weight" className="text-sm font-semibold">
                  Weight (kg)
                </label>
                <input
                  id="weight"
                  type="number"
                  min="0"
                  inputMode="decimal"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="78"
                  className="mt-1.5 w-full rounded-xl border border-line bg-ink px-4 py-3 text-bone focus:border-volt focus:outline-none"
                />
              </div>
            </div>
            <div aria-live="polite" className="mt-5 rounded-xl bg-panel2 p-5">
              {bmi ? (
                <>
                  <p className="text-sm text-muted">Your BMI estimate</p>
                  <p className="tick text-4xl font-black text-volt">{bmi.toFixed(1)}</p>
                  <p className="mt-2 text-sm leading-relaxed">{bmiCategory(bmi)}</p>
                </>
              ) : (
                <p className="text-sm text-muted">Enter height and weight to see your estimate.</p>
              )}
            </div>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li>Studio: 44 Foundry Lane, open 06:00 to 21:00</li>
              <li>Email: hello@forgecoach.fit</li>
              <li>Phone: +1 555 014 2200</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="card-ring h-full rounded-card bg-panel p-6">
            {sent ? (
              <div className="grid h-full place-items-center py-10 text-center">
                <div>
                  <p aria-hidden="true" className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-volt text-2xl font-black text-voltink">
                    OK
                  </p>
                  <h3 className="mt-4 text-2xl font-black">Request received</h3>
                  <p className="mt-2 text-muted">
                    Thanks {form.name || 'friend'}. We will write to {form.email || 'your inbox'} about “
                    {form.goal}” within one working day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 rounded-xl border border-line px-6 py-3 font-bold hover:border-volt"
                  >
                    Send another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3 className="text-xl font-extrabold">Request your trial</h3>
                <div className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="cname" className="text-sm font-semibold">
                      Full name
                    </label>
                    <input
                      id="cname"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      autoComplete="name"
                      placeholder="Alex Rivera"
                      className="mt-1.5 w-full rounded-xl border border-line bg-ink px-4 py-3 text-bone placeholder:text-muted/60 focus:border-volt focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="cemail" className="text-sm font-semibold">
                      Email
                    </label>
                    <input
                      id="cemail"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      autoComplete="email"
                      placeholder="alex@mail.com"
                      className="mt-1.5 w-full rounded-xl border border-line bg-ink px-4 py-3 text-bone placeholder:text-muted/60 focus:border-volt focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="cgoal" className="text-sm font-semibold">
                      Main goal
                    </label>
                    <select
                      id="cgoal"
                      value={form.goal}
                      onChange={(e) => setForm({ ...form, goal: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-line bg-ink px-4 py-3 text-bone focus:border-volt focus:outline-none"
                    >
                      <option>Build strength</option>
                      <option>Lose fat</option>
                      <option>Move without pain</option>
                      <option>Eat better</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-volt py-3.5 font-bold text-voltink transition-transform hover:scale-[1.01]"
                  >
                    Claim free session
                  </button>
                  <p className="text-center text-xs text-muted">Demo form. Nothing leaves your browser.</p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
