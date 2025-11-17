import { Mail, Send, Twitter } from 'lucide-react'
import { useState } from 'react'

export default function Updates() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('Please enter a valid email.')
      return
    }
    setStatus('Thanks! You\'re on the list.')
    setEmail('')
  }

  return (
    <section id="updates" className="bg-[#0a0a12] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                <Mail className="h-4 w-4" />
                Newsletter
              </div>
              <h3 className="mt-3 text-3xl font-bold text-white">Get updates from Cross Key Games</h3>
              <p className="mt-2 text-white/80">Be first to know about devlogs, alphas, and wishlist news.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@player.gg"
                className="h-12 flex-1 rounded-xl border border-white/10 bg-black/40 px-4 text-white placeholder-white/40 outline-none ring-0 focus:border-white/30"
              />
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white/90 px-5 font-semibold text-black transition hover:bg-white">
                <Send className="h-4 w-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} Cross Key Games. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#">Press Kit</a>
            <a className="hover:text-white" href="#"><Twitter className="inline h-4 w-4" /> X/Twitter</a>
          </div>
        </div>
      </div>
    </section>
  )
}
