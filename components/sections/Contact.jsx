'use client'

import { useState } from 'react'
import { portfolioData } from '@/data/portfolio'

export default function Contact() {
  const { personal } = portfolioData
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[var(--color-primary)] text-lg">05.</span>
          <h2 className="text-3xl font-bold">Contact</h2>
          <div className="flex-1 h-px bg-[var(--color-border)]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left — Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-text-primary)]">
              Let's Work Together
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
              I'm currently open to junior developer roles and freelance opportunities. 
              Whether you have a project in mind or just want to connect — my inbox is open.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-[var(--color-primary)] font-mono text-sm w-20">Email</span>
                <a href={`mailto:${personal.email}`}
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200 text-sm">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[var(--color-primary)] font-mono text-sm w-20">Phone</span>
                <span className="text-[var(--color-text-secondary)] text-sm">{personal.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[var(--color-primary)] font-mono text-sm w-20">Location</span>
                <span className="text-[var(--color-text-secondary)] text-sm">{personal.location}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[var(--color-primary)] font-mono text-sm w-20">GitHub</span>
                <a href={personal.github} target="_blank"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200 text-sm">
                  github.com/rawooldipesh ↗
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[var(--color-primary)] font-mono text-sm w-20">LinkedIn</span>
                <a href={personal.linkedin} target="_blank"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-200 text-sm">
                  linkedin.com/in/dipesh-rawool ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-200 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-200 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-200 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[var(--color-primary)] text-white py-3 rounded-lg font-medium hover:opacity-80 transition-all duration-200 disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm text-center">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again or email directly.
                </p>
              )}

            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-[var(--color-border)] text-center">
          <p className="font-mono text-[var(--color-text-secondary)] text-sm">
            Designed & Built by{' '}
            <span className="text-[var(--color-primary)]">Dipesh Rawool</span>
            {' '}· {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </section>
  )
}