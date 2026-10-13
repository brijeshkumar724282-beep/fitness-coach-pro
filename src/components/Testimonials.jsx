import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../data.js'
import Reveal from './Reveal.jsx'

function BeforeAfter({ before, after, metric, name }) {
  return (
    <div role="img" aria-label={`${name}: ${metric} improved from ${before} to ${after}`}>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-xs font-semibold text-muted">
            <span>Before</span>
            <span className="tick">{before}</span>
          </div>
          <div className="mt-1 h-3 overflow-hidden rounded-full bg-panel2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${before}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-full rounded-full bg-muted"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-volt">After 12 weeks</span>
            <span className="tick text-volt">{after}</span>
          </div>
          <div className="mt-1 h-3 overflow-hidden rounded-full bg-panel2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${after}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="h-full rounded-full bg-volt"
            />
          </div>
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">{metric}</p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="stories" aria-labelledby="stories-title" className="border-t border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-volt">Results</p>
          <h2 id="stories-title" className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
            Real people, real change
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Illustrative progress scores based on typical client retests. Your numbers set the baseline.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <figure className="card-ring flex h-full flex-col rounded-card bg-ink p-6">
                <blockquote className="flex-1 text-[0.98rem] leading-relaxed text-bone">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4">
                  <p className="font-extrabold">{t.name}</p>
                  <p className="text-sm text-muted">{t.program}</p>
                </figcaption>
                <div className="mt-5 border-t border-line pt-5">
                  <BeforeAfter before={t.before} after={t.after} metric={t.metric} name={t.name} />
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
