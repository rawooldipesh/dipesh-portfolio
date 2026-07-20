'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Full Stack Developer & AI Engineer'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 60)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="animate-fade-in">

          {/* Greeting */}
          <p className="font-mono text-[var(--color-primary)] mb-4 text-lg">
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-text-primary)] mb-4 leading-tight">
            Dipesh Rawool
          </h1>

          {/* Typewriter title */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{displayText}</span>
            <span className="animate-pulse text-[var(--color-primary)]">|</span>
          </h2>

          {/* Description */}
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mb-10 leading-relaxed">
            I build production-level full-stack applications and AI-powered solutions.
            Currently focused on Next.js, RAG architecture, and LLM integration.
            Based in Navi Mumbai, open to opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-lg font-medium hover:opacity-80 transition-all duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3 rounded-lg font-medium hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-12">
            <a
              href="https://github.com/rawooldipesh"
              target="_blank"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200 font-mono text-sm"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/dipesh-rawool"
              target="_blank"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200 font-mono text-sm"
            >
              LinkedIn ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}