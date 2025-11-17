import { Wand2, Castle, Hammer, Sparkles, FlaskRound, Flame, Snowflake, Droplets, Zap } from 'lucide-react'

const Feature = ({ icon: Icon, title, children }) => (
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
      <Icon className="h-4 w-4" />
      Feature
    </div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="mt-2 text-white/80">{children}</p>
  </div>
)

export default function GameSection() {
  const elements = [
    { name: 'Fire', icon: Flame, color: 'from-orange-500 to-pink-500' },
    { name: 'Ice', icon: Snowflake, color: 'from-sky-400 to-indigo-500' },
    { name: 'Water', icon: Droplets, color: 'from-cyan-400 to-blue-500' },
    { name: 'Lightning', icon: Zap, color: 'from-yellow-400 to-amber-600' },
  ]

  return (
    <section id="game" className="relative z-10 -mt-24 bg-gradient-to-b from-black to-[#0a0a12] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
              <Wand2 className="h-4 w-4" />
              Debut Title
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">A third‑person roguelite townbuilder</h2>
            <p className="mt-3 text-white/80">
              Rebuild a whimsical crossroads town between realms, then dive into ever‑shifting dungeons as a spell‑crafting wizard. Bring back resources, befriend quirky locals, and grow your power.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Feature icon={Castle} title="Cozy Town, Rogue Heart">
                Loop between town life and randomized expeditions. Every run changes the story you tell.
              </Feature>
              <Feature icon={Hammer} title="Build With Purpose">
                Place buildings that unlock vendors, upgrades, and playful automation back home.
              </Feature>
              <Feature icon={Sparkles} title="Make Your Magic">
                Forge spells by combining elemental runes. Chain reactions are encouraged.
              </Feature>
              <Feature icon={FlaskRound} title="Experiment, Break, Laugh">
                Systems are made to be toyed with. If its clever, it probably works.
              </Feature>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white/90">Elemental Spellcraft</h3>
              <p className="mt-1 text-sm text-white/70">Combine runes to design spells on the fly.</p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {elements.map((el) => (
                  <div key={el.name} className={`rounded-xl p-4 text-center text-white ring-1 ring-white/10 bg-gradient-to-br ${el.color}`}>
                    <el.icon className="mx-auto h-6 w-6" />
                    <p className="mt-2 text-sm font-medium">{el.name}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-black/40 p-4 ring-1 ring-white/10">
                <p className="text-sm text-white/80">Mix elements to invent patterns: Fire + Wind = Firestorm, Water + Ice = Glacier Wall, Lightning + Water = Storm Conduit. Share your best builds with the community.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
