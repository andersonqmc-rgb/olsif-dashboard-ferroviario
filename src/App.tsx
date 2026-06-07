import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App

