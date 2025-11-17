import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GameSection from './components/GameSection'
import Updates from './components/Updates'

function App() {
  return (
    <div className="min-h-screen bg-black font-[Inter] text-white">
      <Navbar />
      <Hero />
      <GameSection />
      <Updates />
    </div>
  )
}

export default App
