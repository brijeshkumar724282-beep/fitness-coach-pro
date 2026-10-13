import { motion } from 'framer-motion'
import { PLANS } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-volt">Pricing</p>
        <h2 id="pricing-title" className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
          Simple plans
        </h2>
        <p className="mt-3 max-w-2xl text-muted">No lock in tricks. Pause anytime, keep your progress data.</p>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {PLANS.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.07}>
            <motion.article
              className={`relative flex h-full flex-col rounded-card p-6 ${
                p.featured ? 'bg-volt text-voltink' : 'card-ring bg-panel'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-ink px-3 py-1 text-xs font-bold text-volt">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-extrabold">{p.name}</h3>
              <p className="mt-3">
                <span className="text-5xl font-black tracking-tight">${p.price}</span>
                <span className={`ml-2 text-sm font-semibold ${p.featured ? 'text-voltink/70' : 'text-muted'}`}>
                  {p.per}
                </span>
              </p>
              <ul className="mt-5 flex-1 space-y-2.5 text-[0.95rem]">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${p.featured ? 'bg-voltink' : 'bg-volt'}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 block rounded-xl py-3 text-center font-bold transition-transform hover:scale-[1.02] ${
                  p.featured ? 'bg-voltink text-volt' : 'bg-volt text-voltink'
                }`}
              >
                Choose {p.name}
              </a>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
