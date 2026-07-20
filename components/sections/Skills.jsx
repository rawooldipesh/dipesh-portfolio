'use client'

import { portfolioData } from '@/data/portfolio'

export default function Skills() {
  const { skills } = portfolioData

  const skillCategories = [
    { label: 'Programming Languages', items: skills.programmingLanguages, icon: '⌨️' },
    { label: 'Backend', items: skills.backend, icon: '⚙️' },
    { label: 'Frontend', items: skills.frontend, icon: '🖥️' },
    { label: 'Databases', items: skills.databases, icon: '🗄️' },
    { label: 'AI & Machine Learning', items: skills.aiMl, icon: '🤖' },
    { label: 'Tools & DevOps', items: skills.tools, icon: '🛠️' },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[var(--color-primary)] text-lg">04.</span>
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="flex-1 h-px bg-[var(--color-border)]"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.label} className="card">

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-semibold text-[var(--color-text-primary)]">
                  {category.label}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-200 cursor-default"
                  >
                    {skill}
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