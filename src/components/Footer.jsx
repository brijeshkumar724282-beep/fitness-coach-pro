export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 text-lg font-extrabold">
            <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-xl bg-volt text-xl font-black text-voltink">
              F
            </span>
            Forge<span className="text-volt">.</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Strength, conditioning, yoga and nutrition coaching. Train hard, recover smart, repeat.
          </p>
        </div>
        <nav aria-label="Footer programs">
          <p className="text-sm font-bold uppercase tracking-widest text-muted">Programs</p>
          <ul className="mt-3 space-y-2 text-sm font-medium">
            <li><a href="#programs" className="hover:text-volt">Strength Foundations</a></li>
            <li><a href="#programs" className="hover:text-volt">HIIT Ignite</a></li>
            <li><a href="#programs" className="hover:text-volt">Strong Yoga Flow</a></li>
            <li><a href="#programs" className="hover:text-volt">Fuel Nutrition</a></li>
          </ul>
        </nav>
        <nav aria-label="Footer studio">
          <p className="text-sm font-bold uppercase tracking-widest text-muted">Studio</p>
          <ul className="mt-3 space-y-2 text-sm font-medium">
            <li><a href="#schedule" className="hover:text-volt">Class schedule</a></li>
            <li><a href="#pricing" className="hover:text-volt">Pricing</a></li>
            <li><a href="#stories" className="hover:text-volt">Client stories</a></li>
            <li><a href="#contact" className="hover:text-volt">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-5 text-xs text-muted">
          <p>Forge Coaching template. Built for demo, customize freely.</p>
          <p>BMI tool is an estimate, not medical advice.</p>
        </div>
      </div>
    </footer>
  )
}
