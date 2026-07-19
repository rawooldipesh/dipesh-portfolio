import 'dotenv/config'

import connectDB from './mongodb.js'
import Project from './models/Project.js'
import { portfolioData } from '../data/portfolio.js'

async function seedDatabase() {
  try {
    await connectDB()
    console.log('Connected to MongoDB')

    // Clear existing projects first
    await Project.deleteMany({})
    console.log('Cleared existing projects')

    // Insert all projects from portfolio data
    const projects = await Project.insertMany(portfolioData.projects)
    console.log(`Inserted ${projects.length} projects`)

    console.log('Database seeded successfully')
    process.exit(0)

  } catch (error) {
    console.error('Seeding failed:', error)
    process.exit(1)
  }
}

seedDatabase()