'use client'

import { portfolioData } from '@/data/portfolio'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[var(--color-primary)] text-lg">02.</span>
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="flex-1 h-px bg-[var(--color-border)]"></div>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-border)]"></div>

          {experience.map((exp, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-8 mb-12">

              {/* Timeline dot */}
              <div className="absolute left-[-4px] md:left-1/2 md:ml-[-4px] top-2 w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>

              {/* Left — Company & Date */}
              <div className="md:w-1/2 md:text-right md:pr-12 pl-6 md:pl-0">
                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                  {exp.title}
                </h3>
                <p className="text-[var(--color-primary)] font-semibold mt-1">
                  {exp.company}
                </p>
                <p className="text-[var(--color-text-secondary)] text-sm mt-1">
                  {exp.startDate} — {exp.endDate}
                </p>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  {exp.location} · {exp.type}
                </p>
              </div>

              {/* Right — Bullets */}
              <div className="md:w-1/2 md:pl-12 pl-6">
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[var(--color-primary)] mt-1 shrink-0">▹</span>
                      <span className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}