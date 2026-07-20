'use client'

import { portfolioData } from '@/data/portfolio'

export default function About() {
  const { personal, education, achievements } = portfolioData

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[var(--color-primary)] text-lg">01.</span>
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="flex-1 h-px bg-[var(--color-border)]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left — Bio */}
          <div>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {personal.summary}
            </p>

            {/* Achievements */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-[var(--color-text-primary)]">
                Achievements & Recognition
              </h3>
              <ul className="space-y-3">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[var(--color-primary)] mt-1">▹</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Education & Quick Facts */}
          <div>
            {/* Education */}
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-text-primary)]">
              Education
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="card mb-4">
                <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
                  {edu.degree}
                </h4>
                <p className="text-[var(--color-primary)] text-sm mb-2">
                  {edu.institution}
                </p>
                <div className="flex justify-between text-[var(--color-text-secondary)] text-sm">
                  <span>{edu.startDate} — {edu.endDate}</span>
                  <span className="font-mono">CGPA: {edu.cgpa}</span>
                </div>
                {edu.highlights.map((h, i) => (
                  <p key={i} className="text-[var(--color-text-secondary)] text-sm mt-2">
                    ✦ {h}
                  </p>
                ))}
              </div>
            ))}

            {/* Quick Facts */}
            <h3 className="text-lg font-semibold mb-4 mt-8 text-[var(--color-text-primary)]">
              Quick Facts
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Location', value: 'Navi Mumbai' },
                { label: 'Degree', value: 'B.E. IT Engineering' },
                { label: 'CGPA', value: '8.12 / 10' },
                { label: 'Status', value: 'Open to Work' },
              ].map((fact) => (
                <div key={fact.label} className="card text-center">
                  <p className="text-[var(--color-primary)] font-mono text-sm mb-1">
                    {fact.label}
                  </p>
                  <p className="text-[var(--color-text-primary)] font-semibold text-sm">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}