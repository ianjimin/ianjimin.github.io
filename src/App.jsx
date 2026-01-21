import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Activities from './components/Activities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeProvider from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Activities />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
