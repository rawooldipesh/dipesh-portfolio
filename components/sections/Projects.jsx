'use client'

import { useState, useEffect } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)

  const categories = ['All', 'Full Stack', 'AI/ML']

  // Fetch projects from our own API route
  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setProjects(data.data)
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

  if (loading) {
    return (
      <section id="projects" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-[var(--color-primary)] text-lg">03.</span>
            <h2 className="text-3xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-[var(--color-border)]"></div>
          </div>
          <div className="text-[var(--color-text-secondary)]">Loading projects...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-[var(--color-primary)] text-lg">03.</span>
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="flex-1 h-px bg-[var(--color-border)]"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                filter === cat
                  ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
                  : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <div key={project._id} className="card group flex flex-col justify-between">

              {/* Top */}
              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-mono text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="ml-2 text-xs font-mono text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank"
                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm">
                        GitHub ↗
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank"
                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm">
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-4">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--color-primary)] text-xs mt-1 shrink-0">▹</span>
                      <span className="text-[var(--color-text-secondary)] text-xs leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom — Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[var(--color-border)]">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}