import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [animatedText, setAnimatedText] = useState('deliver')
  const texts = ['deliver', 'impact','improve']

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedText(prev => {
        const currentIndex = texts.indexOf(prev)
        return texts[(currentIndex + 1) % texts.length]
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <img 
              src="/images/headshot.jpg" 
              alt="Ian Kim" 
              className="hero-headshot"
              onError={(e) => {
                // Try alternative extensions
                const src = e.target.src
                if (src.includes('.jpg')) {
                  e.target.src = src.replace('.jpg', '.jpeg')
                } else if (src.includes('.jpeg')) {
                  e.target.src = src.replace('.jpeg', '.png')
                }
              }}
            />
          </motion.div>
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Ian Kim</h1>
          <p className="hero-role">Mechanical Engineering Student</p>
        </motion.div>

        <motion.div
          className="hero-main"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="hero-title">
            <span className="hero-title-line">I design and build</span>
            <span className="hero-title-line">systems that</span>
            <span className="hero-title-line">
              <motion.span
                key={animatedText}
                className="animated-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {animatedText}
              </motion.span>
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#contact" className="hero-connect">Let's Connect</a>
          <a href="mailto:iank8992@gmail.com" className="hero-email">
            iank8992@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}
